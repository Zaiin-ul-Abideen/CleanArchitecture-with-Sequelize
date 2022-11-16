import { Router } from "express";
import container from "../../dependencies";
import { UpdateCustomerById } from "../../application/useCases/customers/updateCustomerById";

const router: Router = Router();

router.patch("/:id", async (req, res) => {
  const updateCustomerById = container.resolve(UpdateCustomerById);
  const customerKey = req.params.id;

  // if (!req.body.customerName) return res.status(404).json("name is required!");

  // const customerName = req.body.customerName;
  // const customerEmail = req.body.customerEmail;
  // const customerPhone = req.body.customerPhone;
  // const customerAddress = req.body.customerAddress;
  const updateCustomerByid = 
  req.body
  // {
  //   customerName,
  //   customerEmail,
  //   customerPhone,
  //   customerAddress,
  // };

  const customer = await updateCustomerById.execute(
    customerKey,
    updateCustomerByid
  );
  return res.status(200).json(customer);
});

export default router;
