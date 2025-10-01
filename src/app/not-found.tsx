'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  // const resolvedParams = await params;
  const pathname = usePathname();
  
  // Extract site parameter from pathname
  const siteMatch = pathname.match(/^\/([^\/]+)/);
  const site = siteMatch ? siteMatch[1] : 'tubemagnet';
  
  // Theme configurations (same as LandingPage)
  const themes = {
    tubemagnet: {
      cssVars: {
        '--gradient-primary': '#0060FB',
        '--gradient-primary-start': '#0060FB',
        '--gradient-primary-end': '#0060FB',
        '--secondary-color': '#0060FB',
        '--color-text-primary': '#333333',
        '--color-text-secondary': '#555555',
        '--color-background': '#FFFFFF',
        '--color-background-secondary': '#F5F5F5',
        '--color-button-text': '#FFFFFF',
        '--color-border': '#E0E0E0',
        '--font-family-serif': 'Open Sans, serif',
        '--font-family-sans-serif': 'Inter, sans-serif',
      },
      brand: {
        nameFirst: 'TubeMagnet',
        nameSecond: '',
        headerImage: '/assets/header.png',
        platform: 'YouTube™',
        platformType: 'Channel',
        description: 'Channel Growth',
      }
    },
    instalever: {
      cssVars: {
        '--gradient-primary': 'linear-gradient(to bottom, #FFE13F, #FA709A)',
        '--gradient-primary-start': '#FFE13F',
        '--gradient-primary-end': '#FA709A',
        '--secondary-color': '#FA709A',
        '--color-text-primary': '#333333',
        '--color-text-secondary': '#555555',
        '--color-background': '#FFFFFF',
        '--color-background-secondary': '#F5F5F5',
        '--color-button-text': '#FFFFFF',
        '--color-border': '#E0E0E0',
        '--font-family-serif': 'Afterglow, serif',
        '--font-family-sans-serif': 'Inter, sans-serif',
      },
      brand: {
        nameFirst: 'instalever',
        nameSecond: '',
        headerImage: '/assets/header.png',
        platform: 'Instagram™',
        platformType: 'Account',
        description: 'Profile Visibility',
      }
    }
  };

  // Ensure we have a valid theme, fallback to tubemagnet
  const theme = (site === 'tubemagnet' || site === 'instalever') ? site : 'tubemagnet';
  const currentTheme = themes[theme];
  const { cssVars, brand } = currentTheme;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)', ...cssVars }}>

      {/* Header */}
      <Header theme={theme} brand={brand} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 serif-headline primary-textcolor">
            404 - Page Not Found
          </h1>
          <p className="text-lg mb-8 sans-serif-text primary-textcolor">
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
