import { Router } from "express";
import container from "../../dependencies";
import { GetCustomerById } from "../../application/useCases/customers/getCustomerById";

const router: Router = Router();

router.get("/:id", async (req, res) => {
  const getCustomerById = container.resolve(GetCustomerById);
  
  const customerKey = req.params.id;
  
  // if (!req.body.customerName) return res.status(404).json("name is required!");
  

  console.log(getCustomerById)
  const customer = await getCustomerById.execute(customerKey);
  return res.status(200).json(customer);
});

export default router;
