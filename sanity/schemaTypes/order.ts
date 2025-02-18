import { defineType, defineField } from "sanity";

export default defineType({
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    defineField({ name: "customerName", title: "Customer Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "zipCode", title: "Zip Code", type: "string" }),
    defineField({
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [{ type: "reference", to: { type: "product" } }],
    }),
    defineField({ name: "total", title: "Total", type: "number" }), // Ensure correct field type
    defineField({ name: "createdAt", title: "Created At", type: "datetime" }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
        layout: "radio",
      },
      initialValue: "Pending",
    }),
  ],
});
