import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function provider(children, ...props) {
  return (
    <NextThemesProvider {...props}>
      <div>{children}</div>
    </NextThemesProvider>
  );
}

export default provider;
