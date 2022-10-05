import { Router } from "express";
import container from "../../dependencies";
import { CreateCustomer } from "../../application/useCases/customers/createCustomer";

const router: Router = Router();

router.post("/", async (req, res) => {
  const createCustomers = container.resolve(CreateCustomer);

  const { customerName, customerEmail, customerPhone, customerAddress } =
    req.body;
  const data = { customerName, customerEmail, customerPhone, customerAddress };

  const customer = await createCustomers.execute(data);
  return res.status(200).json(customer);
});

export default router;
