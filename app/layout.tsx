import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colmena Digital - Simulador de Seguridad Inteligente",
  description: "Plataforma interactiva gamificada para diseñar, simular y cotizar sistemas de seguridad electrónica integrales. Powered by Tecnoprotec & Centinela Chile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
