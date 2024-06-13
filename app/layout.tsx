/* eslint-disable @next/next/no-page-custom-font */
"use client";
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "./global";
import { Footer } from "@/components/Layout/Footer";
import { HeaderPainel } from "@/components/HeaderPainel";
import { AuthProvider } from "@/context/login";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Grupos Esportivos - Ticket Sports</title>
        <meta name="description" content="Ticket Sports" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <AuthProvider>
            <GlobalStyle />
            <header>
              <HeaderPainel />
            </header>

            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
