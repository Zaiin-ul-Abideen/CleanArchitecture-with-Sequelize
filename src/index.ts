import "reflect-metadata";
import express from "express";

import getCustomersRoute from "./routes/customers/getAllCustomer";
import createCustomerRoute from "./routes/customers/createCustomer";
import getCustomerByIdRoute from "./routes/customers/getCustomerById";
import updateCustomerByIdRoute from "./routes/customers/updateCustomerById";
import deleteCustomerByIdRoute from "./routes/customers/deleteCustomerById";
// import customerRoutes from "./routes/customers";

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/customer", getCustomersRoute);
app.use("/api/customer", createCustomerRoute);
app.use("/api/customer", getCustomerByIdRoute);
app.use("/api/customer", updateCustomerByIdRoute);
app.use("/api/customer", deleteCustomerByIdRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running on ", process.env.PORT);
});
