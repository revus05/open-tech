import { Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Открытые технологии — IT-решения любой сложности",
  description:
    "Системная интеграция, IT-инфраструктура и аутсорсинг для бизнеса с 1994 года. Минск, Беларусь.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className={cn("antialiased", notoSans.variable)}>
      <body>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
