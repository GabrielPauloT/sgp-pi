import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SGP',
  description: 'Created by Gabriel Paulo e Gabriel Gimenes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
