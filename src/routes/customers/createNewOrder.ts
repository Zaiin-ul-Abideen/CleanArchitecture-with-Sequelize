import { Router } from "express";
import container from "../../dependencies";
import { CreateNewOrder } from "../../application/useCases/customers/createNewOrder";

const router: Router = Router();

router.get("/:id", async (req, res) => {
  const createNewOrder = container.resolve(CreateNewOrder);

  const params = req.params.id;
  
  const { productId } = req.body;
  const data = { productId, params };

  const customer = await createNewOrder.execute(data);
  return res.status(200).json(customer);
});

export default router;
