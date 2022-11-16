import { Router } from "express";
import container from "../../dependencies";
import { GetAllPaginatedCustomer } from "../../application/useCases/customers/getAllPaginatedCustomer";
import { GetAllCustomer } from "../../application/useCases/customers/getAllCustomer";

const router: Router = Router();

router.get("/", async (req, res) => {
  const pageQueryParameter = Number(req.query.page);
  const limitQueryParameter = Number(req.query.limit);

  if (
    !(pageQueryParameter && limitQueryParameter) &&
    (pageQueryParameter || limitQueryParameter)
  ) {
    throw new Error(
      `Request missing Page Number: [${req.query.page}] or page limit: [${req.query.limit}]`
    );
  }

  if (!pageQueryParameter && !limitQueryParameter) {
    const getAllCustomer = container.resolve(GetAllCustomer);
    const customers = await getAllCustomer.execute();

    return res.status(200).json(customers);
  }

  const paginationConfiguration = {
    page: pageQueryParameter || 1,
    limit: limitQueryParameter || 1,
    search: String(req.query.search || ""),
  };

  const getAllPaginatedCustomer = container.resolve(GetAllPaginatedCustomer);
  const customers = await getAllPaginatedCustomer.execute(
    paginationConfiguration
  );

  console.log(customers);

  return res.status(200).json(customers);
});

export default router;
