import React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Mindtrip - Travel Differently",
  description: "Plan your perfect trip with personalized recommendations and collaborative tools.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en " suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}