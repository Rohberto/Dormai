import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./utils/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dormai Signs - Leading Signage Company in Lagos",
  description: "Dormai Signs Limited offers premium signage and branding solutions in Lagos, Nigeria. 30 years of experience. Contact us for custom signs.",
  keywords: "signage, branding, Lagos, Nigeria, Dormai Signs, custom signs, installation, maintenance",
  openGraph: {
    title: "Dormai Signs - Leading Signage Company in Lagos",
    description: "Dormai Signs Limited offers premium signage and branding solutions in Lagos, Nigeria.",
    url: "https://dormaisignsltd.com",
    siteName: "Dormai Signs",
    images: [
      {
        url: "https://dormaisignsltd.com/Images/logo.png",
        width: 800,
        height: 600,
        alt: "Dormai Signs Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dormai Signs - Leading Signage Company in Lagos",
    description: "Dormai Signs Limited offers premium signage and branding solutions in Lagos, Nigeria.",
    site: "@dormaisigns",
    creator: "@dormaisigns",
    images: ["https://dormaisignsltd.com/Images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <WhatsAppButton/>
      </body>
    </html>
  );
}
