export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      { name: "order_id", type: "number", title: "Order ID" },
      { name: "customer_id", type: "number", title: "Customer ID" },
      { name: "total_amount", type: "number", title: "Total Amount" },
      { name: "quantity", type: "number", title: "Quantity" },
      { name: "product", type: "string", title: "Product" },
      { name: "timestamp", type: "datetime", title: "Timestamp" },
    ],
  };
  