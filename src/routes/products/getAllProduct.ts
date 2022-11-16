import { Router } from "express";
import container from "../../dependencies";
import { GetAllProduct } from "../../application/useCases/products/getAllProduct";

const router: Router = Router();

router.get("/", async (req, res) => {
 

  const getProducts = container.resolve(GetAllProduct);
  const product = await getProducts.execute();
  console.log(product);
  return res.status(200).json(product);
  console.log(req);
});

export default router;
