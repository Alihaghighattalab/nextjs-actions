import { z } from "zod";

export const FormDataSchema = z.object({
  name: z.string().nonempty("Name is required"),
  message: z
    .string()
    .nonempty("message is required")
    .min(6, { message: "message must have be at least 6 characters" }),
});
