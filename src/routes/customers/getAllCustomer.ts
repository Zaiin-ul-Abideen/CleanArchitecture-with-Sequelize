import { Router} from "express";
import container from "../../dependencies";
import { GetAllCustomer } from "../../application/useCases/customers/getAllCustomer";

const router: Router = Router();

router.get("/", async (req, res) => {
  const getCustomers = container.resolve(GetAllCustomer);
  const customer = await getCustomers.execute();
  return res.status(200).json(customer);
  console.log(req)
});

export default router;
