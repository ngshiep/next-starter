import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import ThemeRegistry from "@/components/theme-registry/theme.registry";
import NextAuthWrapper from "@/services/Next.Auth.Wrapper";
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
          <NextAuthWrapper>
            <HeaderComponent></HeaderComponent>
            <Container>{children}</Container>
            <FooterComponent />
          </NextAuthWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
