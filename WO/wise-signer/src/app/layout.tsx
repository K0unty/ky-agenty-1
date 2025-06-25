import { NetworkProvider } from "@/components/NetworkProvider"
import { ThemeProvider } from "@/components/ThemeContext"
import type { Metadata } from "next"
import "./globals.css"
import GoogleAnalytics from "./GoogleAnalytics"

export const metadata: Metadata = {
  title: "Wise Signer",
  description: "Can you sign the transactions correctly?",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <GoogleAnalytics />
        <ThemeProvider>
          <NetworkProvider>{children}</NetworkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
