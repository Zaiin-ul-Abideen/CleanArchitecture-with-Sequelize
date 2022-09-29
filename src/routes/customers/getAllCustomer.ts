import { Router, Request, Response } from "express";
import container from "../../dependencies";
import { GetAllCustomer } from "../../application/useCases/getAllCustomer";

const router: Router = Router();

router.get("/", async (req, res) => {
  const getCustomers = container.resolve(GetAllCustomer);
  const customer = await getCustomers.execute();
  return res.status(200).json(customer);
});

export default router;
