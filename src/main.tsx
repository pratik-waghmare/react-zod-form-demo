import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { env } from "./config/env.ts";

if (env.VITE_DEBUG) {
  console.log("RUNNINING IN DEBUG MODE");
}

console.log(env.VITE_BACKEND_URL); // ✅ guaranteed to be a valid URL
console.log(env.VITE_DEBUG);       // ✅ boolean
console.log(env.VITE_ENVIRONMENT); // ✅ safe enum value

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
