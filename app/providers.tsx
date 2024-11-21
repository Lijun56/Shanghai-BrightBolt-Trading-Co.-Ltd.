// explain the code: This is a simple component that will be used to provide the context to the child components.
// 'use client' is a comment that is used to tell the bundler that this file should only be included in the client bundle.
"use client";

import React from "react";
import { ThemeProvider } from "./theme-provider";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export default Providers;
