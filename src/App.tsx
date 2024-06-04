import "./App.css";
import { z } from "zod";
import { SignupForm } from "./components/SignupForm";

function App() {
  const userSchema = z.object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" }),
    age: z.number().min(13).max(120),
    email: z.string().email(),
    newsletter: z.boolean().optional(),
  });

  const result = userSchema.safeParse({
    username: "ab",
    age: 10,
    email: "bad-email",
  });

  if (!result.success) {
    // error
    console.log(result.error.format());
  } else {
    console.log(result);
  }

  return (
    <>
      <SignupForm />
    </>
  );
}

export default App;
