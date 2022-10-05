import { Router } from "express";
import container from "../../dependencies";
import { GetCustomerById } from "../../application/useCases/getCustomerById";

const router: Router = Router();

router.get("/:id", async (req, res) => {
  const getCustomerById = container.resolve(GetCustomerById);

  const customerKey = req.params.id;

  if (!customerKey) return res.status(400).json("parameters not found!");

  const customer = await getCustomerById.execute(customerKey);
  return res.status(200).json(customer);
  console.log(req);
});

export default router;
