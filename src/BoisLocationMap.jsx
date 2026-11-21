import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { SITE_CONFIG } from './config';

// Coordenadas exactas: Tucumán 2900 (esquina Castelli 2000), Mar del Plata
const BOIS_COORDS = [-38.012106, -57.5489361];

export default function BoisLocationMap() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: BOIS_COORDS,
      zoom: 16,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });

    // CartoDB Positron: escala de grises editorial sin locales gastronómicos de la competencia
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Pin personalizado oficial de BOIS con monograma BS
    const boisPinIcon = L.divIcon({
      className: 'bois-map-marker-wrapper',
      html: `
        <div class="bois-map-pin-container">
          <div class="bois-map-pin-pulse"></div>
          <div class="bois-map-pin-circle">
            <img src="${SITE_CONFIG.logos.monogramCream}" alt="BOIS" class="bois-map-pin-logo" />
          </div>
          <div class="bois-map-pin-tip"></div>
          <div class="bois-map-pin-label">BOIS · Tucumán esq. Castelli</div>
        </div>
      `,
      iconSize: [54, 64],
      iconAnchor: [27, 56],
      popupAnchor: [0, -56],
    });

    const marker = L.marker(BOIS_COORDS, { icon: boisPinIcon }).addTo(map);

    marker.bindPopup(
      `
        <div class="bois-map-popup">
          <strong>BOIS Café &amp; Cantina</strong>
          <span>Tucumán 2900 (esq. Castelli 2000)<br/>Mar del Plata</span>
          <a href="${SITE_CONFIG.contact.googleMapsUrl}" target="_blank" rel="noopener noreferrer">
            Cómo llegar en Google Maps →
          </a>
        </div>
      `,
      { closeButton: false, offset: [0, -6] }
    );

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="fullwidth-map-leaflet"
      role="region"
      aria-label="Mapa interactivo de ubicación de BOIS en Tucumán 2900 esquina Castelli 2000, Mar del Plata"
    />
  );
}
