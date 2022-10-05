import { Router } from "express";
import container from "../../dependencies";
import { DeleteCustomerById } from "../../application/useCases/deleteCustomerById";

const router: Router = Router();

router.delete("/:id", async (req, res) => {
  const deleteCustomerById = container.resolve(DeleteCustomerById);

  const customerKey = req.params.id;

  if (!customerKey) return res.status(400).json("parameters not found!");

  const customer = await deleteCustomerById.execute(customerKey);
  return res.status(200).json(customer);
});

export default router;
