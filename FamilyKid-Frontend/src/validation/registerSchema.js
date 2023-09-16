import { object, string } from "yup";

export const registerSchema = object({
  email: string().email().max(254).required(),
  phone: string().max(11).required(),
  landline_phone: string().max(11).required(),
  national_code: string().max(10).required(),
  first_name: string().max(250).required(),
  last_name: string().max(250).required(),
  password: string().min(6).max(68).required(),
});
