import { z } from "zod";

export const envSchema = z.object({
  VITE_BACKEND_URL: z.url(),
  VITE_DEBUG: z.enum(["true", "false"]).transform((val) => val === "true"),
  VITE_ENVIRONMENT: z.enum(["prod", "stage", "dev"]),
});

export const env = envSchema.parse(import.meta.env);
