export default {
    name: "shipment",
    type: "document",
    title: "Shipment",
    fields: [
      { name: "order_id", type: "number", title: "Order ID" },
      { name: "customer_id", type: "number", title: "Customer ID" },
      { name: "status", type: "string", title: "Status" },
      { name: "delivery_zone", type: "string", title: "Delivery Zone" },
      { name: "expected_delivery_date", type: "date", title: "Expected Delivery Date" },
    ],
  };
  