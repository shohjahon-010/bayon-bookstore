"use client"

import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"

export default function Navigation({ cartCount, onCartClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border animate-slide-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
              B
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">Bayon</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Bosh sahifa
            </Link>
            <Link href="/books" className="text-foreground hover:text-primary transition-colors">
              Kitoblar
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              Biz haqida
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Aloqa
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Cart Button */}
            <button onClick={onCartClick} className="relative p-2 text-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-up">
            <Link href="/" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded">
              Bosh sahifa
            </Link>
            <Link href="/books" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded">
              Kitoblar
            </Link>
            <Link href="/about" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded">
              Biz haqida
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded">
              Aloqa
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
