import type { Metadata } from "next";
import { Inter, Fira_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import OrderProvider from "@/context/OrderProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic", "latin"],
});
const fira = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Siiweul | More likes - More follows - More Views",
  description: "Booster votre visibilité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={fira.className}>
        <Header />
        <OrderProvider>{children}</OrderProvider>
      </body>
    </html>
  );
}
