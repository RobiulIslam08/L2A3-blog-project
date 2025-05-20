import { z } from "zod";

const userValidationSchema = z.object({
 body:z.object({
   name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please provide a valid email" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password cannot be more than 20 characters" }),

  role: z
    .enum(["admin", "user"])
    .optional(), // optional because default is 'user'

  isBlocked: z
    .boolean()
    .optional(), // optional because default is false
 })
});

export const userValidation = {
	userValidationSchema
}