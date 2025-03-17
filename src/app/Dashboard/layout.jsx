import { Inter } from "next/font/google"
import "@/app/globals.css"  

export const metadata = {
  title: "Mindtrip - Travel Planning",
  description: "Plan your next adventure with Mindtrip",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}