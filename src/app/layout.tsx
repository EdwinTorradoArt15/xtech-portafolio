import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const popinsFont = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desarrollo a Medida | XTECH",
  description:
    "Ofrecemos soluciones personalizadas de software, aplicaciones móviles, aplicaciones web, landing pages y servicios de marketing digital.",
  keywords:
    "desarrollo a medida, software personalizado, aplicaciones móviles, aplicaciones web, landing pages, marketing digital, XTECH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popinsFont.className}>{children}</body>
    </html>
  );
}
