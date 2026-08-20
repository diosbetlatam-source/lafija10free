import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["600", "700", "800"],
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "La Fija 10, Señales de Cuotas y Estrategias Gratis en Telegram",
  description:
    "Unite gratis al grupo de La Fija 10 en Telegram y recibí señales de movimiento de cuotas, lectura de presión en vivo y la estrategia detrás de cada señal. +18. Apostá con responsabilidad.",
  openGraph: {
    title: "La Fija 10, Señales de Cuotas y Estrategias Gratis en Telegram",
    description:
      "La señal que llega antes de que cierre la línea. Grupo 100% gratuito en Telegram.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${manrope.variable} ${jbmono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
