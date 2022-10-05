import * as yup from "yup";

export type Customer = yup.InferType<typeof CustomerSchema>;

export const CustomerSchema = yup.object({
  customerName: yup
    .string()
    .required("name Required!")
    .max(20, "name max 20 characters"),

  customerEmail: yup
    .string()
    .required("email Required!")
    .max(20, "email max 20 characters"),

  customerPhone: yup
    .string()
    .required("phone Required!")
    .max(11, "phone: max 11 characters"),

  customerAddress: yup
    .string()
    .required("Address Required!")
    .max(20, "address max 20 characters"),
});
