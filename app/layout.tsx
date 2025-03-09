import type React from "react"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"

export const metadata = {
  title: "CactusERP - Enterprise Resource Planning Solution",
  description: "Streamline your business operations with CactusERP's comprehensive ERP solution.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-8 bg-muted/30">
              <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3">Product</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/features" className="text-sm text-muted-foreground hover:text-primary">
                          Features
                        </a>
                      </li>
                      <li>
                        <a href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/about" className="text-sm text-muted-foreground hover:text-primary">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="/careers" className="text-sm text-muted-foreground hover:text-primary">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                  <p>© {new Date().getFullYear()} CactusERP. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'