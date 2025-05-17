"use client";

import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Customer } from "@/lib/types";
import { customersData } from "@/lib/data/customers";
import { ordersData } from "@/lib/data/orders";
import { format, parseISO } from "date-fns";
import { Search, Users, Mail, ArrowUpDown, MoreHorizontal, User, Box, Clock, DollarSign } from "lucide-react";

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortField, setSortField] = useState<"name" | "date" | "spent" | "orders">("date");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [viewCustomerOpen, setViewCustomerOpen] = useState(false);

    useEffect(() => {
        // Simulate fetching customers from API
        const fetchCustomers = async () => {
            setIsLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setCustomers(customersData);
            } catch (error) {
                console.error("Failed to fetch customers:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    // Filter and sort customers
    const filteredCustomers = customers
        .filter((customer) => {
            if (!searchQuery) return true;

            const fullName = `${customer.firstName} ${customer.lastName}`.toLowerCase();
            return (
                fullName.includes(searchQuery.toLowerCase()) ||
                customer.email.toLowerCase().includes(searchQuery.toLowerCase())
            );
        })
        .sort((a, b) => {
            switch (sortField) {
                case "name":
                    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
                    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
                    return sortDirection === "asc"
                        ? nameA.localeCompare(nameB)
                        : nameB.localeCompare(nameA);
                case "date":
                    return sortDirection === "asc"
                        ? new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
                        : new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
                case "spent":
                    return sortDirection === "asc"
                        ? a.totalSpent - b.totalSpent
                        : b.totalSpent - a.totalSpent;
                case "orders":
                    return sortDirection === "asc"
                        ? a.ordersCount - b.ordersCount
                        : b.ordersCount - a.ordersCount;
                default:
                    return 0;
            }
        });

    const toggleSort = (field: "name" | "date" | "spent" | "orders") => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("desc");
        }
    };

    // Get customer orders
    const getCustomerOrders = (customerId: string) => {
        return ordersData.filter((order) => order.customer.id === customerId);
    };

    // Handle customer selection
    const handleViewCustomer = (customer: Customer) => {
        setSelectedCustomer(customer);
        setViewCustomerOpen(true);
    };

    return (
        <DashboardLayout>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
                        <p className="text-muted-foreground">
                            Manage and view information about your customers.
                        </p>
                    </div>
                    <Button>
                        <Mail className="mr-2 h-4 w-4" />
                        Email Customers
                    </Button>
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search customers by name or email..."
                            className="pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Total Customers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <div className="text-2xl font-bold">{customers.length}</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Average Lifetime Value</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                                <div className="text-2xl font-bold">
                                    ${(customers.reduce((sum, customer) => sum + customer.totalSpent, 0) / customers.length).toFixed(2)}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Average Orders per Customer</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <Box className="h-4 w-4 text-muted-foreground" />
                                <div className="text-2xl font-bold">
                                    {(customers.reduce((sum, customer) => sum + customer.ordersCount, 0) / customers.length).toFixed(1)}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSort("name")}
                                        className="flex items-center px-0"
                                    >
                                        Customer
                                        <ArrowUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSort("date")}
                                        className="flex items-center px-0"
                                    >
                                        Joined
                                        <ArrowUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </TableHead>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSort("spent")}
                                        className="flex items-center px-0"
                                    >
                                        Spent
                                        <ArrowUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </TableHead>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSort("orders")}
                                        className="flex items-center px-0"
                                    >
                                        Orders
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
                            ) : filteredCustomers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-16 text-center">
                                        No customers found matching your search.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredCustomers.map((customer) => (
                                    <TableRow key={customer.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Avatar>
                                                    <AvatarFallback>
                                                        {customer.firstName.charAt(0)}
                                                        {customer.lastName.charAt(0)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <span className="font-medium">
                          {customer.firstName} {customer.lastName}
                        </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{customer.email}</TableCell>
                                        <TableCell>
                                            {format(parseISO(customer.dateCreated), "MMM d, yyyy")}
                                        </TableCell>
                                        <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                                        <TableCell>
                                            {customer.ordersCount === 0 ? (
                                                <Badge variant="outline">No orders</Badge>
                                            ) : (
                                                customer.ordersCount
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => handleViewCustomer(customer)}>
                                                        View Details
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>Send Email</DropdownMenuItem>
                                                    <DropdownMenuItem>View Orders</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Customer Details Dialog */}
            <Dialog open={viewCustomerOpen} onOpenChange={setViewCustomerOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Customer Details</DialogTitle>
                        <DialogDescription>
                            View detailed information about this customer.
                        </DialogDescription>
                    </DialogHeader>

                    {selectedCustomer && (
                        <ScrollArea className="flex-1 pr-4">
                            <div className="space-y-6 pb-4">
                                <div className="flex flex-col md:flex-row gap-4 items-start">
                                    <div className="flex-shrink-0">
                                        <Avatar className="h-20 w-20">
                                            <AvatarFallback className="text-2xl">
                                                {selectedCustomer.firstName.charAt(0)}
                                                {selectedCustomer.lastName.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>

                                    <div className="flex-1 space-y-1">
                                        <h3 className="text-2xl font-bold">
                                            {selectedCustomer.firstName} {selectedCustomer.lastName}
                                        </h3>
                                        <div className="flex items-center text-muted-foreground">
                                            <Mail className="mr-2 h-4 w-4" />
                                            {selectedCustomer.email}
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Clock className="mr-2 h-4 w-4" />
                                            Customer since {format(parseISO(selectedCustomer.dateCreated), "MMMM d, yyyy")}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Button variant="outline" className="w-full">
                                            <Mail className="mr-2 h-4 w-4" />
                                            Send Email
                                        </Button>
                                        <Button variant="ghost" className="w-full">
                                            <User className="mr-2 h-4 w-4" />
                                            Edit Profile
                                        </Button>
                                    </div>
                                </div>

                                <Separator />

                                <div className="grid gap-4 md:grid-cols-3">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-sm">Total Spent</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                ${selectedCustomer.totalSpent.toFixed(2)}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                Lifetime value
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-sm">Orders</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                {selectedCustomer.ordersCount}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                Total orders placed
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-sm">Last Order</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                {selectedCustomer.lastOrder ? (
                                                    format(parseISO(selectedCustomer.lastOrder), "MMM d, yyyy")
                                                ) : (
                                                    "N/A"
                                                )}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                Most recent purchase
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Tabs defaultValue="orders">
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="orders">Orders</TabsTrigger>
                                        <TabsTrigger value="activity">Activity</TabsTrigger>
                                        <TabsTrigger value="notes">Notes</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="orders" className="space-y-4 pt-4">
                                        <h3 className="text-lg font-medium">Order History</h3>

                                        {getCustomerOrders(selectedCustomer.id).length === 0 ? (
                                            <Card>
                                                <CardContent className="flex flex-col items-center justify-center py-6">
                                                    <Box className="h-12 w-12 text-muted-foreground" />
                                                    <p className="mt-2 text-center text-muted-foreground">
                                                        This customer hasn't placed any orders yet.
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        ) : (
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Order ID</TableHead>
                                                        <TableHead>Date</TableHead>
                                                        <TableHead>Status</TableHead>
                                                        <TableHead>Total</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {getCustomerOrders(selectedCustomer.id).map((order) => (
                                                        <TableRow key={order.id}>
                                                            <TableCell className="font-medium">
                                                                #{order.id.split('-')[1]}
                                                            </TableCell>
                                                            <TableCell>
                                                                {format(parseISO(order.dateCreated), "MMM d, yyyy")}
                                                            </TableCell>
                                                            <TableCell>
                                                                <Badge
                                                                    variant={
                                                                        order.status === "completed"
                                                                            ? "default"
                                                                            : order.status === "processing" || order.status === "on-hold"
                                                                                ? "secondary"
                                                                                : order.status === "cancelled" || order.status === "failed"
                                                                                    ? "destructive"
                                                                                    : "outline"
                                                                    }
                                                                >
                                                                    {order.status.split('-').map(word =>
                                                                        word.charAt(0).toUpperCase() + word.slice(1)
                                                                    ).join(' ')}
                                                                </Badge>
                                                            </TableCell>
                                                            <TableCell>${order.total.toFixed(2)}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        )}
                                    </TabsContent>

                                    <TabsContent value="activity" className="space-y-4 pt-4">
                                        <h3 className="text-lg font-medium">Recent Activity</h3>

                                        <Card>
                                            <CardContent className="pt-6">
                                                <div className="space-y-4">
                                                    {getCustomerOrders(selectedCustomer.id)
                                                        .slice(0, 3)
                                                        .map((order) => (
                                                            <div key={order.id} className="flex items-start gap-4">
                                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                                                                    <Box className="h-4 w-4" />
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <p className="text-sm">
                                                                        Placed order <span className="font-medium">#{order.id.split('-')[1]}</span>
                                                                    </p>
                                                                    <p className="text-xs text-muted-foreground">
                                                                        {format(parseISO(order.dateCreated), "PPpp")}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}

                                                    <div className="flex items-start gap-4">
                                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                                                            <User className="h-4 w-4" />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-sm">
                                                                Customer account created
                                                            </p>
                                                            <p className="text-xs text-muted-foreground">
                                                                {format(parseISO(selectedCustomer.dateCreated), "PPpp")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="notes" className="space-y-4 pt-4">
                                        <h3 className="text-lg font-medium">Customer Notes</h3>

                                        <Card>
                                            <CardContent className="pt-6">
                                                <p className="text-muted-foreground text-center py-6">
                                                    No notes have been added for this customer.
                                                </p>
                                            </CardContent>
                                        </Card>

                                        <div className="flex items-center gap-2">
                                            <Input placeholder="Add a note about this customer..." />
                                            <Button>Add Note</Button>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </ScrollArea>
                    )}
                </DialogContent>
            </Dialog>
        </DashboardLayout>
    );
}