import React, { useEffect } from 'react';
import {
  X,
  Home,
  Beef,
  Star,
  PartyPopper,
  Coffee,
  Clock,
  MapPin,
  MessageCircle,
  Instagram,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { SITE_CONFIG, getBoisLiveStatus, getWhatsAppUrl } from './config';

export default function SiteNavDrawer({ isOpen, onClose }) {
  const liveStatus = getBoisLiveStatus();
  const whatsappUrl = getWhatsAppUrl();
  const igBurgers =
    SITE_CONFIG.instagram?.accounts?.[0]?.url || 'https://www.instagram.com/boisburgers/';
  const igCantina =
    SITE_CONFIG.instagram?.accounts?.[1]?.url || 'https://www.instagram.com/boiscantina/';

  // Bloquear scroll de la página y cerrar con tecla Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  const navItems = [
    {
      id: 'inicio',
      title: 'Inicio',
      subtitle: 'Presentación & café de especialidad',
      icon: Home,
    },
    {
      id: 'burgers',
      title: 'Hamburguesas',
      subtitle: '12 opciones smasheadas, crispy y veggies',
      icon: Beef,
      badge: '12 Variedades',
    },
    {
      id: 'resenas',
      title: 'Reseñas en Google',
      subtitle: '4.9★ con más de 1.250 opiniones',
      icon: Star,
      badge: '4.9★',
    },
    {
      id: 'cumples',
      title: 'Cumpleaños & Grupos',
      subtitle: 'Deck calefaccionado y promos especiales',
      icon: PartyPopper,
    },
    {
      id: 'sobre-bois',
      title: 'Sobre BOIS',
      subtitle: 'Cantina de amigos, salón y terraza',
      icon: Coffee,
    },
    {
      id: 'horarios-faq',
      title: 'Horarios & Dudas',
      subtitle: 'Turnos de atención, delivery y preguntas',
      icon: Clock,
    },
    {
      id: 'ubicacion',
      title: 'Ubicación & Mapa',
      subtitle: 'Tucumán 2901 (esq. Castelli), Mar del Plata',
      icon: MapPin,
    },
  ];

  const handleNavClick = (targetId) => (e) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (targetId === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  };

  if (!isOpen) return null;

  return (
    <div
      className="site-nav-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación principal"
    >
      <aside
        className="site-nav-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Encabezado del menú */}
        <div className="site-nav-header">
          <div className="site-nav-brand">
            <img
              src={SITE_CONFIG.logos.monogramBlue}
              alt="BS Monograma BOIS"
              className="site-nav-logo-img"
            />
            <div>
              <span className="site-nav-title">Navegación</span>
              <span className="site-nav-sub">BOIS Café & Cantina</span>
            </div>
          </div>
          <button
            type="button"
            className="site-nav-close-btn"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        {/* Estado en vivo */}
        <div className="site-nav-status-banner">
          <span className={`status-dot ${liveStatus.isOpen ? 'is-open' : 'is-closed'}`} />
          <span className="site-nav-status-text">
            <strong>{liveStatus.isOpen ? 'Abierto ahora' : 'Cerrado ahora'}</strong> · {liveStatus.message}
          </span>
        </div>

        {/* Lista de Secciones */}
        <nav className="site-nav-body" aria-label="Secciones de la página">
          <ul className="site-nav-list">
            {navItems.map((item) => {
              const IconComp = item.icon;
              return (
                <li key={item.id} className="site-nav-item">
                  <a
                    href={`#${item.id}`}
                    onClick={handleNavClick(item.id)}
                    className="site-nav-link"
                  >
                    <div className="site-nav-link-icon-wrap">
                      <IconComp size={18} />
                    </div>
                    <div className="site-nav-link-info">
                      <div className="site-nav-link-title-row">
                        <span className="site-nav-link-title">{item.title}</span>
                        {item.badge && (
                          <span className="site-nav-link-badge">{item.badge}</span>
                        )}
                      </div>
                      <span className="site-nav-link-sub">{item.subtitle}</span>
                    </div>
                    <ChevronRight size={16} className="site-nav-chevron" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer del menú con accesos directos */}
        <div className="site-nav-footer">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-nav-wa-btn"
          >
            <MessageCircle size={18} />
            <span>Pedidos &amp; Reservas WhatsApp</span>
          </a>

          <div className="site-nav-socials">
            <span className="site-nav-socials-label">Seguinos en Instagram:</span>
            <div className="site-nav-socials-links">
              <a
                href={igBurgers}
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav-social-pill"
                title="Instagram de Hamburguesas"
              >
                <Instagram size={14} />
                <span>@boisburgers</span>
                <ExternalLink size={11} />
              </a>
              <a
                href={igCantina}
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav-social-pill"
                title="Instagram de Cantina & Café"
              >
                <Instagram size={14} />
                <span>@boiscantina</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          <div className="site-nav-location-hint">
            <MapPin size={13} />
            <span>Tucumán 2901 (esq. Castelli), Mar del Plata</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
