"use client";

import { useState, useEffect } from "react";
import { useOrderStore } from "@/store/useOrderStore";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Order, OrderStatus } from "@/lib/types";
import { format, parseISO } from "date-fns";
import { toast } from "sonner";
import { SearchIcon, FilterIcon, MoreHorizontal, ArrowUpDown } from "lucide-react";
import { motion } from "framer-motion";

export default function OrdersPage() {
    const { orders, isLoading, fetchOrders, updateOrderStatus } = useOrderStore();
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [viewOrderOpen, setViewOrderOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
    const [sortField, setSortField] = useState<"date" | "total">("date");

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    // Filter and sort orders
    const filteredOrders = orders
        .filter(order => {
            // Filter by status
            if (statusFilter !== "all" && order.status !== statusFilter) {
                return false;
            }

            // Filter by search query
            const searchFields = [
                order.id,
                `${order.customer.firstName} ${order.customer.lastName}`,
                order.customer.email,
            ];

            if (searchQuery && !searchFields.some(field =>
                field.toLowerCase().includes(searchQuery.toLowerCase())
            )) {
                return false;
            }

            return true;
        })
        // Sort orders
        .sort((a, b) => {
            if (sortField === "date") {
                return sortDirection === "asc"
                    ? new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
                    : new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
            } else if (sortField === "total") {
                return sortDirection === "asc"
                    ? a.total - b.total
                    : b.total - a.total;
            }
            return 0;
        });

    const toggleSort = (field: "date" | "total") => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("desc");
        }
    };

    const handleUpdateStatus = async (orderId: string, newStatus: OrderStatus) => {
        try {
            await updateOrderStatus(orderId, newStatus);
            toast.success(`Order status updated to ${newStatus}`);

            // Update the selected order if it's currently being viewed
            if (selectedOrder && selectedOrder.id === orderId) {
                setSelectedOrder({
                    ...selectedOrder,
                    status: newStatus,
                });
            }
        } catch (error) {
            toast.error("Failed to update order status");
        }
    };

    const getStatusVariant = (status: OrderStatus): "default" | "outline" | "secondary" | "destructive" => {
        switch (status) {
            case "completed":
                return "default";
            case "processing":
            case "on-hold":
                return "secondary";
            case "cancelled":
            case "failed":
                return "destructive";
            default:
                return "outline";
        }
    };

    const getStatusDisplay = (status: OrderStatus): string => {
        return status.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    };

    return (
        <DashboardLayout>
            <div className="space-y-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Commandes</h2>
                    <p className="text-muted-foreground">
                        Gérez et exécutez les commandes des clients.
                    </p>
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="relative flex-1">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Rechercher par ID de commande, nom ou email du client..."
                            className="pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2">
                        <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as OrderStatus | "all")}>
                            <SelectTrigger className="w-[180px]">
                                <FilterIcon className="mr-2 h-4 w-4" />
                                <span>{statusFilter === "all" ? "Tous les statuts" : getStatusDisplay(statusFilter)}</span>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Tous les statuts</SelectItem>
                                <SelectItem value="pending">En attente</SelectItem>
                                <SelectItem value="processing">En cours</SelectItem>
                                <SelectItem value="on-hold">En pause</SelectItem>
                                <SelectItem value="completed">Terminé</SelectItem>
                                <SelectItem value="cancelled">Annulé</SelectItem>
                                <SelectItem value="refunded">Remboursé</SelectItem>
                                <SelectItem value="failed">Échoué</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID Commande</TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSort("date")}
                                        className="flex items-center px-0"
                                    >
                                        Date
                                        <ArrowUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </TableHead>
                                <TableHead>Statut</TableHead>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSort("total")}
                                        className="flex items-center px-0"
                                    >
                                        Total
                                        <ArrowUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <TableRow key={index}>
                                        <TableCell colSpan={6} className="h-16 text-center">
                                            <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : filteredOrders.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-16 text-center">
                                        Aucune commande ne correspond à vos critères.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredOrders.map((order) => (
                                    <motion.tr
                                        key={order.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                    >
                                        <TableCell className="font-medium">#{order.id.split('-')[1]}</TableCell>
                                        <TableCell>
                                            <div>
                                                <div className="font-medium">{order.customer.firstName} {order.customer.lastName}</div>
                                                <div className="text-sm text-muted-foreground">{order.customer.email}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{format(parseISO(order.dateCreated), "d MMM yyyy")}</TableCell>
                                        <TableCell>
                                            <Badge variant={getStatusVariant(order.status)}>
                                                {getStatusDisplay(order.status)}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="font-medium">{order.total.toFixed(2)} €</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem
                                                        onClick={() => {
                                                            setSelectedOrder(order);
                                                            setViewOrderOpen(true);
                                                        }}
                                                    >
                                                        Voir les détails
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        disabled={order.status === "completed"}
                                                        onClick={() => handleUpdateStatus(order.id, "completed")}
                                                    >
                                                        Marquer comme terminé
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        disabled={order.status === "processing"}
                                                        onClick={() => handleUpdateStatus(order.id, "processing")}
                                                    >
                                                        Marquer comme en cours
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        disabled={order.status === "on-hold"}
                                                        onClick={() => handleUpdateStatus(order.id, "on-hold")}
                                                    >
                                                        Mettre en pause
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        disabled={order.status === "cancelled"}
                                                        className="text-destructive"
                                                        onClick={() => handleUpdateStatus(order.id, "cancelled")}
                                                    >
                                                        Annuler la commande
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </motion.tr>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Détails de la commande */}
            <Dialog open={viewOrderOpen} onOpenChange={setViewOrderOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Commande #{selectedOrder?.id.split('-')[1]}</DialogTitle>
                        <DialogDescription>
                            Détails de la commande et articles inclus.
                        </DialogDescription>
                    </DialogHeader>

                    {selectedOrder && (
                        <ScrollArea className="flex-1 pr-4">
                            <div className="space-y-6 pb-4">
                                <div className="grid gap-4 md:grid-cols-3">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-sm">Client</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="font-medium">
                                                {selectedOrder.customer.firstName} {selectedOrder.customer.lastName}
                                            </p>
                                            <p className="text-sm text-muted-foreground">{selectedOrder.customer.email}</p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-sm">Statut de la commande</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-2">
                                                <Badge variant={getStatusVariant(selectedOrder.status)}>
                                                    {getStatusDisplay(selectedOrder.status)}
                                                </Badge>

                                                <Select
                                                    defaultValue={selectedOrder.status}
                                                    onValueChange={(value) => handleUpdateStatus(selectedOrder.id, value as OrderStatus)}
                                                >
                                                    <SelectTrigger className="h-8 ml-2 w-[140px]">
                                                        <SelectValue placeholder="Changer le statut" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="pending">En attente</SelectItem>
                                                        <SelectItem value="processing">En traitement</SelectItem>
                                                        <SelectItem value="on-hold">En pause</SelectItem>
                                                        <SelectItem value="completed">Terminée</SelectItem>
                                                        <SelectItem value="cancelled">Annulée</SelectItem>
                                                        <SelectItem value="refunded">Remboursée</SelectItem>
                                                        <SelectItem value="failed">Échouée</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <p className="text-xs text-muted-foreground mt-2">
                                                Commande passée le {format(parseISO(selectedOrder.dateCreated), "d MMMM yyyy 'à' H:mm")}
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-sm">Paiement</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="font-medium">{selectedOrder.paymentMethodTitle}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Total : {selectedOrder.total.toFixed(2)} €
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Articles de la commande</CardTitle>
                                        <CardDescription>Produits inclus dans cette commande.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Produit</TableHead>
                                                    <TableHead>Prix</TableHead>
                                                    <TableHead>Quantité</TableHead>
                                                    <TableHead className="text-right">Total</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {selectedOrder.lineItems.map((item) => (
                                                    <TableRow key={item.id}>
                                                        <TableCell className="font-medium">{item.name}</TableCell>
                                                        <TableCell>{item.price.toFixed(2)} €</TableCell>
                                                        <TableCell>{item.quantity}</TableCell>
                                                        <TableCell className="text-right">{item.total.toFixed(2)} €</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                    <CardFooter className="flex justify-between border-t pt-6">
                                        <p className="text-muted-foreground">Sous-total</p>
                                        <p className="font-medium">
                                            {selectedOrder.lineItems.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2)} €
                                        </p>
                                    </CardFooter>
                                </Card>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Adresse de livraison</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-1">
                                                <p className="font-medium">
                                                    {selectedOrder.shipping.firstName} {selectedOrder.shipping.lastName}
                                                </p>
                                                <p>{selectedOrder.shipping.address1}</p>
                                                {selectedOrder.shipping.address2 && <p>{selectedOrder.shipping.address2}</p>}
                                                <p>
                                                    {selectedOrder.shipping.city}, {selectedOrder.shipping.state} {selectedOrder.shipping.postcode}
                                                </p>
                                                <p>{selectedOrder.shipping.country}</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {selectedOrder.notes && (
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Notes de la commande</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm">{selectedOrder.notes}</p>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </div>
                        </ScrollArea>
                    )}
                </DialogContent>
            </Dialog>

        </DashboardLayout>
    );
}