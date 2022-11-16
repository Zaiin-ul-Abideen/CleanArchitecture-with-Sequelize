import "reflect-metadata";
import express from "express";

import getCustomersRoute from "./routes/customers/getAllCustomer";
import getAllPaginatedCustomerRoute from "./routes/customers/getAllPaginatedCustomer";
import createCustomerRoute from "./routes/customers/createCustomer";
import createNewOrderRoute from "./routes/customers/createNewOrder";
import getCustomerByIdRoute from "./routes/customers/getCustomerById";
import updateCustomerByIdRoute from "./routes/customers/updateCustomerById";
import deleteCustomerByIdRoute from "./routes/customers/deleteCustomerById";

import getProductsRoute from "./routes/products/getAllProduct";
import createProductRoute from "./routes/products/createProduct";
import getProductByIdRoute from "./routes/products/getProductById";
import updateProductByIdRoute from "./routes/products/updateProductById";
import deleteProductByIdRoute from "./routes/products/deleteProductById";

// import router from "./routes/customers";

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use  ("/api/customer", router);

app.use("/api/customer", getCustomersRoute);
app.use("/api/customer/paginated", getAllPaginatedCustomerRoute);
app.use("/api/customer", createCustomerRoute);
app.use("/api/customer/order", createNewOrderRoute);
app.use("/api/customer", getCustomerByIdRoute);
app.use("/api/customer", updateCustomerByIdRoute);
app.use("/api/customer", deleteCustomerByIdRoute);

app.use("/api/product", getProductsRoute);
app.use("/api/product", createProductRoute);
app.use("/api/product", getProductByIdRoute);
app.use("/api/product", updateProductByIdRoute);
app.use("/api/product", deleteProductByIdRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running on ", process.env.PORT);
});
