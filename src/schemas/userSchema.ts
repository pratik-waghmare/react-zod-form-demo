import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  age: z.coerce.number().min(13).max(120),
  email: z.string().email("Invalid email"),
  newsletter: z.boolean().optional(),
});

export type UserFormData = z.infer<typeof userSchema>;
