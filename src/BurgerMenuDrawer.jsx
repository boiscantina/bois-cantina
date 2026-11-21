import React, { useState, useEffect } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Flame,
  Check,
  ChevronDown,
  ChevronUp,
  Truck,
  Store,
  MapPin,
  Banknote,
  Landmark,
} from 'lucide-react';
import { SITE_CONFIG } from './config';

// Helper para armar la descripción dinámica según la cantidad de medallones seleccionada
function formatBurgerIngredients(burger, size = 'doble') {
  if (burger.id === 'rookie') {
    return `1 medallón de pollo crispy crocante, ${burger.ingredientsSuffix}`;
  }

  const numWord =
    size === 'triple'
      ? '3 medallones de carne fresca'
      : size === 'doble'
      ? '2 medallones de carne fresca'
      : '1 medallón de carne fresca';

  if (burger.id === 'onion-bs') {
    const verb = size === 'simple' ? 'smasheado' : 'smasheados';
    return `${numWord} ${verb} con cebolla a la plancha (estilo Oklahoma) y queso cheddar fundido.`;
  }

  return `${numWord}, ${burger.ingredientsSuffix}`;
}

export default function BurgerMenuDrawer({
  isOpen,
  onClose,
  cart,
  setCart,
  selectedBurgerIdToFocus = null,
}) {
  // Estado para el tamaño seleccionado por cada burger en el catálogo
  const [selectedSizes, setSelectedSizes] = useState({});
  // Modalidad: 'delivery' o 'pickup' (pasar a retirar)
  const [orderType, setOrderType] = useState('delivery');
  // Dirección para delivery
  const [deliveryAddress, setDeliveryAddress] = useState('');
  // Forma de pago: 'efectivo' o 'transferencia'
  const [paymentMethod, setPaymentMethod] = useState('efectivo');
  // Vista: 'catalog' o 'cart' (o mostrar carrito abajo)
  const [showCartDetails, setShowCartDetails] = useState(false);
  // Nota general (ej. sin TACC, etc.)
  const [generalNote, setGeneralNote] = useState('');
  // Feedback visual momentáneo al agregar
  const [addedAnimationId, setAddedAnimationId] = useState(null);

  // Inicializar tamaños por defecto
  useEffect(() => {
    const initialSizes = {};
    SITE_CONFIG.allBurgers.forEach((b) => {
      initialSizes[b.id] = b.defaultSize || Object.keys(b.prices)[0];
    });
    setSelectedSizes(initialSizes);
  }, []);

  // Bloquear scroll de la página cuando el drawer está abierto
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

  // Si abrieron el drawer para un burger específico, hacer scroll hasta él
  useEffect(() => {
    if (isOpen && selectedBurgerIdToFocus) {
      setTimeout(() => {
        const el = document.getElementById(`drawer-burger-${selectedBurgerIdToFocus}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  }, [isOpen, selectedBurgerIdToFocus]);

  const handleSizeChange = (burgerId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [burgerId]: size,
    }));
  };

  const addToCart = (burger) => {
    const size = selectedSizes[burger.id] || burger.defaultSize || Object.keys(burger.prices)[0];
    const price = burger.prices[size];
    const itemKey = `${burger.id}_${size}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.key === itemKey);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            key: itemKey,
            burgerId: burger.id,
            name: burger.name,
            size,
            price,
            quantity: 1,
            image: burger.image,
            note: '',
          },
        ];
      }
    });

    // Feedback visual
    setAddedAnimationId(burger.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  const updateQuantity = (key, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.key === key) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const updateItemNote = (key, note) => {
    setCart((prev) =>
      prev.map((item) => (item.key === key ? { ...item, note } : item))
    );
  };

  const removeItem = (key) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  // Totales
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Link formateado para WhatsApp con modalidad y dirección
  const buildWhatsAppUrl = () => {
    if (cart.length === 0) return '#';
    let msg = '¡Hola BOIS! Quiero hacer este pedido desde la web:\n\n';

    cart.forEach((item) => {
      const sizeLabel = item.size.charAt(0).toUpperCase() + item.size.slice(1);
      msg += `🍔 ${item.quantity}x ${item.name} (${sizeLabel}) — $${(item.price * item.quantity).toLocaleString('es-AR')}\n`;
      if (item.note && item.note.trim()) {
        msg += `   ↳ Aclaración: ${item.note.trim()}\n`;
      }
    });

    msg += `\n💰 *Total: $${totalPrice.toLocaleString('es-AR')}*\n`;
    msg += `🍟 _(Todas las burgers incluyen papas fritas)_\n\n`;

    if (orderType === 'delivery') {
      msg += `🛵 *Modalidad: DELIVERY*\n`;
      if (deliveryAddress && deliveryAddress.trim()) {
        msg += `📍 *Dirección de entrega*: ${deliveryAddress.trim()}\n`;
      } else {
        msg += `📍 *Dirección de entrega*: (Te paso la dirección a continuación)\n`;
      }
    } else {
      msg += `🛍️ *Modalidad: PASAR A RETIRAR (Take Away)*\n`;
      msg += `📍 *Retiro por el local*: Tucumán 2900 (esquina Castelli 2000)\n`;
    }

    msg +=
      paymentMethod === 'efectivo'
        ? `💵 *Forma de pago*: Efectivo\n`
        : `📲 *Forma de pago*: Transferencia\n`;

    if (generalNote && generalNote.trim()) {
      msg += `📝 *Nota adicional*: ${generalNote.trim()}\n`;
    }

    msg += `\n¿Me confirman demora? ¡Muchas gracias!`;

    const phone = SITE_CONFIG.contact.whatsappPhone || '5492234251674';
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="drawer-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
        aria-label="Menú y Carrito de Smash Burgers"
      >
        {/* CABECERA DEL MENÚ LATERAL */}
        <header className="drawer-header">
          <div className="drawer-header-info">
            <span className="drawer-badge">
              <Flame size={13} />
              <span>Carta Oficial · Todas con fritas</span>
            </span>
            <h2 className="drawer-title">Armá tu pedido</h2>
            <p className="drawer-subtitle">
              Elegí el tamaño de cada burger y envialo directo a WhatsApp
            </p>
          </div>
          <button
            type="button"
            className="btn-drawer-close"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </header>

        {/* CONTENIDO SCROLLEABLE: LISTA DE LAS 12 BURGERS */}
        <div className="drawer-body">
          {/* BANNER INFORMATIVO */}
          <div className="drawer-info-pill">
            <span className="drawer-info-dot" />
            <span>
              Disponible <strong>medallón veggie</strong> y <strong>pan sin TACC</strong>. Aclaralo en tu pedido.
            </span>
          </div>

          <div className="drawer-burgers-list">
            {SITE_CONFIG.allBurgers.map((burger) => {
              const currentSize =
                selectedSizes[burger.id] ||
                burger.defaultSize ||
                Object.keys(burger.prices)[0];
              const currentPrice = burger.prices[currentSize] || Object.values(burger.prices)[0];
              const isAdded = addedAnimationId === burger.id;

              return (
                <article
                  key={burger.id}
                  id={`drawer-burger-${burger.id}`}
                  className="drawer-burger-card"
                >
                  <div className="drawer-burger-img-box">
                    <img
                      src={burger.image}
                      alt={burger.name}
                      loading="lazy"
                      className="drawer-burger-img"
                    />
                  </div>

                  <div className="drawer-burger-details">
                    <div className="drawer-burger-top">
                      <h3 className="drawer-burger-name">{burger.name}</h3>
                      <span className="drawer-burger-price">
                        ${currentPrice.toLocaleString('es-AR')}
                      </span>
                    </div>

                    <p className="drawer-burger-desc">
                      {formatBurgerIngredients(burger, currentSize)}
                    </p>

                    {/* SELECTOR DE TAMAÑO (SIMPLE / DOBLE / TRIPLE) */}
                    <div className="drawer-size-selector">
                      <span className="drawer-size-label">Tamaño:</span>
                      <div className="drawer-size-pills">
                        {Object.entries(burger.prices).map(([sizeKey, sizePrice]) => {
                          const isActive = currentSize === sizeKey;
                          return (
                            <button
                              key={sizeKey}
                              type="button"
                              className={`drawer-size-pill ${isActive ? 'is-active' : ''}`}
                              onClick={() => handleSizeChange(burger.id, sizeKey)}
                            >
                              <span className="size-name">
                                {sizeKey.charAt(0).toUpperCase() + sizeKey.slice(1)}
                              </span>
                              <span className="size-price">
                                ${sizePrice.toLocaleString('es-AR')}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* BOTÓN AGREGAR */}
                    <button
                      type="button"
                      className={`btn-drawer-add ${isAdded ? 'is-added' : ''}`}
                      onClick={() => addToCart(burger)}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          <span>¡Agregada al pedido!</span>
                        </>
                      ) : (
                        <>
                          <Plus size={16} />
                          <span>
                            Agregar {currentSize.charAt(0).toUpperCase() + currentSize.slice(1)} · ${currentPrice.toLocaleString('es-AR')}
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* PIE DEL DRAWER: CARRITO Y FINALIZACIÓN POR WHATSAPP */}
        <footer className="drawer-footer">
          {cart.length > 0 ? (
            <div className="drawer-cart-summary">
              {/* Desplegable de items en el carrito */}
              <button
                type="button"
                className="drawer-cart-toggle"
                onClick={() => setShowCartDetails(!showCartDetails)}
                aria-expanded={showCartDetails}
              >
                <div className="drawer-cart-toggle-left">
                  <ShoppingBag size={18} />
                  <span>
                    <strong>{totalItems}</strong> {totalItems === 1 ? 'burger' : 'burgers'} en tu pedido
                  </span>
                </div>
                <div className="drawer-cart-toggle-right">
                  <span className="drawer-cart-subtotal">
                    ${totalPrice.toLocaleString('es-AR')}
                  </span>
                  {showCartDetails ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                </div>
              </button>

              {/* LISTA DE ITEMS DESPLEGABLE */}
              {showCartDetails && (
                <div className="drawer-cart-items-expanded">
                  <div className="drawer-cart-items-list">
                    {cart.map((item) => (
                      <div key={item.key} className="drawer-cart-item">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="drawer-cart-item-img"
                        />
                        <div className="drawer-cart-item-info">
                          <div className="drawer-cart-item-head">
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-price">
                              ${(item.price * item.quantity).toLocaleString('es-AR')}
                            </span>
                          </div>
                          <span className="cart-item-size">
                            Tamaño: {item.size.charAt(0).toUpperCase() + item.size.slice(1)} · Con papas
                          </span>
                          <input
                            type="text"
                            placeholder="Aclaración (ej: sin cebolla, pan sin TACC...)"
                            value={item.note || ''}
                            onChange={(e) => updateItemNote(item.key, e.target.value)}
                            className="cart-item-note-input"
                          />
                        </div>

                        <div className="drawer-cart-item-controls">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, -1)}
                            className="btn-qty"
                            aria-label="Restar una unidad"
                          >
                            {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                          </button>
                          <span className="qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, 1)}
                            className="btn-qty"
                            aria-label="Sumar una unidad"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Campo de aclaraciones adicionales */}
                  <div className="drawer-general-note">
                    <label htmlFor="general-note" className="general-note-label">
                      Aclaración adicional para la cocina (opcional):
                    </label>
                    <input
                      id="general-note"
                      type="text"
                      placeholder="Ej: sin hielo en la bebida, salsas aparte, etc."
                      value={generalNote}
                      onChange={(e) => setGeneralNote(e.target.value)}
                      className="general-note-input"
                    />
                  </div>
                </div>
              )}

              {/* SELECTOR MODALIDAD: DELIVERY O PASAR A RETIRAR */}
              <div className="drawer-order-type-box">
                <div className="drawer-order-type-tabs" role="radiogroup" aria-label="Modalidad del pedido">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={orderType === 'delivery'}
                    className={`drawer-order-type-btn ${orderType === 'delivery' ? 'is-active' : ''}`}
                    onClick={() => setOrderType('delivery')}
                  >
                    <Truck size={15} />
                    <span>Delivery</span>
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={orderType === 'pickup'}
                    className={`drawer-order-type-btn ${orderType === 'pickup' ? 'is-active' : ''}`}
                    onClick={() => setOrderType('pickup')}
                  >
                    <Store size={15} />
                    <span>Pasar a retirar</span>
                  </button>
                </div>

                {orderType === 'delivery' ? (
                  <div className="drawer-address-input-wrapper">
                    <MapPin size={15} className="drawer-address-icon" />
                    <input
                      type="text"
                      placeholder="Dirección de entrega (calle, nro, piso/depto)..."
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="drawer-address-input"
                      aria-label="Dirección de entrega"
                    />
                  </div>
                ) : (
                  <div className="drawer-pickup-location-info">
                    <MapPin size={14} className="drawer-pickup-icon" />
                    <span>Retiro por el local: <strong>Tucumán 2900 (esquina Castelli 2000)</strong></span>
                  </div>
                )}

                <div className="drawer-payment-block">
                  <span className="drawer-payment-label">¿Cómo vas a abonar?</span>
                  <div className="drawer-order-type-tabs" role="radiogroup" aria-label="Forma de pago">
                    <button
                      type="button"
                      role="radio"
                      aria-checked={paymentMethod === 'efectivo'}
                      className={`drawer-order-type-btn ${paymentMethod === 'efectivo' ? 'is-active' : ''}`}
                      onClick={() => setPaymentMethod('efectivo')}
                    >
                      <Banknote size={15} />
                      <span>Efectivo</span>
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={paymentMethod === 'transferencia'}
                      className={`drawer-order-type-btn ${paymentMethod === 'transferencia' ? 'is-active' : ''}`}
                      onClick={() => setPaymentMethod('transferencia')}
                    >
                      <Landmark size={15} />
                      <span>Transferencia</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* BOTÓN FINALIZAR POR WHATSAPP */}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-drawer-whatsapp-checkout"
              >
                <MessageCircle size={22} className="wa-icon" />
                <div className="btn-checkout-text">
                  <span className="checkout-main">Pedir por WhatsApp</span>
                  <span className="checkout-total">Total: ${totalPrice.toLocaleString('es-AR')}</span>
                </div>
                <ArrowRight size={20} className="arrow-icon" />
              </a>
            </div>
          ) : (
            <div className="drawer-empty-cart">
              <ShoppingBag size={24} className="empty-icon" />
              <span>Tocá <strong>+ Agregar</strong> en la burger que te guste para armar tu pedido.</span>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}
