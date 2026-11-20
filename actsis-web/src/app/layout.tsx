import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://actsis.com.br"),
  title: {
    default: "Act Sistemas | Consultoria ERP TOTVS® Protheus e Integrações",
    template: "%s | Act Sistemas",
  },
  description:
    "Consultoria especializada em ERP TOTVS® Protheus, Integrações via API, Fábrica de Software e Dashboards Power BI para médias e grandes empresas.",
  keywords: [
    "TOTVS",
    "Protheus",
    "Consultoria Protheus",
    "Integração ERP",
    "Power BI",
    "Fábrica de Software",
    "Act Sistemas",
    "ADVPL",
    "TLPP",
  ],
  authors: [{ name: "Act Sistemas" }],
  creator: "Act Sistemas",
  publisher: "Act Sistemas",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://actsis.com.br",
    title: "Act Sistemas | Consultoria ERP TOTVS® Protheus e Integrações",
    description:
      "Consultoria especializada em ERP TOTVS® Protheus, Integrações via API, Fábrica de Software e Dashboards Power BI.",
    siteName: "Act Sistemas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Act Sistemas | Consultoria ERP TOTVS® Protheus",
    description:
      "Consultoria especializada em ERP TOTVS® Protheus, Integrações via API e Dashboards em Power BI.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Act Sistemas",
  url: "https://actsis.com.br",
  logo: "https://actsis.com.br/images/logo-dark.png",
  description:
    "Consultoria especializada em ERP TOTVS® Protheus, Integrações via API, Fábrica de Software e Dashboards Power BI.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-zinc-950 text-zinc-100 selection:bg-[#00b07b]/20 selection:text-[#00b07b]">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
