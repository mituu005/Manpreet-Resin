'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Sparkles,
  Send,
  MessageCircle,
  Clock,
  MapPin,
  Mail,
  ShieldCheck,
  Gift,
  Heart,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Phone,
} from 'lucide-react'

const waNumber = '918287678393'
const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`

const occasions = [
  'Wedding & Bridal Preserved Keepsake',
  '37" Evil Eye Resin Wall Art',
  'Anniversary Photo Standee',
  'Birthday Resin Gift',
  'Devotional & Couple Standee',
  'Housewarming Evil Eye Protection',
  'Festive Rakhi Gift Hamper',
  'Other Custom Resin Creation',
]

const craftStyles = [
  '37" Statement Evil Eye Resin Wall Piece',
  'Customisable Resin Photo Standee',
  'Preserved Bridal Flower Glass Frame',
  'Festive Rakhi Hamper with Resin Standee',
  'Evil Eye Themed Luxury Room Hamper Set',
]

const sizes = [
  '37-Inch Statement Evil Eye Wall Sculpture',
  '6-Inch Petite Standee (Desk / Tabletop)',
  '8-Inch Standard Standee (Most Popular)',
  '10-Inch Statement Standee (Anniversary / Wedding)',
  '12-Inch Grand Halo Frame',
  'Custom Gift Hamper Basket',
]

const palettes = [
  'Royal Blue, Black & Metallic Gold (Evil Eye)',
  'Velvet Bordeaux & Rose Gold',
  'Dusty Rose & Preserved Petals',
  'Terracotta & Champagne Gold',
  'Custom Palette (Share in Notes)',
]

const faqs = [
  {
    q: 'How long does a custom resin creation take to craft?',
    a: 'Each resin piece is hand-poured and cured in layers by Manpreet Anand, taking 4 to 7 business days to craft. Insured shipping across India takes 3 to 5 business days.',
  },
  {
    q: 'Can I see a preview/draft before production begins?',
    a: 'Yes! Once you share your photo and design request on WhatsApp, we provide a preview layout for your approval before hand-pouring.',
  },
  {
    q: 'Can you turn our photos into custom resin standees or preserve our wedding flowers?',
    a: 'Absolutely. We specialize in custom photo resin standees with gold leafing, 37" Evil Eye wall art, and framed preservation of real wedding & celebration flowers.',
  },
  {
    q: 'How are the custom keepsakes packaged?',
    a: 'Every creation arrives in our signature eco-friendly craft box with butter paper wrapping, a dried botanical sprig, easel display stand, and a handwritten personalized gift note.',
  },
  {
    q: 'Do you accept urgent / express orders?',
    a: 'Depending on our studio schedule and resin curing times, express crafting (3–4 days) may be available. Please contact Manpreet Anand on WhatsApp to confirm availability.',
  },
]

function RoyalCornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`royal-corner-ornament ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 6H40C55 6 70 12 80 22C90 32 94 48 94 62V94"
        stroke="url(#cornerGoldGradOrder)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14H35C45 14 56 18 64 26C72 34 76 45 76 56V86"
        stroke="url(#cornerGoldGradOrder)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="6" cy="6" r="3.5" fill="url(#cornerGoldDotOrder)" />
      <circle cx="28" cy="14" r="2" fill="#E5B248" />
      <circle cx="48" cy="22" r="2.5" fill="#FFF2D6" />
      <circle cx="94" cy="94" r="3" fill="#E5B248" />
      <path
        d="M6 35C15 35 22 28 22 19"
        stroke="url(#cornerGoldGradOrder)"
        strokeWidth="1.2"
      />
      <path
        d="M35 6C35 15 28 22 19 22"
        stroke="url(#cornerGoldGradOrder)"
        strokeWidth="1.2"
      />
      <defs>
        <linearGradient id="cornerGoldGradOrder" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF4DB" />
          <stop offset="0.4" stopColor="#E5B248" />
          <stop offset="0.8" stopColor="#AA771C" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="cornerGoldDotOrder" x1="0" y1="0" x2="10" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF8EB" />
          <stop offset="1" stopColor="#E5B248" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function RoyalGoldCrest() {
  return (
    <svg
      className="royal-gold-crest"
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M80 4L85 18L98 22L85 26L80 40L75 26L62 22L75 18L80 4Z"
        fill="url(#crestGoldGradOrder)"
      />
      <circle cx="80" cy="22" r="3" fill="#FFF8EB" />
      <path
        d="M38 22C52 22 62 15 68 10C64 17 57 22 38 22Z"
        fill="url(#crestGoldGradOrder)"
      />
      <path
        d="M122 22C108 22 98 15 92 10C96 17 103 22 122 22Z"
        fill="url(#crestGoldGradOrder)"
      />
      <path
        d="M8 22H52"
        stroke="url(#crestGoldLineLOrder)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d="M108 22H152"
        stroke="url(#crestGoldLineROrder)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle cx="18" cy="22" r="2.5" fill="#E5B248" />
      <circle cx="142" cy="22" r="2.5" fill="#E5B248" />
      <defs>
        <linearGradient id="crestGoldGradOrder" x1="62" y1="4" x2="98" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF8EB" />
          <stop offset="0.35" stopColor="#F5D77F" />
          <stop offset="0.75" stopColor="#E5B248" />
          <stop offset="1" stopColor="#AA771C" />
        </linearGradient>
        <linearGradient id="crestGoldLineLOrder" x1="8" y1="22" x2="52" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent" />
          <stop offset="0.6" stopColor="#E5B248" />
          <stop offset="1" stopColor="#FFF2D6" />
        </linearGradient>
        <linearGradient id="crestGoldLineROrder" x1="108" y1="22" x2="152" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF2D6" />
          <stop offset="0.4" stopColor="#E5B248" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function RoyalGoldDivider() {
  return (
    <div className="royal-gold-divider" aria-hidden="true">
      <svg
        className="royal-gold-divider-svg"
        viewBox="0 0 260 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10" y1="12" x2="105" y2="12" stroke="url(#divGoldLOrder)" strokeWidth="1.5" />
        <circle cx="112" cy="12" r="2" fill="#E5B248" />
        <path
          d="M130 3L133 9.5L140 12L133 14.5L130 21L127 14.5L120 12L127 9.5L130 3Z"
          fill="url(#divGoldCOrder)"
        />
        <circle cx="148" cy="12" r="2" fill="#E5B248" />
        <line x1="155" y1="12" x2="250" y2="12" stroke="url(#divGoldROrder)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="divGoldLOrder" x1="10" y1="12" x2="105" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent" />
            <stop offset="0.6" stopColor="#E5B248" />
            <stop offset="1" stopColor="#FFF4DB" />
          </linearGradient>
          <linearGradient id="divGoldROrder" x1="155" y1="12" x2="250" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF4DB" />
            <stop offset="0.4" stopColor="#E5B248" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="divGoldCOrder" x1="120" y1="3" x2="140" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFBF2" />
            <stop offset="0.4" stopColor="#F5D77F" />
            <stop offset="0.8" stopColor="#E5B248" />
            <stop offset="1" stopColor="#8C5C10" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function CustomOrdersPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [occasion, setOccasion] = useState(occasions[0])
  const [craftStyle, setCraftStyle] = useState(craftStyles[0])
  const [size, setSize] = useState(sizes[1])
  const [palette, setPalette] = useState(palettes[0])
  const [details, setDetails] = useState('')
  const [deadline, setDeadline] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    // Format WhatsApp message with all consultation details
    const message = `*Custom Order Consultation Request - bn.aura (By Bhumi & Nidhi)*

*Client Details:*
• Name: ${name || 'Valued Customer'}
• Phone: ${phone || 'Not provided'}
• Email: ${email || 'Not provided'}

*Project Specifications:*
• Occasion: ${occasion}
• Craft Style: ${craftStyle}
• Preferred Size: ${size}
• Color Palette: ${palette}
• Target Deadline: ${deadline || 'Flexible'}

*Customization Details & Notes:*
"${details || 'I would like to discuss custom text, photos, and motifs with you.'}"

_Sent via bn.aura Custom Order Consultation Form._`

    const waUrl = getWaLink(message)
    window.open(waUrl, '_blank')
  }

  return (
    <main className="min-h-screen bg-[#F5F0E6] text-[#292D22]">
      <Navbar currentPath="/custom-orders" />

      {/* Royal Gold Luxury Atelier Hero Banner */}
      <section className="royal-gallery-hero section-pad">
        {/* Soft Center Gold Radial Glow */}
        <div className="royal-gold-bg-glow" aria-hidden="true" />

        {/* 4 Corner Baroque Filigree Gold Ornaments */}
        <RoyalCornerOrnament className="royal-corner-top-left" />
        <RoyalCornerOrnament className="royal-corner-top-right" />
        <RoyalCornerOrnament className="royal-corner-bottom-left" />
        <RoyalCornerOrnament className="royal-corner-bottom-right" />

        {/* Hero Content Container */}
        <div className="max-w-[860px] mx-auto text-center relative z-10">
          {/* Royal Glass Breadcrumb */}
          <div className="royal-breadcrumb-pill">
            <Link href="/">Home</Link>
            <span className="text-[#E5B248] opacity-60">/</span>
            <span className="royal-breadcrumb-active">Custom Orders &amp; Contact</span>
          </div>

          {/* Royal Gold Crest Emblem */}
          <RoyalGoldCrest />

          {/* Eyebrow Badge */}
          <div className="royal-eyebrow-badge">
            <span>⚜</span>
            <span>Bespoke Craft Consultation</span>
            <span>⚜</span>
          </div>

          {/* Royal Metallic Gold Heading */}
          <h1 className="royal-gold-heading">
            Let&apos;s Shape Your Story Into a Cherished Keepsake.
          </h1>

          {/* Royal Gold Divider Ornament */}
          <RoyalGoldDivider />

          {/* Subtitle */}
          <p className="royal-gold-subtitle">
            Every custom creation is tailored from scratch. Share your names, dates, couple photos, or mehandi styles below to start crafting your personalized heirloom piece.
          </p>

          {/* Royal Promise Highlights in Gold Glass */}
          <div className="royal-promise-bar">
            <span className="royal-promise-pill">
              <Sparkles size={13} className="text-[#E5B248]" /> Direct WhatsApp Draft
            </span>
            <span className="royal-promise-pill">
              <Heart size={13} className="text-[#E5B248]" /> Real Preserved Flowers &amp; Henna
            </span>
            <span className="royal-promise-pill">
              <Gift size={13} className="text-[#E5B248]" /> Signature Gift Boxed
            </span>
            <span className="royal-promise-pill">
              <ShieldCheck size={13} className="text-[#E5B248]" /> Pan-India Insured Shipping
            </span>
          </div>
        </div>
      </section>

      {/* Main 2-Column Section: Form + Studio Info */}
      <section className="section-pad cream-bg !pt-12 !pb-20">
        <div className="custom-order-layout">
          {/* Column 1: Consultation & Inquiry Form */}
          <div className="contact-form-card">
            <div className="form-header">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(212,175,55,0.12)] border border-[rgba(212,175,55,0.35)] text-[0.72rem] font-bold text-[#5E1D28] uppercase tracking-wider mb-2.5">
                <span>⚜</span>
                <span>Direct Atelier Inquiry</span>
                <span>⚜</span>
              </div>
              <h2>Custom Order Consultation</h2>
              <p>
                Fill out your details below. We will instantly format your order request and connect you directly with our artisan on WhatsApp for a personalized draft.
              </p>
            </div>

            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={44} className="text-[#5E1D28] mb-2" />
                <h3>Thank You, {name || 'Friend'}!</h3>
                <p>
                  Your custom order inquiry has been prepared. If your WhatsApp chat didn&apos;t open automatically, please click below:
                </p>
                <a
                  className="btn-royal-submit mt-4 !inline-flex !w-auto"
                  href={getWaLink(
                    `Hi! I just submitted a custom order inquiry for "${craftStyle}" on your website.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} /> Open WhatsApp Chat
                </a>
                <button
                  className="text-xs text-[#9E5664] hover:underline mt-4 cursor-pointer"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="custom-inquiry-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">WhatsApp / Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address (Optional)</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. priya@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="occasion">Occasion / Celebration *</label>
                    <select
                      id="occasion"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                    >
                      {occasions.map((occ) => (
                        <option key={occ} value={occ}>
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="craftStyle">Craft Category *</label>
                    <select
                      id="craftStyle"
                      value={craftStyle}
                      onChange={(e) => setCraftStyle(e.target.value)}
                    >
                      {craftStyles.map((style) => (
                        <option key={style} value={style}>
                          {style}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="size">Preferred Size / Dimensions</label>
                    <select
                      id="size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {sizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="palette">Color Palette Theme</label>
                    <select
                      id="palette"
                      value={palette}
                      onChange={(e) => setPalette(e.target.value)}
                    >
                      {palettes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="deadline">Target Delivery Date / Event Deadline</label>
                  <input
                    id="deadline"
                    type="text"
                    placeholder="e.g. By next month 15th, or Flexible"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="details">
                    Customization Details, Names, Dates &amp; Notes *
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    required
                    placeholder="Tell us what names/dates to preserve (e.g. 'Aarav & Meera, 24th Dec 2024'), preferred flower shades, mehandi style, or special requests..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-royal-submit w-full">
                    <Send size={17} /> Submit Custom Inquiry on WhatsApp
                  </button>
                  <p className="form-note">
                    <ShieldCheck size={14} className="text-[#9E5664] inline mr-1" />
                    You can share reference pictures &amp; invitations directly on WhatsApp after submitting.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Column 2: Studio Information & Craft Process Card */}
          <div className="studio-info-col">
            {/* Direct Studio Contact Card */}
            <div className="studio-contact-card">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(212,175,55,0.12)] border border-[rgba(212,175,55,0.35)] text-[0.72rem] font-bold text-[#5E1D28] uppercase tracking-wider mb-2.5">
                <span>👑</span>
                <span>Direct Connect</span>
              </div>
              <h3>Direct Studio Contacts</h3>
              <p className="subtitle">
                Prefer talking directly? Connect with our craft studio through any channel below:
              </p>

              <div className="contact-items-list">
                <a
                  href="tel:8287678393"
                  className="contact-item-row group"
                >
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-label">Direct Phone Call</span>
                    <span className="contact-val group-hover:text-[#5E1D28]">
                      📞 8287678393
                    </span>
                  </div>
                </a>

                <a
                  href={getWaLink("Hi! I'd like to discuss a custom order directly.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-row group"
                >
                  <div className="contact-icon-box">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className="contact-label">WhatsApp Quick Chat</span>
                    <span className="contact-val group-hover:text-[#5E1D28]">
                      +91 8287678393 &rarr;
                    </span>
                  </div>
                </a>

                <div className="contact-item-row">
                  <div className="contact-icon-box">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <span className="contact-label">Instagram Atelier</span>
                    <a
                      href="https://www.instagram.com/artista_prreeti?stkn=MWIzMTVienhucWY3dg%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-val text-[#5E1D28] hover:text-[#9E5664]"
                    >
                      @artista_prreeti
                    </a>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-label">Studio &amp; Workshop</span>
                    <span className="contact-val">Jaipur, Rajasthan, India</span>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-box">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="contact-label">Studio Hours &amp; Response</span>
                    <span className="contact-val">Mon &ndash; Sat, 10 AM &ndash; 7 PM (within 2-4 hrs)</span>
                  </div>
                </div>
              </div>

              <div className="studio-perks-badge">
                <div className="perk-pill">
                  <Gift size={14} className="text-[#5E1D28]" /> Gift Boxed
                </div>
                <div className="perk-pill">
                  <ShieldCheck size={14} className="text-[#5E1D28]" /> Pan-India Delivery
                </div>
                <div className="perk-pill">
                  <Heart size={14} className="text-[#5E1D28]" /> 100% Handcrafted
                </div>
              </div>
            </div>

            {/* How It Works Card */}
            <div className="custom-journey-card">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(212,175,55,0.12)] border border-[rgba(212,175,55,0.35)] text-[0.72rem] font-bold text-[#5E1D28] uppercase tracking-wider mb-2.5">
                <span>✨</span>
                <span>Crafting Journey</span>
              </div>
              <h3>How Custom Orders Work</h3>
              <div className="journey-steps">
                <div className="journey-step">
                  <span className="step-num">1</span>
                  <div>
                    <h4>Consultation &amp; Idea</h4>
                    <p>Share your idea, names, dates, quotes, and reference photos with us.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <span className="step-num">2</span>
                  <div>
                    <h4>Digital Layout Draft</h4>
                    <p>We draft typography and select thread shades together before beginning.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <span className="step-num">3</span>
                  <div>
                    <h4>Crafted With Devotion</h4>
                    <p>Every floral petal is placed and every resin layer is poured slowly by hand.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <span className="step-num">4</span>
                  <div>
                    <h4>Wrapped &amp; Shipped</h4>
                    <p>Safely packed in aesthetic craft boxing and delivered to your doorstep.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions - Royal Gold Theme */}
      <section className="royal-faq-section section-pad relative overflow-hidden">
        {/* Soft Center Gold Radial Glow */}
        <div className="royal-gold-bg-glow" aria-hidden="true" />

        {/* Ornate Gold Filigree Corner Accents */}
        <RoyalCornerOrnament className="royal-corner-top-left" />
        <RoyalCornerOrnament className="royal-corner-top-right" />

        <div className="max-w-[840px] mx-auto relative z-10">
          <div className="text-center mb-9">
            <div className="royal-eyebrow-badge mb-2.5">
              <span>⚜</span>
              <span>Clear Answers &amp; Gifting Details</span>
              <span>⚜</span>
            </div>
            <h2 className="royal-gold-faq-heading">
              Frequently Asked Questions
            </h2>
            <RoyalGoldDivider />
            <p className="text-[#F3EAE6] text-sm md:text-base max-w-[620px] mx-auto opacity-90 leading-relaxed">
              Everything you need to know about our slow-crafted handmade process, preview drafts, and insured delivery.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <button className="faq-question" type="button" aria-expanded={openFaq === idx}>
                  <div className="faq-q-content">
                    <span className="faq-q-badge">0{idx + 1}</span>
                    <span>{faq.q}</span>
                  </div>
                  <div className={`faq-chevron-bubble ${openFaq === idx ? 'active' : ''}`}>
                    <ChevronDown
                      size={17}
                      className={`faq-chevron ${openFaq === idx ? 'rotated' : ''}`}
                    />
                  </div>
                </button>
                {openFaq === idx && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-pad cream-bg text-center">
        <div className="max-w-[680px] mx-auto">
          <p className="eyebrow">Ready To Start?</p>
          <h2>Have an urgent question or specific theme?</h2>
          <p className="text-[#777263] mt-2 mb-6">
            Message us anytime on WhatsApp and we will guide you through resin disc sizes, mehandi bookings, and estimates.
          </p>
          <a
            className="btn-primary inline-flex justify-center"
            href={getWaLink("Hi! I have a question about custom handmade orders.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Chat with Artist on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
