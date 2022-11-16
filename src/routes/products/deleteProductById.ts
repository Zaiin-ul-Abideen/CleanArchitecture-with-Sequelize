import { Router } from "express";
import container from "../../dependencies";
import { DeleteProductById } from "../../application/useCases/products/deleteProductById";

const router: Router = Router();

router.delete("/:id", async (req, res) => {
  const deleteProductById = container.resolve(DeleteProductById);

  const productKey = req.params.id;

  if (!productKey) return res.status(400).json("parameters not found!");

  const product = await deleteProductById.execute(productKey);
  return res.status(200).json(product);
});

export default router;
