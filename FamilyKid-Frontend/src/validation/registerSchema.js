import { object, string, ref } from "yup";

// setting a schema for register page passwords match checks here
export const registerSchema = object({
  email: string().email().max(254).required("email is required!"),
  phone: string().max(11).required("phone number required!"),
  landline_phone: string().max(11).required("landline phone is required!"),
  national_code: string().max(10).required("national code required!"),
  first_name: string().max(250).required("last name required!"),
  last_name: string().max(250).required("first name required!"),
  password: string().min(6).max(68).required("password is required!"),
  password1: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("confirm password is required!"),
});
