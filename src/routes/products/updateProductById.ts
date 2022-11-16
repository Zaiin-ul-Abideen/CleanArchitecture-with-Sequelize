import { Router } from "express";
import container from "../../dependencies";
import { UpdateProductById } from "../../application/useCases/products/updateProductById";

const router: Router = Router();

router.patch("/:id", async (req, res) => {
  const updateProductById = container.resolve(UpdateProductById);
  const productKey = req.params.id;

  // if (!req.body.productName) return res.status(404).json("name is required!");

  const updateProductByid = req.body;

  const product = await updateProductById.execute(
    productKey,
    updateProductByid
  );
  return res.status(200).json(product);
});

export default router;
