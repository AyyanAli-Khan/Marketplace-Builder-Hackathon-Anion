export default {
    name: "payment",
    type: "document",
    title: "Payment",
    fields: [
      { name: "order_id", type: "number", title: "Order ID" },
      { name: "customer_id", type: "number", title: "Customer ID" },
      { name: "amount", type: "number", title: "Amount" },
      { name: "timestamp", type: "datetime", title: "Timestamp" },
    ],
  };
  