import { Router } from "express";
import container from "../../dependencies";
import { GetProductById } from "../../application/useCases/products/getProductById";

const router: Router = Router();

router.get("/:id", async (req, res) => {
  const getProductById = container.resolve(GetProductById);
  
  const productKey = req.params.id;
  
  // if (!req.body.productName) return res.status(404).json("name is required!");
  

  console.log(getProductById)
  const product = await getProductById.execute(productKey);
  return res.status(200).json(product);
});

export default router;
