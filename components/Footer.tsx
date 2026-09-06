'use client'

import React from 'react'
import Link from 'next/link'
import {
  MessageCircle,
  Sparkles,
  Heart,
  ShieldCheck,
  Mail,
  MapPin,
  ArrowUpRight,
  Phone,
} from 'lucide-react'

const waNumber = '918287678393'
const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
const defaultWaLink = getWaLink(
  "Hi! I'd like to discuss a custom Resin Art creation with Manpreet Anand (@artista_prreeti)."
)

export default function Footer() {
  return (
    <>
      <footer className="royal-site-footer relative overflow-hidden">
        {/* Soft Ambient Gold Glow */}
        <div className="royal-footer-gold-glow" aria-hidden="true" />

        {/* Top Gold Foil Accent Border */}
        <div className="royal-footer-top-accent" />

        <div className="max-w-[1240px] mx-auto relative z-10 px-4 md:px-8 pt-16 pb-10">
          {/* Main 4-Column Luxury Grid */}
          <div className="royal-footer-grid">
            {/* Col 1: Royal Brand & Atelier Heritage */}
            <div className="royal-footer-brand-col">
              <Link href="/" className="royal-footer-logo flex items-center gap-3">
                <img
                  src="/manpreet-anand-logo.jpg"
                  alt="Manpreet Anand Logo"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-md border-2 border-[#E5B248]"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[#FFF2D6] font-serif text-2xl font-bold tracking-tight">Manpreet Anand</span>
                  <span className="text-[#E5B248] text-[0.65rem] uppercase tracking-wider font-semibold">Resin and Mixed Media Artist</span>
                </div>
              </Link>

              <div className="royal-footer-badge">
                <span>⚜</span>
                <span>Resin and Mixed Media Artist</span>
                <span>⚜</span>
              </div>

              <p className="royal-footer-desc">
                Handcrafted botanical resin keepsakes, 37" Evil Eye wall art, preserved flower frames, and luxury hampers made with love by Manpreet Anand.
              </p>

              {/* Trust Badges */}
              <div className="royal-footer-perks">
                <span className="royal-footer-perk-pill">
                  <Sparkles size={12} className="text-[#E5B248]" /> 100% Handcrafted
                </span>
                <span className="royal-footer-perk-pill">
                  <ShieldCheck size={12} className="text-[#E5B248]" /> Pan-India Insured
                </span>
                <span className="royal-footer-perk-pill">
                  <Heart size={12} className="text-[#E5B248]" /> Heirloom Keepsakes
                </span>
              </div>
            </div>

            {/* Col 2: Studio Navigation */}
            <div className="royal-footer-nav-col">
              <h4 className="royal-footer-heading">
                <span>Explore Studio</span>
                <div className="royal-footer-heading-line" />
              </h4>
              <ul className="royal-footer-links">
                <li>
                  <Link href="/">Home Archive</Link>
                </li>
                <li>
                  <Link href="/gallery">Studio Gallery</Link>
                </li>
                <li>
                  <Link href="/#about">About Manpreet Anand</Link>
                </li>
                <li>
                  <Link href="/custom-orders">Custom Orders</Link>
                </li>
                <li>
                  <Link href="/custom-orders">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Craft Collections */}
            <div className="royal-footer-nav-col">
              <h4 className="royal-footer-heading">
                <span>Craft Archives</span>
                <div className="royal-footer-heading-line" />
              </h4>
              <ul className="royal-footer-links">
                <li>
                  <Link href="/gallery">37" Evil Eye Wall Art</Link>
                </li>
                <li>
                  <Link href="/gallery">Custom Resin Standees</Link>
                </li>
                <li>
                  <Link href="/gallery">Preserved Flower Frames</Link>
                </li>
                <li>
                  <Link href="/gallery">Festive Rakhi Hampers</Link>
                </li>
                <li>
                  <Link href="/gallery">Evil Eye Luxury Hampers</Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Atelier Concierge */}
            <div className="royal-footer-contact-col">
              <h4 className="royal-footer-heading">
                <span>Direct Concierge</span>
                <div className="royal-footer-heading-line" />
              </h4>
              <p className="royal-footer-contact-desc">
                Have a bespoke resin piece in mind or want to customize a hamper? Connect directly with Manpreet Anand on WhatsApp.
              </p>

              <div className="royal-footer-contact-list">
                <a
                  href={defaultWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="royal-footer-contact-item royal-footer-wa-item group"
                >
                  <div className="royal-footer-icon-circle">
                    <MessageCircle size={15} />
                  </div>
                  <div>
                    <span className="royal-footer-contact-lbl">Instant Atelier Chat</span>
                    <span className="royal-footer-contact-val text-[#FFF2D6] group-hover:text-[#F5D77F] transition-colors">
                      WhatsApp: +91 8287678393 &rarr;
                    </span>
                  </div>
                </a>

                <a
                  href="tel:8287678393"
                  className="royal-footer-contact-item group"
                >
                  <div className="royal-footer-icon-circle">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="royal-footer-contact-lbl">Direct Phone</span>
                    <span className="royal-footer-contact-val text-[#FFF2D6] group-hover:text-[#F5D77F] transition-colors">
                      📞 8287678393
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/artista_prreeti?stkn=MWIzMTVienhucWY3dg%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="royal-footer-contact-item group"
                >
                  <div className="royal-footer-icon-circle">
                    <Sparkles size={15} />
                  </div>
                  <div>
                    <span className="royal-footer-contact-lbl">Instagram Atelier</span>
                    <span className="royal-footer-contact-val text-[#FFF2D6] group-hover:text-[#F5D77F] transition-colors">
                      @artista_prreeti
                    </span>
                  </div>
                </a>

                <div className="royal-footer-contact-item">
                  <div className="royal-footer-icon-circle">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="royal-footer-contact-lbl">Atelier &amp; Studio</span>
                    <span className="royal-footer-contact-val">Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Symmetrical Center Gold Divider */}
          <div className="royal-footer-divider-wrap">
            <svg className="royal-footer-divider-svg" viewBox="0 0 300 24" fill="none" aria-hidden="true">
              <line x1="0" y1="12" x2="120" y2="12" stroke="url(#footDivL)" strokeWidth="1" />
              <circle cx="130" cy="12" r="2" fill="#E5B248" />
              <path d="M150 4L152.5 10L158 12L152.5 14L150 20L147.5 14L142 12L147.5 10L150 4Z" fill="url(#footDivC)" />
              <circle cx="170" cy="12" r="2" fill="#E5B248" />
              <line x1="180" y1="12" x2="300" y2="12" stroke="url(#footDivR)" strokeWidth="1" />
              <defs>
                <linearGradient id="footDivL" x1="0" y1="12" x2="120" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="transparent" />
                  <stop offset="1" stopColor="#E5B248" />
                </linearGradient>
                <linearGradient id="footDivR" x1="180" y1="12" x2="300" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E5B248" />
                  <stop offset="1" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="footDivC" x1="142" y1="4" x2="158" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF8EB" />
                  <stop offset="0.5" stopColor="#E5B248" />
                  <stop offset="1" stopColor="#AA771C" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom Copyright & Atelier Love Note */}
          <div className="royal-footer-bottom-bar">
            <p className="royal-footer-copyright">
              &copy; {new Date().getFullYear()} <span className="text-[#FFF2D6] font-semibold">Manpreet Anand — Resin and Mixed Media Artist</span>. All rights reserved.
            </p>
            <p className="royal-footer-tagline">
              <span>Handcrafted with love in</span>
              <span className="royal-footer-gold-tag">Jaipur, Rajasthan ⚜</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        className="floating-wa-btn"
        href={defaultWaLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageCircle size={26} />
      </a>
    </>
  )
}
