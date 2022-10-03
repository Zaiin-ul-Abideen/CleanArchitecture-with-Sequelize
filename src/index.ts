import "reflect-metadata";
import express from "express";
import getCustomersRoute from "./routes/customers/getAllCustomer";
import createCustomerRoute from "./routes/customers/createCustomer";

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/customer", getCustomersRoute);
app.use("/api/customer", createCustomerRoute);

app.listen(process.env.PORT, () => {
  console.log("Serverv is running on ", process.env.PORT);
});
