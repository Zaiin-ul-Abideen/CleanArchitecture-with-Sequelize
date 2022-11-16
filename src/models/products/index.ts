import * as yup from "yup";

export type Product = yup.InferType<typeof ProductSchema>;

export const ProductSchema = yup.object({
  id: yup.number().nullable(false),

  productName: yup.string().max(20, "product name exceed 20 characters"),

  productPrice: yup
    .string()
    .default(null)
    .nullable(true)
    .max(11, "phone max 11 characters"),
});
