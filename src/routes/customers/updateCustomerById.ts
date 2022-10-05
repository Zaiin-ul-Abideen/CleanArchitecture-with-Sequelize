import { Router } from "express";
import container from "../../dependencies";
import { UpdateCustomerById } from "../../application/useCases/customers/updateCustomerById";

const router: Router = Router();

router.patch("/:id", async (req, res) => {
  const updateCustomerById = container.resolve(UpdateCustomerById);

  const customerKey = req.params.id;

  const customerName = req.body.customerName;
  const customerEmail = req.body.customerEmail;
  const customerPhone = req.body.customerPhone;
  const customerAddress = req.body.customerAddress;
  const updateCustomerByid = {
    customerName,
    customerEmail,
    customerPhone,
    customerAddress,
  };

  if (!customerKey) return res.status(400).json("parameters not found!");

  const customer = await updateCustomerById.execute(customerKey,updateCustomerByid);
  return res.status(200).json(customer);
  console.log(req);
});

export default router;
