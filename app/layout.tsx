import "./globals.css"
import { Providers } from "./providers"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}