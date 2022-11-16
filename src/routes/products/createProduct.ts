import { Router } from "express";
import container from "../../dependencies";
import { CreateProduct } from "../../application/useCases/products/createProduct";

const router: Router = Router();

router.post("/", async (req, res) => {
  const createProducts = container.resolve(CreateProduct);

  const data = req.body;

  console.log("this is product route: ", data);

  const product = await createProducts.execute(data);
  return res.status(200).json(product);
});

export default router;
