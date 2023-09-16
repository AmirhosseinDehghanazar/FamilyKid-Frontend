import { object, string, ref } from "yup";

export const loginSchema = object({
  national_code: string().max(10).required("please enter a national code"),

  password: string().min(6).max(68).required("password is required!"),
  password1: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("confirm password is required!"),
});
