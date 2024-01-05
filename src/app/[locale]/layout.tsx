import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./Provider";
import "./globals.css";

import React from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Box } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doqquz.az",
  description: "Job search",
};

interface IProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params: { locale } }: IProps) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <Box padding='24px 0' bgColor='#f9f9f9'>
            <Providers>{children}</Providers>
          </Box>

          <Footer />
        </NextIntlClientProvider>

      </body>
    </html >
  );
}
