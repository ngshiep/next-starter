import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import ThemeRegistry from "@/components/theme-registry/theme.registry";
import { Container } from "@mui/material";
import * as React from "react";

export const metadata = {
  title: "Next.js Starter",
  description: "Next.js Starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <HeaderComponent></HeaderComponent>
          <Container>{children}</Container>
          <FooterComponent />
        </ThemeRegistry>
      </body>
    </html>
  );
}
