"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    {
      name: "Solutions",
      href: "/solutions",
      children: [
        { name: "For Solopreneurs", href: "/solutions/solopreneurs" },
        { name: "For Small Business", href: "/solutions/small-business" },
        { name: "For Enterprise", href: "/solutions/enterprise" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
            <img
                src="/cactus_logo.png?height=48&width=48"
                alt="Cactus Corporation Mission"
              />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">CactusERP</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) =>
            !item.children ? (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ) : (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href}>{child.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          )}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                      C
                    </div>
                    <span className="font-bold text-xl">CactusERP</span>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-4 py-6">
                  {navigation.map((item) => (
                    <React.Fragment key={item.name}>
                      {!item.children ? (
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="px-2 py-1 text-lg font-medium transition-colors hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      ) : (
                        <div className="space-y-3">
                          <div className="px-2 py-1 text-lg font-medium">{item.name}</div>
                          <div className="ml-4 flex flex-col gap-2 border-l pl-4">
                            {item.children.map((child) => (
                              <SheetClose key={child.name} asChild>
                                <Link
                                  href={child.href}
                                  className="text-base text-muted-foreground transition-colors hover:text-primary"
                                >
                                  {child.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
                <div className="mt-auto border-t py-6 flex flex-col gap-4">
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login">Log in</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                      <Link href="/signup">Get Started</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

