import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .transform((val) => val.trim()),
  age: z.coerce
    .number()
    .min(13)
    .max(120)
    .refine((val) => val >= 18, { message: "Age must be at least 18" }),
  email: z.string().email("Invalid email"),
  password: z.string().min(6),
  confirmPassword: z.string(),
  newsletter: z.boolean().optional(),
}).superRefine((data, ctx)=>{
    if(data.password !== data.confirmPassword) {
        ctx.addIssue({
            path: ['confirmPassword'],
            code: z.ZodIssueCode.custom,
            message: 'Passwords does not match'
        })
    }
});

export type UserFormData = z.infer<typeof userSchema>;
