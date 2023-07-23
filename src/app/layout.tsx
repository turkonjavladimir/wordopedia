import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import { siteConfig } from "@/config/site"
import { inconsolata, inter, lora } from "@/lib/font"
import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { FontProvider } from "@/components/font-provider"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: {
    name: "Vladimir Turkonja",
    url: "https://github.com/turkonjavladimir",
  },
  creator: "Vladimir Turkonja",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${inconsolata.variable} ${lora.variable}`}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <FontProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
            <Analytics />
          </ThemeProvider>
        </FontProvider>
      </body>
    </html>
  )
}
