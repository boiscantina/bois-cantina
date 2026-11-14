import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  Instagram,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Utensils,
  Star,
  Navigation,
  Flame,
  Tv,
  Truck,
  Wine,
  Coffee,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Edit3,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, getBoisLiveStatus } from './config';
import BurgerMenuDrawer from './BurgerMenuDrawer';

export default function App() {
  const mainWhatsAppUrl = getWhatsAppUrl();
  const [liveStatus, setLiveStatus] = useState(() => getBoisLiveStatus());
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [expandedReviewIds, setExpandedReviewIds] = useState({});
  const [isBurgerDrawerOpen, setIsBurgerDrawerOpen] = useState(false);
  const [burgerCart, setBurgerCart] = useState([]);
  const [drawerFocusBurgerId, setDrawerFocusBurgerId] = useState(null);
  const [helpfulCounts, setHelpfulCounts] = useState(() =>
    SITE_CONFIG.reviews.reduce((acc, r) => ({ ...acc, [r.id]: r.helpfulCount || 4 }), {})
  );
  const [userLikedReviews, setUserLikedReviews] = useState({});
  const reviewsTrackRef = useRef(null);
  const burgerCarouselRef = useRef(null);

  const scrollBurgerCarousel = (direction) => {
    if (burgerCarouselRef.current) {
      const scrollAmount = direction === 'left' ? -290 : 290;
      burgerCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveStatus(getBoisLiveStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const allReviews = SITE_CONFIG.reviews;

  // Sincronizar el dot activo con el scroll del usuario (touch o botones)
  const handleReviewsScroll = () => {
    const track = reviewsTrackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll('.review-card-modern');
    if (!cards.length) return;
    const trackCenter = track.scrollLeft + track.offsetWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(trackCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveReviewIdx(closestIdx);
  };

  const scrollToReview = (idx) => {
    const track = reviewsTrackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll('.review-card-modern');
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveReviewIdx(idx);
    }
  };

  const slideReviews = (direction) => {
    const nextIdx = Math.max(
      0,
      Math.min(allReviews.length - 1, activeReviewIdx + direction)
    );
    scrollToReview(nextIdx);
  };

  const toggleReviewText = (id) => {
    setExpandedReviewIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleHelpful = (reviewId) => {
    setUserLikedReviews((prev) => {
      const alreadyLiked = !!prev[reviewId];
      const nextLiked = !alreadyLiked;
      setHelpfulCounts((cPrev) => ({
        ...cPrev,
        [reviewId]: (cPrev[reviewId] || 0) + (nextLiked ? 1 : -1),
      }));
      return { ...prev, [reviewId]: nextLiked };
    });
  };

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      {/* Top Minimal Header con Logo Oficial BS, Estado en Vivo y Conversión */}
      <header className="top-bar">
        <div className="container top-bar-inner">
          <a href="#" className="brand-logo" aria-label={SITE_CONFIG.brandName}>
            <img
              src={SITE_CONFIG.logos.monogramBlue}
              alt="BS Monograma BOIS"
              className="navbar-logo-img"
            />
            <div className="brand-logo-text">
              <span className="brand-name-main">{SITE_CONFIG.brandName}</span>
              <span className="brand-sub-text hide-mobile">
                {SITE_CONFIG.brandSub}
              </span>
            </div>
          </a>

          <div className="top-bar-actions">
            {/* Insignia de Reputación 4.9★ siempre visible mientras deslizás el Header */}
            <a
              href="#resenas"
              onClick={scrollToSection('resenas')}
              className="header-rating-pill"
              title={`Calificación ${SITE_CONFIG.googleRating.score}★ basada en +${SITE_CONFIG.googleRating.reviewsCount} reseñas en Google Maps`}
            >
              <div className="stars-inline hide-mobile" aria-label="5 estrellas">
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
              </div>
              <Star size={13} fill="#F59E0B" color="#F59E0B" className="show-mobile-only" />
              <strong>{SITE_CONFIG.googleRating.score}</strong>
              <span className="hide-mobile">({SITE_CONFIG.googleRating.reviewsCount} reseñas)</span>
              <span className="show-mobile-only">({SITE_CONFIG.googleRating.reviewsCount})</span>
            </a>

            <a
              href={SITE_CONFIG.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-header-secondary hide-mobile"
              title="Abrir Google Maps con indicaciones a Tucumán 2901 (esq. Castelli), Mar del Plata"
            >
              <Navigation size={15} />
              <span>Cómo llegar</span>
            </a>

            <a
              href={mainWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>{SITE_CONFIG.contact.ctaHeaderText}</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION CON FOTO DE FONDO, TARJETA CENTRADA Y ESTADO EN VIVO */}
        <section
          className="hero-section"
          aria-label="Presentación principal de BOIS"
          style={{
            '--hero-bg': `url('${SITE_CONFIG.heroBackgroundImage}')`,
          }}
        >
          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-direct">
              <img
                src={SITE_CONFIG.logos.fullCream}
                alt="BOIS café & cantina Mar del Plata"
                className="hero-logo-full"
              />

              <h1 className="hero-title">
                <span className="hero-title-pretitle">
                  Cafetería, Cantina &amp; Hamburguesería
                </span>
                <span className="hero-title-main">
                  Las mejores <em>burgers</em> de Mar del Plata
                </span>
              </h1>

              {/* Microtexto de valor para potenciar la conversión antes del CTA principal */}
              <p className="hero-value-microcopy">
                <CheckCircle2 size={15} />
                <span>Pedí online o reservá en segundos · Atención directa</span>
              </p>

              {/* CTA Principal (Foco absoluto) */}
              <div className="hero-actions">
                <a
                  href={mainWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-hero"
                >
                  <MessageCircle size={22} className="wa-icon" />
                  <span>{SITE_CONFIG.contact.ctaPrimaryText}</span>
                  <ArrowUpRight size={18} className="arrow-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Al pie del Hero (cerca del margen inferior): Estado dinámico en tiempo real + Dirección con GPS directo */}
          <div className="container hero-bottom-bar">
            <a
              href="#horarios-faq"
              onClick={scrollToSection('horarios-faq')}
              className={`hero-open-pill ${liveStatus.isOpen ? 'is-open' : 'is-closed'}`}
              title="Estado en tiempo real según el horario actual en Mar del Plata. Tocá para ver todos los horarios."
            >
              <span className="status-dot" />
              <span>
                <strong>{liveStatus.label}</strong> · {liveStatus.detail}
              </span>
            </a>

            <a
              href={SITE_CONFIG.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-badge"
              title="Tocá para abrir indicaciones GPS en Google Maps o Waze"
            >
              <MapPin size={14} />
              <span>{SITE_CONFIG.addressShort}</span>
              <ArrowUpRight size={13} className="gps-arrow" />
            </a>
          </div>
        </section>

        {/* 2. SECCIÓN BURGERS: LAYOUT SPLIT CON TEXTO A LA IZQUIERDA Y CARRUSEL A LA DERECHA */}
        <section id="burgers" className="burgers-section" aria-label="Hamburguesas Tope de Gama">
          <div className="container">
            <div className="burgers-split-layout">
              {/* COLUMNA IZQUIERDA: CONTENIDO Y CTA PRINCIPAL */}
              <div className="burgers-split-content">
                <span className="section-eyebrow">
                  <Flame size={14} /> {SITE_CONFIG.burgersSection.eyebrow}
                </span>
                <h2 className="section-title burgers-split-title">{SITE_CONFIG.burgersSection.title}</h2>
                <p className="section-description burgers-split-lead">
                  {SITE_CONFIG.burgersSection.description}
                </p>

                <div className="burger-specs-vertical">
                  {SITE_CONFIG.burgersSection.specs.map((spec, idx) => (
                    <div key={idx} className="burger-spec-row">
                      <span className="burger-spec-emoji">{spec.emoji}</span>
                      <div className="burger-spec-text-group">
                        <strong className="burger-spec-label">{spec.label}: </strong>
                        <span className="burger-spec-desc">{spec.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Botón Ver menú y pedir ahora (Abre el Menú Lateral de Burgers) */}
                <div className="burgers-split-cta-wrap">
                  <button
                    type="button"
                    onClick={() => {
                      setDrawerFocusBurgerId(null);
                      setIsBurgerDrawerOpen(true);
                    }}
                    className="btn-burgers-main-cta"
                    aria-label="Abrir menú de burgers y pedir online"
                  >
                    <Utensils size={20} className="cta-icon" />
                    <span>{SITE_CONFIG.burgersSection.ctaText}</span>
                    <ArrowUpRight size={19} className="arrow-icon" />
                  </button>
                </div>
              </div>

              {/* COLUMNA DERECHA: CARRUSEL DE TODAS LAS BURGERS */}
              <div className="burgers-carousel-wrap">
                <div className="burgers-carousel-header">
                  <span className="burgers-carousel-tag">
                    <Flame size={13} />
                    <span>Nuestra Carta ({SITE_CONFIG.allBurgers.length} Variedades)</span>
                  </span>
                  <div className="burgers-carousel-nav">
                    <button
                      type="button"
                      onClick={() => scrollBurgerCarousel('left')}
                      className="btn-carousel-arrow"
                      aria-label="Burger anterior"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollBurgerCarousel('right')}
                      className="btn-carousel-arrow"
                      aria-label="Burger siguiente"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Track horizontal scrolleable de las 12 burgers con fotos reales */}
                <div className="burgers-carousel-track-container" ref={burgerCarouselRef}>
                  <div className="burgers-carousel-track">
                    {SITE_CONFIG.allBurgers.map((burger) => {
                      const basePrice = Object.values(burger.prices)[0];
                      return (
                        <article
                          key={burger.id}
                          className="burger-carousel-card"
                          onClick={() => {
                            setDrawerFocusBurgerId(burger.id);
                            setIsBurgerDrawerOpen(true);
                          }}
                        >
                          <div className="carousel-card-img-wrap">
                            <img
                              src={burger.image}
                              alt={burger.name}
                              loading="lazy"
                              className="carousel-card-img"
                            />
                            {burger.badge && (
                              <span className="carousel-card-badge">{burger.badge}</span>
                            )}
                          </div>
                          <div className="carousel-card-body">
                            <div className="carousel-card-head">
                              <h3 className="carousel-card-title">{burger.name}</h3>
                              <span className="carousel-card-price">
                                <span className="price-label">Desde</span>
                                <span className="price-value">${basePrice.toLocaleString('es-AR')}</span>
                              </span>
                            </div>
                            <p className="carousel-card-desc">
                              {burger.ingredientsSuffix}
                            </p>
                            <button
                              type="button"
                              className="btn-carousel-card-action"
                            >
                              <span>Pedir / Ver tamaños</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>

                <div className="burgers-carousel-footer">
                  <span className="carousel-footer-hint">
                    👈 Deslizá para ver las 12 opciones · Todas salen con fritas 👉
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PRUEBA SOCIAL ELEVADA: GOOGLE MAPS REVIEWS (4.9★ · +271 OPINIONES) */}
        <section id="resenas" className="reviews-section" aria-label="Reseñas reales en Google Maps">
          <div className="container">
            {/* Header Principal con Insignia Oficial de Google y Calificación 4.9 */}
            <div className="reviews-header-layout">
              <div className="reviews-header-main">
                <div className="reviews-eyebrow-row">
                  <span className="google-badge-pill">
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="google-icon-svg">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span>Google Reviews Verificadas</span>
                  </span>
                  <span className="google-verified-live-tag">
                    <span className="live-dot" /> 100% Auténticas
                  </span>
                </div>

                <h2 className="reviews-section-title">
                  Muchas gracias a quienes nos eligen
                </h2>
                <p className="reviews-section-subtitle">
                  Opiniones espontáneas de comensales y Local Guides que pasaron por la esquina de Castelli y Tucumán.
                </p>
              </div>

              {/* Tarjeta de Calificación 4.9★ con CTAs directos */}
              <div className="reviews-score-hero-card">
                <div className="reviews-score-top">
                  <div className="reviews-score-number-wrap">
                    <span className="reviews-big-score">{SITE_CONFIG.googleRating.score}</span>
                    <div className="reviews-stars-vertical">
                      <div className="stars-row-google" aria-label="5 de 5 estrellas">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={17} fill="#FBBC04" color="#FBBC04" />
                        ))}
                      </div>
                      <span className="reviews-count-caption">
                        <strong>+{SITE_CONFIG.googleRating.reviewsCount} opiniones</strong> en Google Maps
                      </span>
                    </div>
                  </div>
                </div>

                <div className="reviews-score-actions">
                  <a
                    href={SITE_CONFIG.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-google-action btn-google-view"
                    title="Ver perfil oficial de BOIS en Google Maps"
                  >
                    <span>Ver en Maps</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={SITE_CONFIG.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-google-action btn-google-write"
                    title="Escribir una reseña sobre tu experiencia en BOIS"
                  >
                    <Edit3 size={13} />
                    <span>Dejar reseña</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Barra de Controles: Toggle Carrusel/Cuadrícula + Contador + Flechas */}
            <div className="reviews-view-controls">
              <div className="reviews-mode-toggle" role="tablist" aria-label="Modo de visualización">
                <button
                  type="button"
                  role="tab"
                  aria-selected={!showAllReviews}
                  className={`btn-mode-tab ${!showAllReviews ? 'is-active' : ''}`}
                  onClick={() => setShowAllReviews(false)}
                >
                  Destacadas
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={showAllReviews}
                  className={`btn-mode-tab ${showAllReviews ? 'is-active' : ''}`}
                  onClick={() => setShowAllReviews(true)}
                >
                  Ver en Cuadrícula
                </button>
              </div>

              {!showAllReviews && (
                <div className="reviews-nav-cluster">
                  <span className="reviews-counter-pill">
                    <strong>{String(activeReviewIdx + 1).padStart(2, '0')}</strong> / {String(allReviews.length).padStart(2, '0')}
                  </span>

                  <div className="reviews-slider-arrows" aria-label="Navegar reseñas">
                    <button
                      type="button"
                      className="btn-review-nav"
                      onClick={() => slideReviews(-1)}
                      disabled={activeReviewIdx === 0}
                      aria-label="Reseña anterior"
                    >
                      <ChevronLeft size={19} />
                    </button>
                    <button
                      type="button"
                      className="btn-review-nav"
                      onClick={() => slideReviews(1)}
                      disabled={activeReviewIdx === allReviews.length - 1}
                      aria-label="Siguiente reseña"
                    >
                      <ChevronRight size={19} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contenedor: Carrusel deslizable o Cuadrícula */}
            <div
              ref={reviewsTrackRef}
              onScroll={!showAllReviews ? handleReviewsScroll : undefined}
              className={showAllReviews ? 'reviews-grid-view' : 'reviews-carousel-view'}
            >
              {allReviews.map((rev, idx) => {
                const isLong = rev.text.length > 200;
                const isExpanded = showAllReviews || !!expandedReviewIds[rev.id];
                const isActive = !showAllReviews && idx === activeReviewIdx;
                const isLiked = !!userLikedReviews[rev.id];
                const count = helpfulCounts[rev.id] || rev.helpfulCount || 4;

                return (
                  <article
                    key={rev.id}
                    className={`review-card-modern ${isActive ? 'is-focused' : ''}`}
                  >
                    {/* Header de la Tarjeta (Foto Real, Datos de Local Guide, Menú ⋮ y Google G) */}
                    <div className="review-card-head">
                      <div className="review-author-block">
                        <div className="review-avatar-frame">
                          {rev.avatarImg ? (
                            <img
                              src={rev.avatarImg}
                              alt={`Foto de perfil de ${rev.author} en Google Maps`}
                              className="review-avatar-img"
                              loading="lazy"
                            />
                          ) : (
                            <div
                              className="review-avatar-fallback"
                              style={{
                                backgroundColor: rev.avatarBg || '#1A4861',
                                color: rev.avatarColor || '#FCFBE4',
                              }}
                            >
                              {rev.initials}
                            </div>
                          )}

                          {rev.isLocalGuide && (
                            <span className="local-guide-pin-badge" title="Local Guide de Google Maps">
                              ★
                            </span>
                          )}
                        </div>

                        <div className="review-meta-text">
                          <strong className="review-author-title">{rev.author}</strong>
                          <span className="review-author-subtitle">
                            {rev.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="review-head-icons">
                        <div className="review-google-badge" title="Reseña verificada en Google Maps">
                          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                        </div>
                        <span className="review-dots-action" aria-hidden="true">⋮</span>
                      </div>
                    </div>

                    {/* Fila de Calificación: 5 Estrellas Google + Fecha Relativa */}
                    <div className="review-rating-bar">
                      <div className="review-stars-google" aria-label="5 de 5 estrellas">
                        {Array.from({ length: rev.rating }).map((_, sIdx) => (
                          <Star key={sIdx} size={15} fill="#FBBC04" color="#FBBC04" />
                        ))}
                      </div>
                      <span className="review-relative-date">{rev.date}</span>
                    </div>

                    {/* Píldora de Frase Destacada */}
                    {rev.tag && (
                      <div className="review-tag-wrapper">
                        <span className="review-quote-tag">{rev.tag}</span>
                      </div>
                    )}

                    {/* Cuerpo de la reseña con formato limpio y legible */}
                    <div className="review-text-container">
                      {rev.paragraphs && rev.paragraphs.length > 1 ? (
                        <div className={`review-quote-paragraphs ${!isExpanded && isLong ? 'is-clamped' : ''}`}>
                          {rev.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className="review-p-line">{p}</p>
                          ))}
                        </div>
                      ) : (
                        <p className={`review-quote-body ${!isExpanded && isLong ? 'is-clamped' : ''}`}>
                          “{rev.text}”
                        </p>
                      )}

                      {isLong && !showAllReviews && (
                        <button
                          type="button"
                          className="btn-read-more-clean"
                          onClick={() => toggleReviewText(rev.id)}
                        >
                          {isExpanded ? 'Mostrar menos' : 'Más'}
                        </button>
                      )}
                    </div>

                    {/* Footer de la tarjeta: Verificado + Botón Interactivo de "Útil" */}
                    <div className="review-card-verified-footer">
                      <span className="verified-badge-pill">
                        <CheckCircle2 size={13} />
                        <span>Publicado en Google</span>
                      </span>

                      <button
                        type="button"
                        className={`btn-helpful-vote ${isLiked ? 'is-liked' : ''}`}
                        onClick={() => toggleHelpful(rev.id)}
                        title="Votar reseña como útil"
                        aria-pressed={isLiked}
                      >
                        <ThumbsUp size={12} className="vote-thumb-icon" />
                        <span>Útil · {count}</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Paginación con Dots Interactivos para el modo Carrusel */}
            {!showAllReviews && (
              <div className="reviews-carousel-dots" aria-label="Seleccionar reseña">
                {allReviews.map((rev, idx) => (
                  <button
                    key={rev.id}
                    type="button"
                    className={`carousel-dot-btn ${idx === activeReviewIdx ? 'is-active' : ''}`}
                    onClick={() => scrollToReview(idx)}
                    aria-label={`Ir a la reseña de ${rev.author}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 4. BANNER DE CUMPLEAÑOS, GRUPOS Y PEDIDOS DIRECTOS */}
        <section className="quick-order-section" aria-label="Reservas de cumpleaños, grupos y pedidos directos">
          <div className="container">
            <div className="quick-order-banner">
              <div className="quick-order-text">
                <img
                  src={SITE_CONFIG.logos.monogramCream}
                  alt="BS"
                  className="banner-mini-logo"
                />
                <div>
                  <strong>{SITE_CONFIG.reservationTip.title}</strong>
                  <span>{SITE_CONFIG.reservationTip.subtitle}</span>
                </div>
              </div>
              <div className="quick-order-buttons">
                <a
                  href={mainWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-inline"
                >
                  <MessageCircle size={18} />
                  <span>Pedidos &amp; reservas</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. EXPERIENCIA Y AMBIENTACIÓN: SOBRE BOIS (SALÓN & DECK EXTERIOR, MÚSICA Y CUMPLEAÑOS) */}
        <section className="about-section" aria-label="Sobre BOIS Café y Cantina">
          <div className="container">
            <div className="about-card">
              <div className="about-text-col">
                <div className="about-brand-badge">
                  <img
                    src={SITE_CONFIG.logos.fullCream}
                    alt="BOIS café & cantina"
                    className="about-logo-cream"
                  />
                  <span className="section-eyebrow about-eyebrow">
                    <MapPin size={14} /> {SITE_CONFIG.about.eyebrow}
                  </span>
                </div>

                <h2 className="about-title">{SITE_CONFIG.about.title}</h2>
                {SITE_CONFIG.about.paragraphs.map((p, idx) => (
                  <p key={idx} className="about-paragraph">
                    {p}
                  </p>
                ))}
              </div>

              <div className="about-features-col">
                {SITE_CONFIG.about.features.map((feat, idx) => (
                  <div key={idx} className="about-feature-item">
                    <div className="about-feature-icon">
                      {idx === 0 && <Sparkles size={20} />}
                      {idx === 1 && <Coffee size={20} />}
                      {idx === 2 && <Wine size={20} />}
                      {idx === 3 && <MessageCircle size={20} />}
                    </div>
                    <div>
                      <h3>{feat.title}</h3>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. CIERRE LOGÍSTICO Y DUDAS: HORARIOS EN VIVO & PREGUNTAS FRECUENTES DESPLEGABLES */}
        <section id="horarios-faq" className="schedule-faq-section" aria-label="Horarios de atención y preguntas frecuentes">
          <div className="container">
            <div className="schedule-faq-grid">
              {/* Tarjeta de Horarios del Local y Delivery con indicador en vivo */}
              <div className="schedule-box">
                <div className="schedule-box-header">
                  <span className="section-eyebrow">
                    <Clock size={14} /> Nuestros Horarios
                  </span>
                  <div className={`live-status-pill-lg ${liveStatus.isOpen ? 'is-open' : 'is-closed'}`}>
                    <span className="status-dot" />
                    <strong>{liveStatus.label}</strong>
                  </div>
                </div>

                <h2 className="schedule-box-title">Salón, Deck Exterior &amp; Delivery</h2>
                <p className="schedule-box-detail">{liveStatus.detail}</p>

                <div className="schedule-group">
                  <h3>
                    <Utensils size={16} /> Horarios de Salón &amp; Take Away
                  </h3>
                  <ul className="schedule-list">
                    {SITE_CONFIG.schedule.salon.map((row, idx) => (
                      <li key={idx}>
                        <span>{row.days}</span>
                        <strong>{row.hours}</strong>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="schedule-group">
                  <div className="schedule-group-head">
                    <h3>
                      <Truck size={16} /> Horarios de Delivery
                    </h3>
                    <span className={`delivery-mini-badge ${liveStatus.isDeliveryOpen ? 'is-open' : ''}`}>
                      {liveStatus.deliveryLabel}
                    </span>
                  </div>
                  <ul className="schedule-list">
                    {SITE_CONFIG.schedule.delivery.map((row, idx) => (
                      <li key={idx}>
                        <span>{row.days}</span>
                        <strong>{row.hours}</strong>
                      </li>
                    ))}
                  </ul>
                </div>

                <address className="schedule-address-box">
                  <MapPin size={16} />
                  <div>
                    <strong>{SITE_CONFIG.addressFull}</strong>
                    <span>
                      WhatsApp exclusivo de pedidos y reservas:{' '}
                      <a
                        href={mainWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="schedule-wa-link"
                      >
                        {SITE_CONFIG.contact.whatsappDisplay}
                      </a>
                    </span>
                  </div>
                </address>
              </div>

              {/* Preguntas Frecuentes Desplegables (Acordeón semántico <details> sincronizado con Schema FAQPage) */}
              <div className="faq-box">
                <span className="section-eyebrow">
                  <HelpCircle size={14} /> Preguntas Frecuentes
                </span>
                <h2 className="schedule-box-title">Dudas rápidas</h2>
                <p className="schedule-box-detail">Tocá cualquier pregunta para ver la respuesta</p>
                <div className="faq-list">
                  {SITE_CONFIG.faqs.map((item, idx) => (
                    <details key={idx} className="faq-item">
                      <summary className="faq-question">
                        <span>{item.q}</span>
                        <span className="faq-icon-wrap" aria-hidden="true">
                          <ChevronDown size={18} />
                        </span>
                      </summary>
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. MAPA GOOGLE FULL-WIDTH: TUCUMÁN ESQ. CASTELLI */}
        <section id="ubicacion" className="fullwidth-map-section" aria-label="Ubicación de BOIS en Google Maps">
          <div className="container">
            <div className="section-header map-section-header">
              <span className="section-eyebrow">
                <MapPin size={14} /> Tucumán esq. Castelli
              </span>
              <h2 className="section-title">{SITE_CONFIG.introSection.title}</h2>
              <p className="section-description">{SITE_CONFIG.introSection.lead}</p>
            </div>
          </div>

          {/* Mapa 100% full-width sin formato tarjeta */}
          <div className="fullwidth-map-container">
            <iframe
              title="Ubicación de BOIS Cantina en Google Maps"
              src={SITE_CONFIG.introSection.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="fullwidth-map-iframe"
            />
            <div className="fullwidth-map-bar">
              <div className="container fullwidth-map-bar-inner">
                <div className="fullwidth-map-info">
                  <span className="map-badge-pin">
                    <MapPin size={16} />
                    <strong>{SITE_CONFIG.introSection.mapAddressLabel}</strong>
                  </span>
                  <span className="map-badge-hint">{SITE_CONFIG.introSection.mapZoneLabel}</span>
                </div>
                <a
                  href={SITE_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-open-maps"
                >
                  <span>Cómo llegar en Google Maps</span>
                  <Navigation size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER CON FONDO AZUL MARCA (#1A4861), BARRA DE INSTAGRAM, DIRECCIÓN Y LINKS */}
      <footer className="site-footer">
        <div className="container footer-inner">
          {/* Frase y accesos de Seguinos en Instagram */}
          <div className="footer-instagram-bar">
            <div className="footer-instagram-lead">
              <Instagram size={24} className="footer-ig-icon" />
              <div>
                <strong className="footer-ig-title">Seguinos en Instagram</strong>
                <p className="footer-ig-subtitle">
                  {SITE_CONFIG.instagram.sectionSubtitle}
                </p>
              </div>
            </div>
            <div className="footer-instagram-buttons">
              {SITE_CONFIG.instagram.accounts.map((acc) => (
                <a
                  key={acc.handle}
                  href={acc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-footer-ig"
                >
                  <Instagram size={16} />
                  <span>{acc.label}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-bottom-row">
            <div className="footer-brand">
              <img
                src={SITE_CONFIG.logos.fullCream}
                alt="BOIS café & cantina"
                className="footer-logo-img"
              />
              <address className="footer-brand-info">
                <strong>
                  {SITE_CONFIG.brandName} · {SITE_CONFIG.brandSub} ({SITE_CONFIG.city})
                </strong>
                <span>
                  {SITE_CONFIG.addressFull} · Calificación {SITE_CONFIG.googleRating.score}★ (+{SITE_CONFIG.googleRating.reviewsCount} reseñas)
                </span>
              </address>
            </div>
            <div className="footer-links">
              <a href="#horarios-faq" onClick={scrollToSection('horarios-faq')}>Horarios &amp; Dudas</a>
              <a href={SITE_CONFIG.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </a>
              <a href={mainWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp ({SITE_CONFIG.contact.whatsappDisplay})
              </a>
              {SITE_CONFIG.instagram.accounts.map((acc) => (
                <a
                  key={acc.handle}
                  href={acc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {acc.handle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE A LA IZQUIERDA (CÓMO LLEGAR EN MAPS) */}
      <div className="floating-cta-bar">
        <a
          href={SITE_CONFIG.contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-maps-btn"
          aria-label="Cómo llegar a Tucumán 2901, Mar del Plata en Google Maps"
        >
          <MapPin size={19} />
          <span>Cómo llegar</span>
        </a>
      </div>

      {/* PASTILLA FLOTANTE DEL PEDIDO (APARECE CUANDO HAY BURGERS AGREGADAS Y EL MENÚ ESTÁ CERRADO) */}
      {burgerCart.length > 0 && !isBurgerDrawerOpen && (
        <button
          type="button"
          className="floating-cart-pill"
          onClick={() => setIsBurgerDrawerOpen(true)}
          aria-label="Ver mi pedido acumulado"
        >
          <div className="floating-cart-badge">
            <ShoppingBag size={18} />
            <span>{burgerCart.reduce((s, i) => s + i.quantity, 0)}</span>
          </div>
          <span className="floating-cart-text">Ver mi pedido</span>
          <span className="floating-cart-price">
            ${burgerCart.reduce((s, i) => s + i.price * i.quantity, 0).toLocaleString('es-AR')}
          </span>
        </button>
      )}

      {/* MENÚ LATERAL DE BURGERS (DRAWER OFF-CANVAS DESDE LA DERECHA) */}
      <BurgerMenuDrawer
        isOpen={isBurgerDrawerOpen}
        onClose={() => setIsBurgerDrawerOpen(false)}
        cart={burgerCart}
        setCart={setBurgerCart}
        selectedBurgerIdToFocus={drawerFocusBurgerId}
      />
    </div>
  );
}
