import React from 'react';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Order, OrderStatus} from "@/lib/types";
import {format, parseISO} from "date-fns";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";


interface PropsType {
    viewOrderOpen: boolean;
    setViewOrderOpen: (open: boolean) => void;
    selectedOrder: Order | null;
    getStatusVariant: (status: OrderStatus) => "default" | "outline" | "secondary" | "destructive" | null | undefined;
    getStatusDisplay: (status: OrderStatus) => string;
    handleUpdateStatus: (orderId: string, status: OrderStatus) => void;
}


const OrderDetailModal = (
    {
        setViewOrderOpen,
        viewOrderOpen,
        selectedOrder,
        getStatusVariant,
        getStatusDisplay,
        handleUpdateStatus
    } : PropsType
) => {
    return (
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
    );
};

export default OrderDetailModal;