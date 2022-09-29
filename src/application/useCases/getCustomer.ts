import express from "express";
const { getCustomer } = require("../../adapters/CustomersAdapter");

const router = express.Router();

router.get("/get/:id", getCustomer);

export = router;
