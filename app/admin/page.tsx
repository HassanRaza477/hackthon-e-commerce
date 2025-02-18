'use client'
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Order {
  _id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  total: number;
  createdAt: string;
  status: string;
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedStatus, setSelectedStatus] = useState("Pending");

  useEffect(() => {
    async function fetchOrders() {
      const data = await client.fetch(`*[_type == "order"] | order(createdAt desc)`);
      setOrders(data);
    }
    fetchOrders();
  }, []);

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    await client.patch(orderId).set({ status: newStatus }).commit();
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500";
      case "Processing":
        return "bg-blue-500";
      case "Shipped":
        return "bg-purple-500";
      case "Delivered":
        return "bg-green-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Order Management</h1>
      
      <Tabs defaultValue="Pending" onValueChange={setSelectedStatus}>
        <TabsList className="flex gap-2 mb-8 bg-gray-100 p-2 rounded-lg">
          {["Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map((status) => (
            <TabsTrigger
              key={status}
              value={status}
              className="px-6 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              {status}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <div className="space-y-6">
          {orders
            .filter((order) => order.status === selectedStatus)
            .map((order) => (
              <Card key={order._id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="border-b p-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">
                      Order #{order._id.slice(-6).toUpperCase()}
                    </CardTitle>
                    <Badge className={`${getStatusColor(order.status)} text-white`}>
                      {order.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    {format(new Date(order.createdAt), "MMM dd, yyyy hh:mm a")}
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Customer</p>
                      <p className="font-medium">{order.customerName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Contact</p>
                      <p className="font-medium">{order.email}</p>
                      <p className="text-sm text-gray-500">{order.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Shipping Address</p>
                      <p className="font-medium">
                        {order.address}, {order.city}, {order.zipCode}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Amount</p>
                      <p className="font-medium">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    {selectedStatus !== "Delivered" && selectedStatus !== "Cancelled" && (
                      <Button
                        onClick={() =>
                          updateOrderStatus(
                            order._id,
                            selectedStatus === "Pending" ? "Processing" : "Shipped"
                          )
                        }
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Mark as {selectedStatus === "Pending" ? "Processing" : "Shipped"}
                      </Button>
                    )}
                    {selectedStatus !== "Cancelled" && (
                      <Button
                        variant="destructive"
                        onClick={() => updateOrderStatus(order._id, "Cancelled")}
                      >
                        Cancel Order
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </Tabs>
    </div>
  );
}