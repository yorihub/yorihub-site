import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yorihub.jp"),
  title: {
    template: "%s | ヨリハブ",
    default: "ヨリハブ – 住まいに関する相談受付・案内",
  },
  description:
    "ヨリハブは、住まいに関する相談を受け付け、内容を整理したうえで事業ごとに適切な案内・提携先の紹介を行うブランドです。",
  openGraph: {
    siteName: "ヨリハブ",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
