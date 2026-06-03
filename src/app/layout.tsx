import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ENGXLABS — AI Native Engineering & Transformation",
  description:
    "ENGXLABS helps organizations transform operations, products, and teams through AI-powered automation, intelligent agents, and modern engineering solutions.",
  keywords: [
    "AI transformation",
    "AI strategy",
    "AI agents",
    "AI engineering",
    "enterprise AI",
    "AI native business",
    "AI automation",
  ],
  openGraph: {
    title: "ENGXLABS — Build an AI Native Business",
    description:
      "We help businesses adopt, integrate, operationalize, and scale AI across operations, products, and workforce.",
    url: "https://engxlabs.com",
    siteName: "ENGXLABS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENGXLABS — AI Native Engineering & Transformation",
    description: "Building AI Native Businesses for the Future.",
  },
  metadataBase: new URL("https://engxlabs.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
