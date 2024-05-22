import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Crypto Patronite",
  description:
    "Crypto Patronite - support your favorite artists with cryptocurrency. Safe and fast donations that help them grow their creative work. Join us and support digital culture today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.variable, "antialiased bg-muted ")}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
