export default {
    name: "customer",
    type: "document",
    title: "Customer",
    fields: [
      { name: "customer_id", type: "number", title: "Customer ID" },
      { name: "name", type: "string", title: "Name" },
      { name: "email", type: "string", title: "Email" },
      { name: "phone_number", type: "string", title: "Phone Number" },
      { name: "address", type: "string", title: "Address" },
      { name: "city", type: "string", title: "City" },
    ],
  };
  