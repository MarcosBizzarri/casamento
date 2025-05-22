import type { Metadata } from "next";
import { Geist, Geist_Mono, Lusitana, Josefin_Sans, Poppins, Great_Vibes  } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400", 

});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lusitana = Lusitana({
  variable: "--font-lusitana",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});



export const metadata: Metadata = {
  title: "Nosso Casamento",
  description: "Casorio de Marcos e Jessica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
       

        className={`${geistSans.variable} ${geistMono.variable} ${lusitana.variable} ${josefin.variable} ${poppins.variable} ${greatVibes.variable} antialiased`}
      > 
      <nav>
      
      </nav>
        {children}
      </body>
    </html>
  );
}
