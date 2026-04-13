import React, { useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaUser, FaCogs, FaBriefcase,
  FaEnvelope, FaHandshake, FaMoon, FaSun,
} from 'react-icons/fa';
import '../css/Header.css';

const DOCK_ITEMS = [
  { to: '/',         icon: FaHome,       label: 'Home' },
  { to: '/about',    icon: FaUser,       label: 'About' },
  { to: '/services', icon: FaCogs,       label: 'Services' },
  { to: '/portfolio',icon: FaBriefcase,  label: 'Portfolio' },
  { to: '/contact',  icon: FaEnvelope,   label: 'Contact' },
  { to: '/hire-me',  icon: FaHandshake,  label: 'Hire Me' },
];

const MAX_SCALE = 1.5;
const PROXIMITY = 140;
const LERP_SPEED = 0.28;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

const Header = ({ toggleTheme, isDarkMode }) => {
  const dockRef = useRef(null);
  const iconRefs = useRef([]);
  const specularRef = useRef(null);
  const rafId = useRef(null);
  const targetScales = useRef([]);
  const currentScales = useRef([]);
  const mouseInside = useRef(false);
  const location = useLocation();

  const totalItems = DOCK_ITEMS.length + 1;

  useEffect(() => {
    targetScales.current = new Array(totalItems).fill(1);
    currentScales.current = new Array(totalItems).fill(1);
  }, [totalItems]);

  const tick = useCallback(() => {
    let needsUpdate = false;
    for (let i = 0; i < totalItems; i++) {
      const prev = currentScales.current[i];
      const target = targetScales.current[i];
      const next = lerp(prev, target, LERP_SPEED);
      const snapped = Math.abs(next - target) < 0.003 ? target : next;
      currentScales.current[i] = snapped;
      if (snapped !== prev) needsUpdate = true;

      const el = iconRefs.current[i];
      if (el) {
        el.style.transform = `scale(${snapped})`;
      }
    }
    if (needsUpdate || mouseInside.current) {
      rafId.current = requestAnimationFrame(tick);
    } else {
      rafId.current = null;
    }
  }, [totalItems]);

  const startLoop = useCallback(() => {
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  const handleMouseMove = useCallback((e) => {
    mouseInside.current = true;
    const mouseX = e.clientX;

    for (let i = 0; i < totalItems; i++) {
      const el = iconRefs.current[i];
      if (!el) { targetScales.current[i] = 1; continue; }
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const dist = Math.abs(mouseX - cx);
      if (dist > PROXIMITY) {
        targetScales.current[i] = 1;
      } else {
        const ratio = 1 - dist / PROXIMITY;
        targetScales.current[i] = 1 + (MAX_SCALE - 1) * ratio * ratio;
      }
    }

    if (specularRef.current && dockRef.current) {
      const r = dockRef.current.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width) * 100;
      const py = ((e.clientY - r.top) / r.height) * 100;
      specularRef.current.style.setProperty('--sx', `${px}%`);
      specularRef.current.style.setProperty('--sy', `${py}%`);
    }

    startLoop();
  }, [totalItems, startLoop]);

  const handleMouseLeave = useCallback(() => {
    mouseInside.current = false;
    for (let i = 0; i < totalItems; i++) {
      targetScales.current[i] = 1;
    }
    startLoop();
  }, [totalItems, startLoop]);

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <svg className="liquid-glass-svg" aria-hidden="true">
        <defs>
          <filter id="liquid-refract">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.018"
              numOctaves="3"
              seed="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <nav
        ref={dockRef}
        className={`dock ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label="Main navigation"
      >
        <div className="dock-refract" />
        <div ref={specularRef} className="dock-specular" />
        <div className="dock-edge-top" />
        <div className="dock-edge-bottom" />

        <div className="dock-items">
          {DOCK_ITEMS.map((item, i) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`dock-item ${isActive ? 'active' : ''}`}
                aria-label={item.label}
              >
                <div
                  ref={(el) => (iconRefs.current[i] = el)}
                  className="dock-icon-bg"
                >
                  <Icon className="dock-icon" />
                </div>
                <span className="dock-label">{item.label}</span>
                {isActive && <span className="dock-indicator" />}
              </Link>
            );
          })}

          <div className="dock-divider" />

          <button
            onClick={toggleTheme}
            className="dock-item dock-theme-btn"
            aria-label="Toggle theme"
          >
            <div
              ref={(el) => (iconRefs.current[DOCK_ITEMS.length] = el)}
              className="dock-icon-bg"
            >
              {isDarkMode
                ? <FaSun className="dock-icon theme-sun" />
                : <FaMoon className="dock-icon theme-moon" />}
            </div>
            <span className="dock-label">{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
