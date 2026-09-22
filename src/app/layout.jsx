import { Playfair_Display, Montserrat, Raleway } from "next/font/google";
import { MotionConfig } from "motion/react";
import { Header } from "@/components/Header";
import { CrisisBanner } from "@/components/CrisisBanner";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://peaceandpurpose.in"),
  title: {
    default: "Peace & Purpose · Healing Minds",
    template: "%s · Peace & Purpose",
  },
  description:
    "A safe, non-judgmental space for therapy and healing with Jennifer Jason. Individual therapy, couples counseling, and mindfulness workshops.",
  icons: { icon: "/images/logo.png" },
  openGraph: {
    type: "website",
    siteName: "Peace & Purpose",
    images: [{ url: "/images/therapy.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/therapy.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${raleway.variable}`}
    >
      <body>
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="home">{children}</main>
          <CrisisBanner />
          <BackToTop />
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
