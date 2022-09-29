import * as yup from "yup";

export const CustomerSchema = yup.object({
  customerName: yup.string().required("Required").max(20, "max 20 characters"),

  customerEmail: yup.string().required("Required").max(20, "max 20 characters"),

  customerPhone: yup
    .string()
    .nullable(true)
    .required("Required")
    .max(20, "max 20 characters"),

  customerAddress: yup
    .string()
    .required("Required")
    .nullable(true)
    .max(20, "max 20 characters"),
});
