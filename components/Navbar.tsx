'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'

interface NavbarProps {
  currentPath?: string
}

const waNumber = '918287678393'
const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
const defaultWaLink = getWaLink("Hi! I'd like to discuss a custom Resin Art creation with Manpreet Anand (@artista_prreeti).")

export default function Navbar({ currentPath = '/' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="logo-brand flex items-center gap-2.5">
        <img
          src="/manpreet-anand-logo.jpg"
          alt="Manpreet Anand Logo"
          className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover shadow-sm border border-[rgba(229,178,72,0.45)] hover:scale-105 transition-transform"
        />
        <div className="flex flex-col text-left">
          <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#5E1D28] leading-none">
            Manpreet Anand
          </span>
          <span className="text-[0.62rem] uppercase tracking-wider text-[#9E5664] font-medium leading-tight mt-0.5">
            Resin and Mixed Media Artist
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <Link href="/" className={currentPath === '/' ? 'active-nav-link' : ''}>
          Home
        </Link>
        <Link
          href="/gallery"
          className={currentPath === '/gallery' ? 'active-nav-link' : ''}
        >
          Gallery
        </Link>
        <Link href="/#about">Our Story</Link>
        <Link
          href="/custom-orders"
          className={currentPath === '/custom-orders' ? 'active-nav-link' : ''}
        >
          Custom Orders
        </Link>
        <Link
          href="/custom-orders"
          className={currentPath === '/custom-orders' ? 'active-nav-link' : ''}
        >
          Contact Us
        </Link>
        <a
          className="btn-primary btn-sm"
          href={defaultWaLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={15} /> Order Now
        </a>
      </nav>

      {/* Mobile Hamburger Toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <Link
            href="/"
            className="text-base font-semibold text-[#5E1D28] hover:text-[#3D1017] py-1 border-b border-[rgba(158,86,100,0.15)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="text-base font-semibold text-[#5E1D28] hover:text-[#3D1017] py-1 border-b border-[rgba(158,86,100,0.15)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/#about"
            className="text-base font-semibold text-[#5E1D28] hover:text-[#3D1017] py-1 border-b border-[rgba(158,86,100,0.15)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/custom-orders"
            className="text-base font-semibold text-[#5E1D28] hover:text-[#3D1017] py-1 border-b border-[rgba(158,86,100,0.15)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Custom Orders
          </Link>
          <Link
            href="/custom-orders"
            className="text-base font-semibold text-[#5E1D28] hover:text-[#3D1017] py-1 border-b border-[rgba(158,86,100,0.15)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <a
            className="btn-primary mt-2 justify-center"
            href={defaultWaLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <MessageCircle size={17} /> Order Now on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
