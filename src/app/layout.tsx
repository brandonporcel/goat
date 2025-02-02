import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const ttContrast = localFont({
//   src: [
//     {
//       path: "../../public/fonts/TTContrast-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/TTContrast-Condensed.woff2",
//       weight: "400",
//       style: "condensed",
//     },
//     {
//       path: "../../public/fonts/TTContrast-Extended.woff2",
//       weight: "400",
//       style: "expanded",
//     },
//   ],
// });

const ttContrastRegular = localFont({
  src: "../../public/fonts/TTContrast-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-contrast-regular",
});

const ttContrastCondensed = localFont({
  src: "../../public/fonts/TTContrast-Condensed.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-contrast-condensed",
});

const ttContrastExtended = localFont({
  src: "../../public/fonts/TTContrast-Extended.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-contrast-extended",
});

const appDescription = "Discover and enjoy (again,always) Lionel Messi.";
const appShortTitle = "GOAT: The Argentinian goals";

export const viewport: Viewport = {
  themeColor: "#F7F6F0",
};

export const metadata: Metadata = {
  title: "GOAT",
  description: appDescription,
  keywords: ["Lionel Messi", "Argentina", "Football", "Goals", "Stats"],
  authors: { name: "Brandon Porcel", url: "https://github.com/brandonporcel?" },
  creator: "Brandon Porcel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goat.vercel.app",
    title: appShortTitle,
    description: appDescription,
    siteName: "GOAT",
    images: [
      {
        url: "https://goat.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appShortTitle,
    description: appDescription,
    images: [
      {
        url: "https://goat.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: [
    {
      type: "favicon",
      url: "favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ttContrastRegular.className} ${ttContrastCondensed.variable} ${ttContrastExtended.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
