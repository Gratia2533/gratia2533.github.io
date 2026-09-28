import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App, languageFromPathname } from "./App";
import "./styles.css";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App initialLanguage={languageFromPathname(window.location.pathname)} />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
