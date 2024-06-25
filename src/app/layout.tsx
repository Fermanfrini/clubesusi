import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CLUBE SUSI",
  description: "Clube de Vantagens",
  keywords: "clínica veterinária, cuidados com animais, veterinário, saúde animal, consultas veterinárias, cirurgia veterinária, exames veterinários, cuidados preventivos, animais de estimação, medicina veterinária, emergência veterinária, tratamento de animais, serviços veterinários, check-up animal, vacinação de animais, odontologia veterinária, medicamentos veterinários, especialidades veterinárias, animais domésticos, qualidade de vida animal, bem-estar animal, fisioterapia animal, nutrição veterinária, cuidados com cães, cuidados com gatos.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
