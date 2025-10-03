'use client';

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  brand: {
    nameFirst: string;
    nameSecond: string;
    headerImage: string;
    headerImageClass: string;
    headerIsShowName: boolean;
  };
  style?: 'simple' | 'default';
}


export default function Header({ brand, style = 'default' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getHeader = () => {
    switch (style) {
      case 'simple':
        return (
          <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center py-4">
                <Link href={`/`} className="flex items-center space-x-2">
                  <img src={brand.headerImage} alt="header image" className={brand.headerImageClass || 'w-12 h-12'} />
                </Link>
                {brand.headerIsShowName && (
                    <span className="text-2xl font-bold sans-serif-text">
                      <span className="gradient-text serif-headline">{brand.nameFirst}</span>
                      <span className="primary-textcolor">{brand.nameSecond}</span>
                    </span>
                  )}
              </div>
            </div>
          </header>
        );
      default:
        return (
          <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <Link href={`/`} className="flex items-center space-x-2">
                  {/* Triangle Icon for instalever, simple square for tubemagnet */}
                  <img src={brand.headerImage} alt="header image" className={brand.headerImageClass || 'w-12 h-12'} />
                  {brand.headerIsShowName && (
                    <span className="text-2xl font-bold sans-serif-text">
                      <span className="gradient-text serif-headline">{brand.nameFirst}</span>
                      <span className="primary-textcolor">{brand.nameSecond}</span>
                    </span>
                  )}
                </Link>
      
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                  <Link href={`/`} className="sans-serif-text hover:opacity-75 transition-opacity primary-textcolor">
                    Home
                  </Link>
                  <Link href="/#how-it-works" className="sans-serif-text hover:opacity-75 transition-opacity primary-textcolor">
                    How it Works
                  </Link>
                  <Link href="/#pricing" className="sans-serif-text hover:opacity-75 transition-opacity primary-textcolor">
                    Pricing
                  </Link>
                  <Link href="/#contact" className="sans-serif-text hover:opacity-75 transition-opacity primary-textcolor">
                    Contact
                  </Link>
                </nav>
      
                {/* Desktop CTA Button */}
                <Link
                  href="/checkout"
                  className="hidden md:block gradient-bg text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity sans-serif-text"
                >
                  START MY FREE 3-DAY TRIAL
                </Link>
      
                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
      
              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="md:hidden border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <nav className="py-4 space-y-4">
                    <Link 
                      href={`/`} 
                      className="block px-4 py-2 sans-serif-text hover:bg-gray-50 transition-colors rounded-lg" 
                      style={{ color: 'var(--color-text-primary)' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/#how-it-works" 
                      className="block px-4 py-2 sans-serif-text hover:bg-gray-50 transition-colors rounded-lg" 
                      style={{ color: 'var(--color-text-primary)' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      How it Works
                    </Link>
                    <Link 
                      href="/#pricing" 
                      className="block px-4 py-2 sans-serif-text hover:bg-gray-50 transition-colors rounded-lg" 
                      style={{ color: 'var(--color-text-primary)' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link 
                      href="/#contact" 
                      className="block px-4 py-2 sans-serif-text hover:bg-gray-50 transition-colors rounded-lg" 
                      style={{ color: 'var(--color-text-primary)' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <div className="px-4 pt-4">
                      <Link
                        href="/checkout"
                        className="block w-full text-center gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity sans-serif-text"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        START MY FREE 3-DAY TRIAL
                      </Link>
                    </div>
                  </nav>
                </div>
              )}
            </div>
          </header>
        );
    }
  };

  return getHeader();
}
