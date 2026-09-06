'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Sparkles,
  MessageCircle,
  Eye,
  X,
  ArrowRight,
  Heart,
  Palette,
} from 'lucide-react'

function InstagramIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const waNumber = '918287678393'
const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`

interface GalleryItem {
  id: string
  title: string
  category: 'Resin Art' | 'Thread Art' | 'Mehandi'
  image: string
  desc: string
  details: string
  tags: string[]
  studio?: string
}

const galleryData: GalleryItem[] = [
  {
    id: 'resin-2',
    title: '37" Statement Evil Eye Gold Resin Round Piece',
    category: 'Resin Art',
    image: '/resin-2.jpg',
    desc: 'Hand-sculpted royal blue and gold 37" Evil Eye resin wall art masterfully crafted by Manpreet Anand ("Handmade with Love • Protected • Timeless").',
    details: '37-inch hand-poured resin wall piece • Metallic gold sunburst halo • Custom protection artwork',
    tags: ['37" Wall Piece', 'Gold Metallic Rim', 'Custom Wall Sculpture'],
    studio: 'Manpreet Anand',
  },
  {
    id: 'resin-1',
    title: 'Customisable Resin Photo Standee',
    category: 'Resin Art',
    image: '/resin-1.jpg',
    desc: 'Handcrafted custom photo resin standee with gold leaf & floral embellishments ("Your Moment, Forever Beautiful"). Perfect for devotional portraits, couple photos, and personal memories.',
    details: 'Custom photo inlay disc • Shimmering gold leafing • High-clarity resin with display stand included',
    tags: ['Custom Photo Inlay', 'Gold Leaf Accents', 'Free Display Stand'],
    studio: 'Manpreet Anand',
  },
  {
    id: 'resin-3',
    title: 'Preserved Bridal Flower Keepsake Frame',
    category: 'Resin Art',
    image: '/resin-3.jpg',
    desc: 'Turn your special blooms into timeless keepsakes. Real wedding and festival bouquet flowers forever preserved in crystal clear resin & elegant gold glass frame.',
    details: 'Custom flower preservation frame • Archival resin coating • Metallic gold border framing',
    tags: ['Bridal Flower Preservation', 'Glass Gold Frame', 'Timeless Keepsake'],
    studio: 'Manpreet Anand',
  },
  {
    id: 'resin-4',
    title: 'Festive Rakhi Gift Hamper with Resin Photo Standee',
    category: 'Resin Art',
    image: '/resin-4.jpg',
    desc: 'Bespoke festival gift hamper featuring a personalized resin photo standee, Evil Eye ceramic mug, handcrafted Evil Eye keychain, and decorative candle holder.',
    details: 'Handwoven hamper basket • Custom resin photo standee • Evil Eye mug & keychain included',
    tags: ['Custom Resin Standee', 'Evil Eye Mug & Keychain', 'Festive Gift Box'],
    studio: 'Manpreet Anand',
  },
  {
    id: 'resin-5',
    title: 'Evil Eye Themed Luxury Room Hamper Set',
    category: 'Resin Art',
    image: '/resin-5.jpg',
    desc: 'Curated protective Evil Eye gift set including artisan embroidered pouches, gourmet treats, Evil Eye hanging charms & festive goodies.',
    details: 'Embroidered mandala pouches • Gourmet snacks & treats • Evil Eye protective wall/room charms',
    tags: ['Evil Eye Pouches', 'Protective Charm', 'Luxury Gift Hamper'],
    studio: 'Manpreet Anand',
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
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14H35C45 14 56 18 64 26C72 34 76 45 76 56V86"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="6" cy="6" r="3.5" fill="url(#cornerGoldDot)" />
      <circle cx="28" cy="14" r="2" fill="#E5B248" />
      <circle cx="48" cy="22" r="2.5" fill="#FFF2D6" />
      <circle cx="94" cy="94" r="3" fill="#E5B248" />
      <path
        d="M6 35C15 35 22 28 22 19"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.2"
      />
      <path
        d="M35 6C35 15 28 22 19 22"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.2"
      />
      <defs>
        <linearGradient id="cornerGoldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF4DB" />
          <stop offset="0.4" stopColor="#E5B248" />
          <stop offset="0.8" stopColor="#AA771C" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="cornerGoldDot" x1="0" y1="0" x2="10" y2="10" gradientUnits="userSpaceOnUse">
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
        fill="url(#crestGoldGrad)"
      />
      <circle cx="80" cy="22" r="3" fill="#FFF8EB" />
      <path
        d="M38 22C52 22 62 15 68 10C64 17 57 22 38 22Z"
        fill="url(#crestGoldGrad)"
      />
      <path
        d="M122 22C108 22 98 15 92 10C96 17 103 22 122 22Z"
        fill="url(#crestGoldGrad)"
      />
      <path
        d="M8 22H52"
        stroke="url(#crestGoldLineL)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d="M108 22H152"
        stroke="url(#crestGoldLineR)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle cx="18" cy="22" r="2.5" fill="#E5B248" />
      <circle cx="142" cy="22" r="2.5" fill="#E5B248" />
      <defs>
        <linearGradient id="crestGoldGrad" x1="62" y1="4" x2="98" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF8EB" />
          <stop offset="0.35" stopColor="#F5D77F" />
          <stop offset="0.75" stopColor="#E5B248" />
          <stop offset="1" stopColor="#AA771C" />
        </linearGradient>
        <linearGradient id="crestGoldLineL" x1="8" y1="22" x2="52" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent" />
          <stop offset="0.6" stopColor="#E5B248" />
          <stop offset="1" stopColor="#FFF2D6" />
        </linearGradient>
        <linearGradient id="crestGoldLineR" x1="108" y1="22" x2="152" y2="22" gradientUnits="userSpaceOnUse">
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
        <line x1="10" y1="12" x2="105" y2="12" stroke="url(#divGoldL)" strokeWidth="1.5" />
        <circle cx="112" cy="12" r="2" fill="#E5B248" />
        <path
          d="M130 3L133 9.5L140 12L133 14.5L130 21L127 14.5L120 12L127 9.5L130 3Z"
          fill="url(#divGoldC)"
        />
        <circle cx="148" cy="12" r="2" fill="#E5B248" />
        <line x1="155" y1="12" x2="250" y2="12" stroke="url(#divGoldR)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="divGoldL" x1="10" y1="12" x2="105" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent" />
            <stop offset="0.6" stopColor="#E5B248" />
            <stop offset="1" stopColor="#FFF4DB" />
          </linearGradient>
          <linearGradient id="divGoldR" x1="155" y1="12" x2="250" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF4DB" />
            <stop offset="0.4" stopColor="#E5B248" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="divGoldC" x1="120" y1="3" x2="140" y2="21" gradientUnits="userSpaceOnUse">
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

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | 'Resin Art' | 'Thread Art' | 'Mehandi'
  >('All')
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const filteredItems =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory)

  const resinArtCount = galleryData.filter((i) => i.category === 'Resin Art').length
  const threadArtCount = galleryData.filter((i) => i.category === 'Thread Art').length
  const mehandiCount = galleryData.filter((i) => i.category === 'Mehandi').length

  return (
    <main className="min-h-screen bg-[#FAF6F4] text-[#261014]">
      <Navbar currentPath="/gallery" />

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
            <span className="royal-breadcrumb-active">Studio Archive</span>
          </div>

          {/* Royal Gold Crest Emblem */}
          <RoyalGoldCrest />

          {/* Eyebrow Badge */}
          <div className="royal-eyebrow-badge">
            <span>⚜</span>
            <span>Royal Handcraft Archive</span>
            <span>⚜</span>
          </div>

          {/* Royal Metallic Gold Heading */}
          <h1 className="royal-gold-heading">
            A Glimpse into Our Art &amp; Stories.
          </h1>

          {/* Royal Gold Divider Ornament */}
          <RoyalGoldDivider />

          {/* Subtitle */}
          <p className="royal-gold-subtitle">
            Every creation in our atelier archive was handcrafted slowly with real dried botanicals, pure henna &amp; threads, and personalized sentimental warmth.
          </p>

          {/* Royal Promise Highlights in Gold Glass */}
          <div className="royal-promise-bar">
            <span className="royal-promise-pill">
              <Sparkles size={13} className="text-[#E5B248]" /> 100% Handcrafted
            </span>
            <span className="royal-promise-pill">
              <Heart size={13} className="text-[#E5B248]" /> Real Preserved Flowers &amp; Henna
            </span>
            <span className="royal-promise-pill">
              <Palette size={13} className="text-[#E5B248]" /> Custom Color Schemes
            </span>
            <span className="royal-promise-pill">
              <MessageCircle size={13} className="text-[#E5B248]" /> Made in Jaipur Atelier
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="section-pad cream-bg !pt-12 !pb-20">
        <div className="max-w-[1240px] mx-auto">
          {/* Top Filter Pill Bar */}
            <div className="gallery-filter-pill-bar">
              <span className="gallery-filter-pill active">
                Resin &amp; Mixed Media Archive ({galleryData.length})
              </span>
            </div>

          {/* Full-Image Gallery Grid with Hover Pop Detail Cards */}
          <div className="gallery-masonry-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-card group"
                onClick={() => setActiveItem(item)}
              >
                {/* Full Image Display */}
                <div className="gallery-card-img-wrap">
                  <img src={item.image} alt={item.title} />

                  {/* Floating Pop-Up Detail Card on Hover (Matching Reference) */}
                  <div className="gallery-pop-card">
                    <div className="gallery-pop-header">
                      {item.category && item.category.toUpperCase() !== 'RESIN ART' && (
                        <span className="gallery-pop-badge">
                          {item.category.toUpperCase()}
                        </span>
                      )}
                      <span className="gallery-pop-studio">
                        {item.studio || 'Artista by Preeti'}
                      </span>
                    </div>

                    <h3 className="gallery-pop-title">{item.title}</h3>
                    <p className="gallery-pop-desc">{item.desc}</p>

                    <div className="gallery-pop-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="gallery-pop-tag">
                          {tag}
                        </span>
                      ))}
                      <span className="gallery-pop-inquire">
                        View &amp; Inquire &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="lightbox-backdrop" onClick={() => setActiveItem(null)}>
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setActiveItem(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="lightbox-grid">
              <div className="lightbox-img-wrap">
                <img src={activeItem.image} alt={activeItem.title} />
              </div>
              <div className="lightbox-info">
                <span className="lightbox-category-tag">
                  {activeItem.category}
                </span>
                <h2>{activeItem.title}</h2>
                <p className="lightbox-desc">{activeItem.desc}</p>

                <div className="lightbox-spec-box">
                  <h4>Craft Specifications</h4>
                  <p>{activeItem.details}</p>
                </div>

                <div className="lightbox-actions">
                  <a
                    className="btn-primary w-full justify-center"
                    href={getWaLink(
                      `Hi! I saw the "${activeItem.title}" in your gallery archive. Can I order a similar custom piece?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} /> Inquire This Style on WhatsApp
                  </a>
                  <Link
                    href="/custom-orders"
                    className="text-link-olive text-sm inline-flex items-center justify-center gap-1.5 pt-2"
                  >
                    Or open full custom order form <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instagram Feed Showcase Section */}
      <section className="olive-deep-bg section-pad text-center">
        <div className="max-w-[700px] mx-auto">
          <p className="eyebrow !text-[#E9E0D0]">Studio Daily Life</p>
          <h2 className="text-white">Follow Behind the Art</h2>
          <p className="text-[#E9E0D0] mt-2 mb-8">
            Watch daily resin pouring reels, custom 37" Evil Eye wall art creations, and studio stories by Manpreet Anand on Instagram.
          </p>
          <a
            className="btn-primary btn-cream inline-flex"
            href="https://www.instagram.com/artista_prreeti?stkn=MWIzMTVienhucWY3dg%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={18} /> @artista_prreeti on Instagram
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
