export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
      { name: "product_id", type: "number", title: "Product ID" },
      { name: "product_name", type: "string", title: "Product Name" },
      { name: "image", type: "image", title: "Image", options: { hotspot: true } },
      { name: "description", type: "text", title: "Description" },
      { name: "category", type: "string", title: "Category" },
      { name: "price", type: "number", title: "Price" },
      { name: "stock", type: "number", title: "Stock" },
      {
        name: "rating",
        type: "object",
        title: "Rating",
        fields: [
          { name: "review", type: "number", title: "Review" },
          { name: "count", type: "number", title: "Count" },
        ],
      },
      {
        name: "size_options",
        type: "array",
        title: "Size Options",
        of: [{ type: "string" }],
      },
      {
        name: "color_options",
        type: "array",
        title: "Color Options",
        of: [{ type: "string" }],
      },
      { name: "material", type: "string", title: "Material" },
    ],
  };
  