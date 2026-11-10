/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Dribbble,
  Youtube,
  Linkedin,
  Instagram,
  CheckCircle2,
} from 'lucide-react';

const NAV_LINKS = ['Domain', 'Servers', 'Cloud', 'Managed', 'Email', 'Privacy'];

interface FooterColumn {
  title: string;
  links: string[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'SERVERS',
    links: [
      'Web Servers',
      'VPS Servers',
      'Cloud Servers',
      'Managed Instances',
      'Bare Metal',
    ],
  },
  {
    title: 'DOMAINS',
    links: ['Find Domain', 'Move Domains', 'DNS Manager', 'Domain Costs'],
  },
  {
    title: 'HELP US',
    links: ['Open a Ticket', 'FAQs', 'Docs', 'Tutorials', 'Forum'],
  },
  {
    title: 'ABOUT',
    links: [
      'Our Story',
      'Leadership Team',
      'Press Room',
      'We Hire',
      'Alliance',
      'Blog',
    ],
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Mobile menu open / close orchestration
  const openMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 500);
  };

  const toggleMobileMenu = () => {
    if (menuVisible || mobileMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      const frame = requestAnimationFrame(() => {
        setMenuVisible(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [mobileMenuOpen]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div
      className="relative min-h-screen flex flex-col text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4"
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* NAVIGATION BAR */}
        <header className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5">
          {/* Logo (left) */}
          <a
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
          >
            <svg
              viewBox="0 0 480 480"
              className="w-8 h-8 fill-white shrink-0 transition-transform duration-300 group-hover:scale-105"
              aria-label="NEXOVA Logo"
            >
              <path d="M480 240a240 240 0 0 0-240 240 240 240 0 0 0 240-240Z M240 0A240 240 0 0 0 0 240 240 240 0 0 0 240 0Z M480 240A240 240 0 0 0 240 0a240 240 0 0 0 240 240Z M240 480A240 240 0 0 0 0 240a240 240 0 0 0 240 240Z" />
            </svg>
            <span className="text-white text-xl font-bold tracking-wider">
              NEXOVA
            </span>
          </a>

          {/* Desktop nav links (center) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/80 hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Login button (right) */}
          <div className="hidden lg:flex items-center">
            <a
              href="#login"
              className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-emerald-500/10 hover:shadow-cyan-500/25 hover:brightness-105 active:scale-95 transition-all"
            >
              LOG IN
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
            className="relative z-[60] w-10 h-10 flex items-center justify-center text-white focus:outline-none cursor-pointer lg:hidden"
          >
            <Menu
              className={`w-6 h-6 absolute transition-all duration-300 ${
                menuVisible
                  ? 'opacity-0 -rotate-90 scale-75 pointer-events-none'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`w-6 h-6 absolute transition-all duration-300 ${
                menuVisible
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 rotate-90 scale-75 pointer-events-none'
              }`}
            />
          </button>
        </header>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-md transition-opacity duration-400 cursor-pointer ${
                menuVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <div
              className={`absolute left-0 right-0 top-[68px] z-50 overflow-hidden rounded-b-2xl transition-all duration-300 ${
                menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              {/* Backdrop-only blur layer */}
              <div className="absolute inset-0 backdrop-blur-xl rounded-b-2xl bg-black/30" />

              {/* Menu items */}
              <div className="relative z-10 px-6 py-8 flex flex-col items-center gap-6">
                {NAV_LINKS.map((link, index) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={closeMenu}
                    className="text-lg sm:text-xl font-light tracking-[0.08em] text-white/80 hover:text-white transition-colors duration-200"
                    style={{
                      transitionProperty: 'opacity, transform',
                      transitionDuration: '400ms',
                      transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                      transitionDelay: menuVisible
                        ? `${350 + index * 50}ms`
                        : '0ms',
                      opacity: menuVisible ? 1 : 0,
                      transform: menuVisible
                        ? 'translateY(0)'
                        : 'translateY(12px)',
                    }}
                  >
                    {link}
                  </a>
                ))}

                {/* Mobile Login button */}
                <a
                  href="#login"
                  onClick={closeMenu}
                  className="mt-2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                  style={{
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '400ms',
                    transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    transitionDelay: menuVisible
                      ? `${350 + NAV_LINKS.length * 50}ms`
                      : '0ms',
                    opacity: menuVisible ? 1 : 0,
                    transform: menuVisible
                      ? 'translateY(0)'
                      : 'translateY(12px)',
                  }}
                >
                  LOG IN
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </>
        )}

        {/* HERO / 404 SECTION */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16 md:py-0">
          {/* Subtitle lines */}
          <h1 className="text-white/80 text-lg sm:text-3xl md:text-5xl font-light leading-snug tracking-tight mb-1 sm:mb-2">
            This page seems to have
          </h1>
          <h1 className="text-white/80 text-lg sm:text-3xl md:text-5xl font-light leading-snug tracking-tight mb-8 sm:mb-12">
            slipped beyond our reach :/
          </h1>

          {/* Giant "404" text */}
          <div className="relative mb-8 sm:mb-12 w-full flex justify-center overflow-visible">
            <span className="four-oh-four text-[80px] sm:text-[140px] md:text-[200px] lg:text-[260px] font-black text-white leading-none tracking-tighter select-none">
              404
            </span>
          </div>

          {/* "Return to Main Page" button */}
          <a
            href="/"
            className="liquid-glass text-white text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full uppercase inline-flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            RETURN TO MAIN PAGE
          </a>
        </main>

        {/* FOOTER */}
        <footer className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 pb-8 sm:pb-10 pt-10 sm:pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6">
            {/* 4 link columns */}
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-white text-[10px] sm:text-xs font-bold tracking-[0.15em] mb-3 sm:mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-white/50 hover:text-white/80 text-[10px] sm:text-xs transition-colors duration-200 block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter + Social column */}
            <div className="col-span-2 lg:col-span-2">
              <h3 className="text-white text-[10px] sm:text-xs font-bold tracking-[0.15em] mb-3 sm:mb-4">
                JOIN FOR EXCLUSIVE DEALS
              </h3>
              <form onSubmit={handleSubscribe} className="flex max-w-sm">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Type your email to sign up"
                  required
                  className="bg-white text-gray-900 placeholder-gray-400 text-xs px-3 py-2 sm:py-2.5 w-full rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-400 to-cyan-500 hover:brightness-105 active:scale-95 transition-all text-white text-[10px] sm:text-xs font-bold tracking-wider px-3 sm:px-4 shrink-0 rounded-r-md cursor-pointer uppercase"
                >
                  SEND IT
                </button>
              </form>

              {subscribed && (
                <div className="flex items-center gap-1.5 mt-2 text-emerald-400 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}

              <h3 className="text-white text-[10px] sm:text-xs font-bold tracking-[0.15em] mt-5 sm:mt-6 mb-3">
                CONNECT
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#twitter"
                  aria-label="Twitter"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#dribbble"
                  aria-label="Dribbble"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Dribbble className="w-4 h-4" />
                </a>
                <a
                  href="#youtube"
                  aria-label="Youtube"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  aria-label="Linkedin"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
