import HeaderComponent from "@/components/Header";
import ThemeRegistry from "@/components/theme-registry/theme.registry";
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
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
