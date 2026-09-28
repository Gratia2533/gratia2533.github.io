import { StrictMode } from "react";
import { prerender } from "react-dom/static";
import { App } from "./App";
import type { Language } from "./content";

export async function render(language: Language): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <App initialLanguage={language} />
    </StrictMode>,
  );

  return new Response(prelude).text();
}
