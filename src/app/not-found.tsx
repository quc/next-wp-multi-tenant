'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const pathname = usePathname();
  
  // Extract site parameter from pathname
  const siteMatch = pathname.match(/^\/([^\/]+)/);
  const site = siteMatch ? siteMatch[1] : 'tubemagnet';
  
  // Theme configurations (same as LandingPage)
  const themes = {
    tubemagnet: {
      cssVars: {
        '--gradient-primary': 'linear-gradient(to right, #6A35D9, #5A2BC7)',
        '--color-text-primary': '#333333',
        '--color-text-secondary': '#555555',
        '--color-background': '#FFFFFF',
        '--color-background-secondary': '#F5F5F5',
        '--color-button-text': '#FFFFFF',
        '--color-border': '#E0E0E0',
        '--font-family-serif': 'Georgia, serif',
        '--font-family-sans-serif': 'Inter, sans-serif'
      },
      brand: {
        nameFirst: 'TUBE',
        nameSecond: 'MAGNET',
        platform: 'YouTube™',
        description: 'Channel Growth'
      }
    },
    omgtok: {
      cssVars: {
        '--gradient-primary': 'linear-gradient(to right, #FFD700, #FFA500, #FF6347, #DA70D6)',
        '--color-text-primary': '#333333',
        '--color-text-secondary': '#555555',
        '--color-background': '#FFFFFF',
        '--color-background-secondary': '#F5F5F5',
        '--color-button-text': '#FFFFFF',
        '--color-border': '#E0E0E0',
        '--font-family-serif': 'Georgia, serif',
        '--font-family-sans-serif': 'Inter, sans-serif'
      },
      brand: {
        nameFirst: 'OMG',
        nameSecond: 'TOK',
        platform: 'TikTok™',
        description: 'Account Visibility'
      }
    }
  };

  // Ensure we have a valid theme, fallback to tubemagnet
  const theme = (site === 'tubemagnet' || site === 'omgtok') ? site : 'tubemagnet';
  const currentTheme = themes[theme];
  const { cssVars, brand } = currentTheme;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)', ...cssVars }}>
      <style jsx>{`
        .gradient-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-bg {
          background: var(--gradient-primary);
        }
        .serif-headline {
          font-family: var(--font-family-serif);
        }
        .sans-serif-text {
          font-family: var(--font-family-sans-serif);
        }
        .triangle-icon {
          width: 24px;
          height: 24px;
          background: var(--gradient-primary);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>

      {/* Header */}
      <Header theme={theme} brand={brand} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 serif-headline" style={{ color: 'var(--color-text-primary)' }}>
            404 - Page Not Found
          </h1>
          <p className="text-lg mb-8 sans-serif-text" style={{ color: 'var(--color-text-secondary)' }}>
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            href={`/${theme === 'tubemagnet' ? 'home' : 'home2'}`}
            className="gradient-bg text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text"
          >
            Return Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer brand={brand} />
    </div>
  );
}
