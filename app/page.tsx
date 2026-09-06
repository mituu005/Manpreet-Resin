'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  ArrowDown,
  ArrowRight,
  Check,
  Heart,
  MessageCircle,
  Sparkles,
  Gift,
  Palette,
  Clock,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight,
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

function HandDrawnHeart({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 31.5 C16.5 29.8 6.5 21.5 5.5 14.5 C4.8 9.5 8.2 5.5 13.2 5.5 C16 5.5 18.5 7 19.8 9.2 C21.1 7 23.6 5.5 26.4 5.5 C31.4 5.5 34.8 9.5 34.1 14.5 C33.1 21.5 23.1 29.8 21.6 31.5 L19.8 33 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BotanicalBranch({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central Stem Line */}
      <line x1="8" y1="18" x2="152" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* Leaf Pair 1 (Leftmost) */}
      <path d="M 22 18 C 18 10 12 7 9 11 C 7 15 14 17 22 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 22 18 C 18 26 12 29 9 25 C 7 21 14 19 22 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Leaf Pair 2 */}
      <path d="M 46 18 C 42 10 36 7 33 11 C 31 15 38 17 46 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 46 18 C 42 26 36 29 33 25 C 31 21 38 19 46 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Leaf Pair 3 */}
      <path d="M 70 18 C 66 10 60 7 57 11 C 55 15 62 17 70 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 70 18 C 66 26 60 29 57 25 C 55 21 62 19 70 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Leaf Pair 4 */}
      <path d="M 94 18 C 90 10 84 7 81 11 C 79 15 86 17 94 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 94 18 C 90 26 84 29 81 25 C 79 21 86 19 94 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Leaf Pair 5 */}
      <path d="M 118 18 C 114 10 108 7 105 11 C 103 15 110 17 118 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 118 18 C 114 26 108 29 105 25 C 103 21 110 19 118 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Tip Leaf (Rightmost) */}
      <path d="M 142 18 C 146 14 153 14 155 18 C 153 22 146 22 142 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

const waNumber = '918287678393'

const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`

const defaultWaLink = getWaLink("Hi! I'd like to discuss a custom Resin Art creation with Manpreet Anand (@artista_prreeti).")

const images = {
  stitch: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=85',
  artist: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
}

const heroBackgrounds = [
  {
    url: '/resin-2.jpg',
    alt: '37" Resin Evil Eye Round Piece - Handmade with Love, Protected & Timeless by Manpreet Anand',
  },
  {
    url: '/resin-1.jpg',
    alt: 'Customisable Resin Standee - Your Moment, Forever Beautiful',
  },
  {
    url: '/resin-3.jpg',
    alt: 'Preserved Bridal Flower Keepsake Frame',
  },
]

interface CategoryItem {
  title: string
  desc: string
  image: string
  tag: string
  badge: string
  highlight: string
}

const categories: CategoryItem[] = [
  {
    title: '37" Evil Eye Resin Round Piece',
    desc: 'Hand-sculpted royal blue and gold 37" Evil Eye resin masterpiece by Preeti Anand. "Handmade with Love • Protected • Timeless".',
    image: '/resin-2.jpg',
    tag: 'Protection Art',
    badge: '37" Wall Piece',
    highlight: 'Gold Metallic Rim',
  },
  {
    title: 'Customisable Resin Standees',
    desc: 'Personalized photo standees with gold leafing & floral accents. "Your Moment, Forever Beautiful".',
    image: '/resin-1.jpg',
    tag: 'Standee Art',
    badge: 'Custom Photo',
    highlight: 'Standee Keepsakes',
  },
  {
    title: 'Preserved Flower Frames',
    desc: 'Turn your special wedding & celebration blooms into timeless framed resin floral keepsakes.',
    image: '/resin-3.jpg',
    tag: 'Flower Preservation',
    badge: 'Bridal Flowers',
    highlight: 'Timeless Keepsakes',
  },
  {
    title: 'Rakhi Gift Hampers',
    desc: 'Bespoke festival gift hamper with custom resin photo standee, Evil Eye mug & handcrafted accessories.',
    image: '/resin-4.jpg',
    tag: 'Gift Hampers',
    badge: 'Festive Box',
    highlight: 'Photo Standee + Mug',
  },
  {
    title: 'Evil Eye Room Hampers',
    desc: 'Curated protective Evil Eye gift sets with artisan embroidered pouches, treats & charm decor.',
    image: '/resin-5.jpg',
    tag: 'Gift Sets',
    badge: 'Luxury Hamper',
    highlight: 'Evil Eye Pouches',
  },
]

const galleryImages = [
  {
    image: '/resin-2.jpg',
    title: '37" Statement Evil Eye Gold Resin Round Piece',
    badge: '37" WALL PIECE',
    desc: 'Royal blue & gold resin Evil Eye masterpiece hand-crafted by Preeti Anand',
    tags: ['37 Inch Piece', 'Gold Sunburst', 'Wall Sculpture'],
  },
  {
    image: '/resin-1.jpg',
    title: 'Customisable Resin Photo Standee',
    badge: 'CUSTOM STANDEE',
    desc: 'Bespoke custom photo resin standee with gold leaf & floral embellishments',
    tags: ['Custom Photo', 'Gold Leaf Inlay', 'Free Stand'],
  },
  {
    image: '/resin-3.jpg',
    title: 'Preserved Bridal Flower Keepsake Frame',
    badge: 'FLOWER FRAME',
    desc: 'Real wedding flowers preserved in clear resin with elegant gold border frame',
    tags: ['Flower Preservation', 'Gold Glass Frame', 'Heirloom Keepsake'],
  },
  {
    image: '/resin-4.jpg',
    title: 'Festive Rakhi Gift Hamper with Resin Standee',
    badge: 'RAKHI HAMPER',
    desc: 'Handcrafted hamper featuring custom photo standee, Evil Eye mug & candle holder',
    tags: ['Rakhi Hamper', 'Evil Eye Mug', 'Photo Standee'],
  },
  {
    image: '/resin-5.jpg',
    title: 'Evil Eye Themed Luxury Room Hamper Set',
    badge: 'LUXURY HAMPER',
    desc: 'Curated gift hampers with embroidered pouches, gourmet treats & Evil Eye charms',
    tags: ['Evil Eye Pouches', 'Luxury Gift Box', 'Room Charm'],
  },
]

const occasions = [
  'Wedding & Reception',
  'Anniversary Milestone',
  'Birthday Surprise',
  'Baby Shower & Birth',
  'Housewarming Blessing',
  'Graduation & Success',
  'Festive & Diwali Gifting',
  'Just Because Love',
]

const customChips = [
  'Couple Portraits',
  'Wedding Dates',
  'Preserved Florals',
  'Bridal Mehandi',
  'Gold Foil Inlays',
  'Custom Resin Sizes',
  'Gift Box & Notes',
]

const valueProps = [
  {
    icon: Sparkles,
    title: '100% Handcrafted',
    desc: 'Zero machine prints. Every resin preservation, mehandi stroke, and thread piece is made by artisan hands.',
  },
  {
    icon: Palette,
    title: 'Custom To Your Taste',
    desc: 'Choose from a soothing palette of warm creams, olive greens, and earthy tones.',
  },
  {
    icon: Gift,
    title: 'Gift-Ready Packaging',
    desc: 'Arrives in signature craft boxing with butter paper and handwritten note cards.',
  },
  {
    icon: ShieldCheck,
    title: 'Keepsake Durability',
    desc: 'Made with high-clarity UV-resistant resin, organic sojat henna, and archival materials.',
  },
]

const testimonials = [
  {
    name: 'Priya & Rohan Sharma',
    city: 'Jaipur, Rajasthan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Anniversary Floral Resin Disc',
    stars: 5,
    quote:
      'Sachi bolu toh anniversary resin keepsake dekh ke meri wife almost emotional ho gayi thi! Real preserved petals aur couple photo crystal resin mein itne neatly set hain. Packaging was super premium with handwritten card!',
    time: 'Verified Order • 2 weeks ago',
  },
  {
    name: 'Ananya Deshmukh',
    city: 'Bandra, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Royal Peacock Fiber Art Dreamcatcher',
    stars: 5,
    quote:
      'Living room ke liye Peacock thread art order kiya tha, and trust me, photos don’t do justice! Real mein room lighting ke sath itna classy aur luxurious look deta hai. WhatsApp pe design discussion bhi super smooth tha.',
    time: 'Verified Order • 1 month ago',
  },
  {
    name: 'Riya & Kabir Sen',
    city: 'Koramangala, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Dulhan Storyline Bridal Mehandi',
    stars: 5,
    quote:
      'Wedding ke liye Radha Krishna aur doli theme bridal mehandi lagwayi thi, aur har guest ne poochha ki kahan se lagwayi! Deep dark stain aur intricate jali detailing 10/10 hai. Truly unforgettable!',
    time: 'Verified Order • 3 weeks ago',
  },
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroReady, setHeroReady] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  useEffect(() => {
    // 1. Trigger hero entrance animation smoothly on mount
    const heroTimer = setTimeout(() => {
      setHeroReady(true)
    }, 80)

    // 2. Auto-cycle through the 3 hero background images
    const slideTimer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroBackgrounds.length)
    }, 5000)

    // 3. Setup IntersectionObserver for scroll-triggered reveals (animates once per page load)
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const elementsToObserve = document.querySelectorAll(
      '.reveal-section, .reveal-card, .reveal-steps, .reveal-split-left, .reveal-split-right, .reveal-cta'
    )
    elementsToObserve.forEach((el) => observer.observe(el))

    // 4. Navbar scroll listener & subtle desktop parallax
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setIsScrolled(scrollY > 50)

          // Subtle desktop parallax (clamped to max 12px)
          if (window.innerWidth > 820) {
            const slides = document.querySelectorAll('.hero-bg-slide') as NodeListOf<HTMLElement>
            if (slides.length && scrollY < 800) {
              slides.forEach((slide) => {
                slide.style.backgroundPositionY = `${scrollY * 0.12}px`
              })
            }
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      clearTimeout(heroTimer)
      clearInterval(slideTimer)
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#F5F0E6] text-[#292D22]">
      {/* Sticky Header with Smooth Scroll Blur & Shadow */}
      <Navbar currentPath="/" />

      {/* Hero Section with Auto-Changing 3-Image Background Slider */}
      <section className={`hero section-pad cream-bg ${heroReady ? 'hero-ready' : ''}`} id="home">
        {/* Background 3-Image Slider Layer with Smooth Crossfade */}
        <div className="hero-bg-slider" aria-hidden="true">
          {heroBackgrounds.map((bg, idx) => (
            <div
              key={bg.url}
              className={`hero-bg-slide ${currentHeroIndex === idx ? 'active' : ''}`}
            >
              <img
                src={bg.url}
                alt={bg.alt}
                className="hero-bg-slide-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          <div className="hero-bg-gradient-overlay" />
        </div>

        {/* Hero Content Copy */}
        <div className="hero-copy">
          <div className="hero-eyebrow-badge hero-reveal-1">
            <span>MANPREET ANAND</span>
            <span className="hero-dot">•</span>
            <span>RESIN &amp; MIXED MEDIA ARTIST</span>
            <span className="hero-dot">•</span>
            <span>37&quot; EVIL EYE ART</span>
          </div>

          <h1 className="hero-heading hero-reveal-2">
            <span>Preserving Moments</span>
            <span className="hero-heading-line2">
              In Eternal Art.
              <HandDrawnHeart className="hero-heart-icon" />
            </span>
          </h1>

          <div className="hero-divider hero-reveal-3" />

          <p className="hero-subtitle hero-reveal-4">
            Bespoke botanical resin keepsakes, 37&quot; Evil Eye wall art, preserved flower frames, and luxury hampers, carefully handcrafted by Manpreet Anand (@artista_prreeti) to make your special memories everlasting.
          </p>

          <div className="hero-botanical-wrap hero-reveal-5">
            <BotanicalBranch className="hero-botanical-icon" />
          </div>

          <div className="btn-row hero-reveal-6">
            <a className="btn-primary" href="#categories">
              Explore Collection <ArrowDown size={17} />
            </a>
            <a
              className="text-link-olive"
              href={getWaLink("Hi Manpreet! I'd like to customize a bespoke Resin Creation / Evil Eye piece.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Customize Yours <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Interactive Hero Slide Controls */}
        <div className="hero-slide-controls">
          <button
            type="button"
            className="hero-nav-arrow"
            onClick={() =>
              setCurrentHeroIndex(
                (prev) => (prev - 1 + heroBackgrounds.length) % heroBackgrounds.length
              )
            }
            aria-label="Previous background image"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="hero-slide-indicators">
            {heroBackgrounds.map((_, idx) => (
              <button
                type="button"
                key={idx}
                className={`hero-indicator-dot ${currentHeroIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentHeroIndex(idx)}
                aria-label={`Switch to hero background image ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="hero-nav-arrow"
            onClick={() =>
              setCurrentHeroIndex((prev) => (prev + 1) % heroBackgrounds.length)
            }
            aria-label="Next background image"
          >
            <ChevronRight size={16} />
          </button>

          <div className="hero-counter-badge">
            0{currentHeroIndex + 1} / 0{heroBackgrounds.length}
          </div>
        </div>
      </section>

      {/* Collection Categories Section (Olive Green Background) */}
      <section className="olive-bg section-pad reveal-section" id="categories">
        <div className="section-heading">
          <p className="eyebrow">
            <Sparkles size={14} className="text-[#E9E0D0]" /> The Collection
          </p>
          <h2>
            Made by hand, <br />
            <em className="text-[#E9E0D0] italic font-normal">curated for moments.</em>
          </h2>
          <p>
            Explore our curated collections of botanical hoops, custom name frames, delicate crochet crafts, and milestone keepsakes.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((cat, idx) => (
            <Link
              className="category-card reveal-card group"
              key={cat.title}
              style={{ '--stagger-idx': idx } as React.CSSProperties}
              href="/gallery"
            >
              {/* Full Artwork Image */}
              <div className="category-card-img-wrap">
                <img src={cat.image} alt={cat.title} />
                <div className="category-card-sheen" />
              </div>

              {/* Floating Top Badges */}
              <div className="category-card-top-tags">
                <span className="category-tag-top-left">{cat.tag}</span>
                <div className="category-card-badge">
                  <span className="category-badge-dot" />
                  <span>{cat.badge}</span>
                </div>
              </div>

              {/* Glassmorphic Animated Bottom Drawer */}
              <div className="category-card-glass-drawer">
                <span className="category-highlight-txt">{cat.highlight}</span>
                <h3 className="category-card-title">{cat.title}</h3>
                <p className="category-card-desc">{cat.desc}</p>
                <div className="category-card-cta">
                  <span>Explore Collection</span>
                  <div className="action-arrow-circle">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Custom Orders Interactive Section (Split Entrance) */}
      <section className="section-pad cream-bg reveal-section" id="custom-orders">
        <div className="custom-order-wrapper">
          <img
            src="/resin-5.jpg"
            alt="Artisan hands preserving real dried botanical florals in crystal resin in studio"
            className="custom-order-image object-cover reveal-split-left"
          />
          <div className="custom-order-content reveal-split-right">
            <p className="eyebrow">Custom Creations</p>
            <h2>
              Have an idea in mind? <br />
              <em className="text-[#737B5D] italic font-normal">We&apos;ll craft your vision.</em>
            </h2>
            <p className="text-[#785A60] my-4 leading-relaxed">
              Every detail is made just for you. Share a couple reference photo, wedding date, floral preference, or bridal mehandi style, and we will bring it to life in crystal botanical resin, intricate henna patterns, and gold foil accents.
            </p>

            <div className="pills-cloud">
              {customChips.map((chip) => (
                <span key={chip} className="pill-item">
                  {chip}
                </span>
              ))}
            </div>

            <div className="btn-row">
              <Link className="btn-primary" href="/custom-orders">
                <Sparkles size={16} /> Custom Order &amp; Consultation Page <ArrowRight size={16} />
              </Link>
              <a
                className="text-link-olive"
                href={getWaLink("Hi! I have a custom Resin Keepsake or Bridal Mehandi design in mind that I'd like to order.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> Direct WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section (Shop by Occasion Stagger) */}
      <section className="olive-bg section-pad reveal-section">
        <div className="section-heading">
          <p className="eyebrow">For Every Chapter</p>
          <h2>Crafted for Every Little Milestone</h2>
          <p>
            Whether it is a wedding, anniversary, festive celebration, or bridal mehandi ceremony, our handmade creations add sentimental warmth to any celebration.
          </p>
        </div>

        <div className="occasion-grid">
          {occasions.map((occ, idx) => (
            <a
              href={getWaLink(`Hi! I want to create a personalized handmade gift for a ${occ}.`)}
              key={occ}
              className="occasion-tile reveal-card group"
              style={{ '--stagger-idx': idx } as React.CSSProperties}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles size={18} className="text-[#E9E0D0] shrink-0" />
              <span>{occ}</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* Gallery Section (Artistic Staggered Entrance) */}
      <section className="olive-deep-bg section-pad reveal-section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Studio Showcase</p>
          <h2>A Glimpse into Our Creations</h2>
          <p>
            A visual chronicle of our botanical resin preservation, bridal mehandi storytelling, and handcrafted keepsakes.
          </p>
        </div>

        <div className="gallery-masonry-grid">
          {galleryImages.map((item, idx) => (
            <Link
              href="/gallery"
              className="gallery-card group reveal-card"
              key={idx}
              style={{ '--stagger-idx': idx } as React.CSSProperties}
            >
              <div className="gallery-card-img-wrap">
                <img src={item.image} alt={item.title} />

                {/* Floating Pop-Up Detail Card on Hover */}
                <div className="gallery-pop-card">
                  <div className="gallery-pop-header">
                    {item.badge && item.badge.toUpperCase() !== 'RESIN ART' && (
                      <span className="gallery-pop-badge">{item.badge}</span>
                    )}
                    <span className="gallery-pop-studio">Artista by Preeti</span>
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
                      View Piece &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            className="btn-primary btn-cream"
            href="/gallery"
          >
            <Sparkles size={16} /> View Full Studio Gallery (18+ Works) <ArrowRight size={15} />
          </Link>
          <a
            className="text-link-cream"
            href="https://www.instagram.com/artista_prreeti?stkn=MWIzMTVienhucWY3dg%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={17} /> @artista_prreeti on Instagram <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Why Handmade Value Props */}
      <section className="cream-bg section-pad reveal-section">
        <div className="section-heading">
          <p className="eyebrow">The Artisan Promise</p>
          <h2>Why Choose Handmade?</h2>
          <p>
            Every piece is created with mindfulness, enduring materials, and genuine passion.
          </p>
        </div>

        <div className="features-grid">
          {valueProps.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                className="feature-box reveal-card group"
                key={feat.title}
                style={{ '--stagger-idx': idx } as React.CSSProperties}
              >
                {/* Background Ambient Glow */}
                <div className="feature-box-glow" />

                {/* Top Row: Floating Icon + Watermark Number */}
                <div className="feature-box-top">
                  <div className="feature-icon-circle">
                    <Icon size={22} className="feature-icon-svg" />
                  </div>
                  <span className="feature-watermark-num">0{idx + 1}</span>
                </div>

                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>

                {/* Bottom Thread Accent Line */}
                <div className="feature-accent-line" />
              </div>
            )
          })}
        </div>
      </section>

      {/* Kind Words Testimonials (Sequential Stagger) */}
      <section className="cream-warm-bg section-pad reveal-section">
        <div className="section-heading">
          <p className="eyebrow">Kind Words</p>
          <h2>Loved by Givers &amp; Receivers</h2>
          <p>Real experiences from people who trusted us with their cherished memories.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div
              className="testimonial-card reveal-card group"
              key={t.name}
              style={{ '--stagger-idx': idx } as React.CSSProperties}
            >
              {/* Soft Ambient Card Glow */}
              <div className="testimonial-card-glow" />

              {/* Decorative Giant Quote Watermark */}
              <span className="testimonial-quote-watermark" aria-hidden="true">
                &ldquo;
              </span>

              {/* Top Header: Rating Stars + Ordered Item Badge */}
              <div className="testimonial-header">
                <div className="testimonial-stars-wrap">
                  {[...Array(t.stars)].map((_, sIdx) => (
                    <Star key={sIdx} size={15} className="testimonial-star-icon fill-current" />
                  ))}
                </div>
                <span className="testimonial-ordered-badge">{t.orderedItem}</span>
              </div>

              {/* Hinglish Review Quote */}
              <p className="testimonial-quote-text">{t.quote}</p>

              {/* Author Profile with Image, Name, Location & Verified Status */}
              <div className="testimonial-author-row">
                <div className="testimonial-avatar-wrap">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="testimonial-avatar-img"
                  />
                  <span className="testimonial-avatar-check">
                    <Check size={10} strokeWidth={3} />
                  </span>
                </div>

                <div className="testimonial-author-details">
                  <div className="testimonial-author-name-row">
                    <h4 className="testimonial-author-name">{t.name}</h4>
                  </div>
                  <p className="testimonial-author-city">{t.city}</p>
                  <span className="testimonial-time-badge">{t.time}</span>
                </div>
              </div>

              {/* Bottom Thread Accent Line */}
              <div className="testimonial-accent-line" />
            </div>
          ))}
        </div>
      </section>

      {/* About The Maker / Artist Section (Split Entrance) */}
      <section className="olive-bg section-pad reveal-section" id="about">
        <div className="about-grid">
          <div className="about-img-wrap reveal-split-left relative">
            <img
              src="/resin-10.jpg"
              alt="bn.aura botanical resin art and bridal keepsakes by Bhumi & Nidhi"
              className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[460px] border border-[rgba(229,178,72,0.25)]"
            />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#5E1D28] p-1.5 rounded-full shadow-2xl border-2 border-[#E5B248] z-10">
              <img
                src="/bn-aura-logo.jpg"
                alt="bn.aura logo"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
              />
            </div>
            <div className="about-badge">
              <span>Manpreet Anand • Resin &amp; Mixed Media Artist</span>
              <Heart size={18} className="text-[#E5B248] fill-[#E5B248]" />
            </div>
          </div>

          <div className="about-content reveal-split-right">
            <p className="eyebrow">Meet The Artist</p>
            <h2>
              Crafted slowly, <br />
              <em className="text-[#E9E0D0] italic font-normal">made with pure devotion.</em>
            </h2>
            <p>
              Manpreet Anand is a passionate Resin and Mixed Media Artist (@artista_prreeti) dedicated to creating luxury handcrafted resin masterpieces, statement 37&quot; Evil Eye wall art, preserved bridal flower frames, and bespoke gift hampers.
            </p>
            <p>
              In a world of mass production, every piece in our atelier is crafted unhurriedly with patience, gold foil embellishments, and heartfelt care so your cherished memories endure for a lifetime.
            </p>
            <div className="btn-row pt-2">
              <Link
                className="btn-primary btn-cream"
                href="/custom-orders"
              >
                <Sparkles size={17} /> Request Custom Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Banner (Olive Green with Decorative Thread) */}
      <section className="section-pad cream-bg reveal-section" id="contact">
        <div className="cta-banner reveal-cta">
          <div className="cta-thread-decoration" />
          <div className="cta-banner-content">
            <p className="eyebrow !text-[#E9E0D0]">Let&apos;s Create Something Special</p>
            <h2>Ready to Craft Your Idea?</h2>
            <p>
              Have a favorite couple date, floral preservation idea, or bridal mehandi in mind? Send us a quick inquiry and let&apos;s craft something unforgettable.
            </p>
            <div className="btn-row">
              <Link
                className="btn-primary btn-cream"
                href="/custom-orders"
              >
                <Sparkles size={18} /> Custom Order Form
              </Link>
              <a
                className="btn-primary btn-outline-cream"
                href={defaultWaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Site Footer & Floating WhatsApp Button */}
      <Footer />
    </main>
  )
}
