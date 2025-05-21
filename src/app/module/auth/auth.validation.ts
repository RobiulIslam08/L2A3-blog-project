import { z } from "zod";

const authValidationSchema = z.object({
 body:z.object({
   

  password: z
	.string({ required_error: "Password is required" })
	.min(6, { message: "Password must be at least 6 characters" })
	.max(20, { message: "Password cannot be more than 20 characters" }),

  
 })
});

export const authValidation = {
	authValidationSchema
}