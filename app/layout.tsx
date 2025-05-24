import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import FloatingChatbot from "@/components/floating-chatbot"
import SubmitProjectButton from "@/components/submit-project-button"
import FeedbackForm from "@/components/feedback-form"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carbon Link - AI-Powered Carbon Credit Marketplace",
  description:
    "Connect with verified carbon credit projects and offset your carbon footprint. Our AI-powered platform matches buyers and sellers of carbon credits to support sustainability goals.",
  keywords:
    "carbon credits, carbon marketplace, carbon offset, sustainability, climate change, carbon footprint, carbon neutral, net zero",
  authors: [{ name: "Carbon Link Team" }],
  creator: "Carbon Link",
  publisher: "Carbon Link",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carbonlink.vercel.app/",
    title: "Carbon Link - AI-Powered Carbon Credit Marketplace",
    description:
      "Connect with verified carbon credit projects and offset your carbon footprint. Our AI-powered platform matches buyers and sellers of carbon credits.",
    siteName: "Carbon Link",
    images: [
      {
        url: "https://carbonlink.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carbon Link - AI-Powered Carbon Credit Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbon Link - AI-Powered Carbon Credit Marketplace",
    description:
      "Connect with verified carbon credit projects and offset your carbon footprint. Our AI-powered platform matches buyers and sellers of carbon credits.",
    images: ["https://carbonlink.vercel.app/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Carbon Link",
              url: "https://carbonlink.vercel.app/",
              logo: "https://carbonlink.vercel.app/logo.png",
              description: "AI-powered carbon credit marketplace connecting buyers and sellers of carbon credits.",
              sameAs: [
                "https://twitter.com/carbonlink",
                "https://linkedin.com/company/carbonlink",
                "https://facebook.com/carbonlink",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Carbon Link. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground">Powered by sustainable technology</p>
              </div>
            </footer>
            <FloatingChatbot />
            <SubmitProjectButton />
            <FeedbackForm />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
