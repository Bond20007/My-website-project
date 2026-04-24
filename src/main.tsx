import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation } from "framer-motion";
import App from "./app/App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </HelmetProvider>
  </StrictMode>
);
