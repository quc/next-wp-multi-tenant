'use client';

import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import TrustedBySection from "./TrustedBySection";
import { useState } from "react";
import ChannelMarketing from "./ChannelMarketing";
import WhyGrowing from "./WhyGrowing";
import Feedbacks from "./Feedbacks";
import SimpleSteps from "./SimpleSteps";
import NewAudience from "./NewAudience";
import PromotionToolkit from "./PromotionToolkit";
import WhatHappens from "./WhatHappens";
import TransparentPrice from "./TransparentPrice";
import FAQ from "./FAQ";
import SmarterWay from "./SmarterWay";
import ContactUs from "./ContactUs";
import ImageWithPhone from "./ImageWithPhone";
import PricingSection from "./PricingSection";

interface LandingPageProps {
  theme: 'tubemagnet' | 'instalever' | 'xgrowlab' | 'streameredge' | 'bolderbook' | 'omgtok' | 'earforge';
}

export default function LandingPage({ theme }: LandingPageProps) {
  // Theme configurations
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
        headerImage: '/assets/header.svg',
        platform: 'YouTube™',
        platformType: 'Channel',
        image: '/assets/chart.gif',
        description: 'Channel Growth',
        phoneImage: '/assets/phone.gif',
        phoneImageAlt: 'phone image',
        features: [
          'Strategic personalized YouTube™ channel promotion',
          'Respect platform compliance guidelines',
          'For beginners or experienced content creators'
        ],
        notifications: [
          { name: 'Claire', time: '1m ago' },
          { name: 'Bill', time: '2m ago' },
          { name: 'Andrew', time: '3m ago' }
        ],
        video: 'https://www.youtube.com/embed/2t2ANJv5NuY?autoplay=1&rel=0&modestbranding=1',
        videoThumbnail: 'https://img.youtube.com/vi/2t2ANJv5NuY/maxresdefault.jpg',
        whyGrowing: {
          challenges: [
            `The algorithm usually favors big creators, leaving many high-quality youtube channels underexposed`,
            "Traditional audience building eats up a lot of your time",
            `Many youtube optimization strategies require specialized expertise`,
            `Creating content doesn't guarantee discovery`
          ]
        },
        feedbacks: [
          {
            before: {
              subscribers: "139K",
              videos: "24",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            },
            after: {
              subscribers: "99M",
              videos: "24",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            }
          },
          {
            before: {
              subscribers: "89K",
              videos: "18",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            },
            after: {
              subscribers: "45M",
              videos: "18",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            }
          },
          {
            before: {
              subscribers: "67K",
              videos: "31",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            },
            after: {
              subscribers: "78M",
              videos: "31",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            }
          }
        ],
        simpleSteps: {
          desctiption: 'YouTube™ Channel Visability',
          image: '/assets/img-two.png',
          firstStep: '1. Define Your Target Demographics',
          firstStepDescription: 'Share details about your target viewer demographics. Our marketing team researches audience segments in your content category and develops external marketing strategies for YouTube™.',
          secondStep: '2. Create a Compelling Video',
          secondStepDescription: 'We execute strategic promotion campaigns through our established network of content marketers, partnership specialists, email outreach professionals, and advertising channels to increase your YouTube™ channel\'s visibility across multiple platforms.',
          thirdStep: '3. Engage with Your Audience',
          thirdStepDescription: 'Simply provide your YouTube™ channel link, and we\'ll handle the strategic promotion. No complicated setup. Our team works to introduce your channel to new audiences while you focus on creating content.',
        },
        pricing: {
          title: 'Growth Package',
          subtitle: 'Choose the perfect plan for your YouTube channel growth needs',
          packages: [
            {
              name: 'TubeMagnet Lite',
              price: '$69',
              description: 'Hands-off channel promotion to get more views, engagement and subscribers. For personal accounts looking for fast organic growth.',
              features: [
                { text: 'promoting your channel', highlight: '50 Influencers' },
                { text: 'Fast growth' },
                { text: 'Dedicated account manager' },
                { text: 'Pure organic setup' },
                { text: 'No hassle' },
                { text: '100% data protection' }
              ]
            },
            {
              name: 'TubeMagnet Standard',
              price: '$99',
              description: 'Hands-off channel promotion to get more views, engagement and subscribers. For upcoming influencers and businesses looking for significantly faster growth.',
              features: [
                { text: 'promoting your channel', highlight: '100 Influencers' },
                { text: 'Fast growth' },
                { text: 'Dedicated account manager' },
                { text: 'Pure organic setup' },
                { text: 'No hassle' },
                { text: '100% data protection' }
              ],
              isPopular: true
            },
            {
              name: 'TubeMagnet Premium',
              price: '$199',
              description: 'Hands-off channel promotion to get more views, engagement and subscribers. Exponential organic growth that easily outpaces your competition.',
              features: [
                { text: 'promoting your channel', highlight: '200 Influencers' },
                { text: 'Fast growth' },
                { text: 'Dedicated account manager' },
                { text: 'Pure organic setup' },
                { text: 'No hassle' },
                { text: '100% data protection' }
              ]
            }
          ],
          disclaimer: 'Cancel Anytime. Try our professional service risk-free. If you\'re not completely satisfied with our service quality, cancel within 3 days with zero charge. No complicated cancellation process - one simple step and you\'re done.'
        },
        newAudience: {
          description: 'YouTube™ Channel',
          features: [
            {
              title: 'Strategic Audience Research',
              description: 'Our expert team studies your streaming category and researches demographic segments in your streaming category. We stay current with platform updates to continuously refine our external marketing approach for your channel.'
            },
            
            {
              title: 'Dedicated Support',
              description: 'A personal account manager collaborates with our round-the-clock support team to handle your channel promotion campaigns. We manage the strategic work while you concentrate on producing quality streams.'
            },
            
            {
              title: 'Secure & Simple',
              description: 'Your promotion campaigns operate through our secure platform with professional-grade data protection. No downloads needed, no passwords required – simply provide your Twitch channel details and we manage the marketing execution.'
            },

            {
              title: 'Launch Once, Market Consistently',
              description: 'Begin your marketing campaigns without the ongoing oversight that other services demand. Our straightforward pricing and hands-off approach gives you more time for what matters – creating great streams.'
            }
            
          ]
        },
        promotionToolkit: {
          type: 'Channel',
          tool: 'Tubemagnet',
          image: '/assets/img-three.png',
          leftFeatures: [
            {
              title: 'Adaptive Performance Tracking',
              description: 'Smart analytics that adjust to platform updates and algorithm changes'
            },
            {
              title: 'Round-the-Clock Assistance',
              description: 'Support team ready to help whenever you need it'
            },
            {
              title: 'Transparent Service Pricing',
              description: 'Single marketing package with clearly defined investment'
            },
            {
              title: 'Professional Data Protection',
              description: 'Your information remains secure with industry-standard privacy measures'
            }
          ],
          rightFeatures: [
            {
              title: 'Round-the-Clock Assistance',
              description: 'Support team ready to help whenever you need it'
            },
            {
              title: 'Transparent Service Pricing',
              description: 'Single marketing package with clearly defined investment'
            },
            {
              title: 'Professional Data Protection',
              description: 'Your information remains secure with industry-standard privacy measures'
            },
            {
              title: 'Adaptive Performance Tracking',
              description: 'Smart analytics that adjust to platform updates and algorithm changes'
            }
          ]
        },
        whatHappens: {
          benefits: [
            "Increased visibility for your content",
            "Stronger positioning for future brand deals, sponsorships, and partnerships",
            "Expanded opportunities to promote your products or services",
            "Increased authority and presence within your niche or industry",
          ],
          type: 'Channel'
        },
        transparentPrice: {
          platform: 'YouTube™ Channel',
          tool: 'Tubemagnet'
        },
        faq: [
          {
            question: "What Is Your Refund and Cancellation Policy",
            answer: "We offer a 3-day free trial with no commitment. You can cancel anytime during the trial period with zero charges. After the trial, you can cancel your subscription at any time with no complicated process - just one simple step and you're done. We also offer a satisfaction guarantee for our service quality.",
          },
          {
            question: "How Do You Increase My YouTube™ Channel Visibility?",
            answer: "We use strategic cross-platform marketing techniques including audience research, demographic analysis, and targeted promotion campaigns. Our team works through established networks of content marketers, partnership specialists, and advertising channels to introduce your channel to new audiences while respecting platform guidelines.",
          },
          {
            question: "Is This Service Platform Compliant?",
            answer: "Yes, absolutely. All our marketing strategies are designed to respect YouTube's terms of service and community guidelines. We use only platform-friendly methods and stay current with platform updates to ensure our external marketing approach remains compliant and effective.",
          },
          {
            question: "Will This Service Work for Me?",
            answer: "Our service is designed for content creators, influencers, and brands who want to expand their channel reach. Results depend on various factors including content quality, market demand, and audience response. We provide strategic support for both beginners and experienced content creators looking to grow their presence.",
          },
          {
            question: "What Kind of Results Can I Expect?",
            answer: "While we can't guarantee specific outcomes, our clients typically see increased visibility, stronger positioning for brand deals and partnerships, and enhanced authority within their niche. Results vary based on content quality, market demand, and audience response, but our strategic approach helps maximize your channel's potential.",
          },
          {
            question: "How Quickly Will I See Results?",
            answer: "Results can vary depending on your content category and market conditions. Some clients see initial improvements within the first week, while others may take longer to see significant growth. Our team continuously monitors and adjusts strategies to optimize performance over time.",
          },
          {
            question: "What If I Want to Cancel My Free Trial?",
            answer: "Canceling your free trial is simple and straightforward. You can cancel anytime during the 3-day trial period with zero charges. There's no complicated cancellation process - just one simple step and you're done. We believe in earning your business through quality service, not through difficult cancellation procedures.",
          },
          {
            question: "What Makes Your Promotion Different from Others?",
            answer: "Our approach combines strategic audience research, platform-compliant methods, and hands-off execution. Unlike other services, we provide dedicated support, transparent pricing, and professional data protection. Our team focuses on sustainable growth strategies rather than quick fixes, ensuring long-term success for your channel.",
          }
        ],
        smarterWay: {
          title: "YouTube™ Channel",
          type: "channel",
          features: [
            "Strategic personalized channel promotion",
            "Respect platform compliance guidelines", 
            "For beginners or experienced streamers"
          ]
        }
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
        headerImage: '/assets/header.svg',
        platform: 'Instagram™',
        platformType: 'Account',
        description: 'Profile Visibility',
        image: '/assets/chart.gif',
        phoneImage: '/assets/phone.gif',
        phoneImageAlt: 'phone image',
        features: [
          'Strategic personalized account promotion',
          'Respect platform compliance guidelines',
          'For beginners or experienced content creators'
        ],
        notifications: [
          { name: 'Claire', time: '1m ago' },
          { name: 'Bill', time: '2m ago' },
          { name: 'Andrew', time: '3m ago' }
        ],
        video: 'https://www.youtube.com/embed/2t2ANJv5NuY?autoplay=1&rel=0&modestbranding=1',
        videoThumbnail: 'https://img.youtube.com/vi/2t2ANJv5NuY/maxresdefault.jpg',
        whyGrowing: {
          challenges: [
            `The algorithm usually favors big creators, leaving many high-quality profiles underexposed`,
            "Traditional audience building eats up a lot of your time",
            `Many account optimization strategies require specialized expertise`,
            `Creating content doesn't guarantee discovery`
          ]
        },
        feedbacks: [
          {
            before: {
              subscribers: "139K",
              videos: "24",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            },
            after: {
              subscribers: "99M",
              videos: "24",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            }
          },
          {
            before: {
              subscribers: "89K",
              videos: "18",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            },
            after: {
              subscribers: "45M",
              videos: "18",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            }
          },
          {
            before: {
              subscribers: "67K",
              videos: "31", 
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            },
            after: {
              subscribers: "78M",
              videos: "31",
              clientPhoto: "/assets/card-pfp.png",
              thumbnail: "/assets/card-bg.png",
              description: "Suspendisse non urna quis eros commodo pellentesque ut egetdas metus. Suspendisse urna urna, tincidunt ut ultricies id...more"
            }
          }
        ],
        simpleSteps: {
          desctiption: 'Instagram™ Account Visability',
          imgClass: '[transform:scaleX(-1)]',
          image: '/assets/img-two.png',
          firstStep: '1. Define Your Target Demographics',
          firstStepDescription: 'Share details about your target viewer demographics. Our marketing team researches audience segments in your content category and develops external marketing strategies for Instagram™.',
          secondStep: '2. Create a Compelling Video',
          secondStepDescription: 'We execute strategic promotion campaigns through our established network of content marketers, partnership specialists, email outreach professionals, and advertising channels to increase your Instagram™ account\'s visibility across multiple platforms.',
          thirdStep: '3. Engage with Your Audience',
          thirdStepDescription: 'Simply provide your Instagram™ account link, and we\'ll handle the strategic promotion. No complicated setup. Our team works to introduce your account to new audiences while you focus on creating content.',
        },
        pricing: {
          title: 'Growth Package',
          subtitle: 'Choose the perfect plan for your Instagram account growth needs',
          packages: [
            {
              name: 'Instalever Lite',
              price: '$69',
              description: 'Hands-off account promotion to get more followers, engagement and reach. For personal accounts looking for fast organic growth.',
              features: [
                { text: 'promoting your account', highlight: '50 Influencers' },
                { text: 'Fast growth' },
                { text: 'Dedicated account manager' },
                { text: 'Pure organic setup' },
                { text: 'No hassle' },
                { text: '100% data protection' }
              ]
            },
            {
              name: 'Instalever Standard',
              price: '$99',
              description: 'Hands-off account promotion to get more followers, engagement and reach. For upcoming influencers and businesses looking for significantly faster growth.',
              features: [
                { text: 'promoting your account', highlight: '100 Influencers' },
                { text: 'Fast growth' },
                { text: 'Dedicated account manager' },
                { text: 'Pure organic setup' },
                { text: 'No hassle' },
                { text: '100% data protection' }
              ],
              isPopular: true
            },
            {
              name: 'Instalever Premium',
              price: '$199',
              description: 'Hands-off account promotion to get more followers, engagement and reach. Exponential organic growth that easily outpaces your competition.',
              features: [
                { text: 'promoting your account', highlight: '200 Influencers' },
                { text: 'Fast growth' },
                { text: 'Dedicated account manager' },
                { text: 'Pure organic setup' },
                { text: 'No hassle' },
                { text: '100% data protection' }
              ]
            }
          ],
          disclaimer: 'Cancel Anytime. Try our professional service risk-free. If you\'re not completely satisfied with our service quality, cancel within 3 days with zero charge. No complicated cancellation process - one simple step and you\'re done.'
        },
        newAudience: {
          description: 'Instagram™ Account',
          features: [
            {
              title: 'Strategic Audience Research',
              description: 'Our expert team studies your streaming category and researches demographic segments in your streaming category. We stay current with platform updates to continuously refine our external marketing approach for your channel.'
            },
            
            {
              title: 'Dedicated Support',
              description: 'A personal account manager collaborates with our round-the-clock support team to handle your channel promotion campaigns. We manage the strategic work while you concentrate on producing quality streams.'
            },
            
            {
              title: 'Secure & Simple',
              description: 'Your promotion campaigns operate through our secure platform with professional-grade data protection. No downloads needed, no passwords required – simply provide your Twitch channel details and we manage the marketing execution.'
            },

            {
              title: 'Launch Once, Market Consistently',
              description: 'Begin your marketing campaigns without the ongoing oversight that other services demand. Our straightforward pricing and hands-off approach gives you more time for what matters – creating great streams.'
            }
            
          ]
        },
        promotionToolkit: {
          type: 'Account',
          image: '/assets/img-three.png',
          tool: 'InstaLever',
          leftFeatures: [
            {
              title: 'Adaptive Performance Tracking',
              description: 'Smart analytics that adjust to platform updates and algorithm changes'
            },
            {
              title: 'Round-the-Clock Assistance',
              description: 'Support team ready to help whenever you need it'
            },
            {
              title: 'Transparent Service Pricing',
              description: 'Single marketing package with clearly defined investment'
            },
            {
              title: 'Professional Data Protection',
              description: 'Your information remains secure with industry-standard privacy measures'
            }
          ],
          rightFeatures: [
            {
              title: 'Round-the-Clock Assistance',
              description: 'Support team ready to help whenever you need it'
            },
            {
              title: 'Transparent Service Pricing',
              description: 'Single marketing package with clearly defined investment'
            },
            {
              title: 'Professional Data Protection',
              description: 'Your information remains secure with industry-standard privacy measures'
            },
            {
              title: 'Adaptive Performance Tracking',
              description: 'Smart analytics that adjust to platform updates and algorithm changes'
            }
          ]
        },
        whatHappens: {
          benefits: [
            "Increased visibility for your content",
            "Stronger positioning for future brand deals, sponsorships, and partnerships",
            "Expanded opportunities to promote your products or services",
            "Increased authority and presence within your niche or industry",
          ],
          type: 'Account'
        },
        transparentPrice: {
          platform: 'Instagram™ Account',
          tool: 'InstaLever'
        },
        faq: [
          {
            question: "What Is Your Refund and Cancellation Policy",
            answer: "We offer a 3-day free trial with no commitment. You can cancel anytime during the trial period with zero charges. After the trial, you can cancel your subscription at any time with no complicated process - just one simple step and you're done. We also offer a satisfaction guarantee for our service quality.",
          },
          
          {
            question: "How Do You Increase My Instagram™ Account Visibility?",
            answer: "We use strategic cross-platform marketing techniques including audience research, demographic analysis, and targeted promotion campaigns. Our team works through established networks of content marketers, partnership specialists, and advertising channels to introduce your channel to new audiences while respecting platform guidelines.",
          },
          
          {
            question: "Is This Service Platform Compliant?",
            answer: "Yes, absolutely. All our marketing strategies are designed to respect YouTube's terms of service and community guidelines. We use only platform-friendly methods and stay current with platform updates to ensure our external marketing approach remains compliant and effective.",
          },
          
          {
            question: "Will This Service Work for Me?",
            answer: "Our service is designed for content creators, influencers, and brands who want to expand their channel reach. Results depend on various factors including content quality, market demand, and audience response. We provide strategic support for both beginners and experienced content creators looking to grow their presence.",
          },
          
          {
            question: "What Kind of Results Can I Expect?",
            answer: "While we can't guarantee specific outcomes, our clients typically see increased visibility, stronger positioning for brand deals and partnerships, and enhanced authority within their niche. Results vary based on content quality, market demand, and audience response, but our strategic approach helps maximize your channel's potential.",
          },
          
          {
            question: "How Quickly Will I See Results?",
            answer: "Results can vary depending on your content category and market conditions. Some clients see initial improvements within the first week, while others may take longer to see significant growth. Our team continuously monitors and adjusts strategies to optimize performance over time.",
          },
          
          {
            question: "What If I Want to Cancel My Free Trial?",
            answer: "Canceling your free trial is simple and straightforward. You can cancel anytime during the 3-day trial period with zero charges. There's no complicated cancellation process - just one simple step and you're done. We believe in earning your business through quality service, not through difficult cancellation procedures.",
          },
          
          {
            question: "What Makes Your Promotion Different from Others?",
            answer: "Our approach combines strategic audience research, platform-compliant methods, and hands-off execution. Unlike other services, we provide dedicated support, transparent pricing, and professional data protection. Our team focuses on sustainable growth strategies rather than quick fixes, ensuring long-term success for your channel.",
          }
          
        ],
        smarterWay: {
          title: "Instagram™ Account",
          type: "account",
          features: [
            "Strategic personalized account promotion",
            "Respect platform compliance guidelines", 
            "For beginners or experienced creators"
          ]
        }
      }
    },
  };

  // @ts-ignore
  const currentTheme = themes[theme];
  const { cssVars, brand } = currentTheme;

  const [url, setUrl] = useState("");
  const [selector, setSelector] = useState("");
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // const handleScreenshot = async () => {
  //   if (!url) {
  //     setError("Please enter a valid URL.");
  //     return;
  //   }
  //   // Client-side URL validation: must start with http:// or https:// and be a valid URL
  //   if (!/^https?:\/\//i.test(url.trim())) {
  //     setError("URL must start with http:// or https://");
  //     return;
  //   }
  //   try {
  //     new URL(url.trim());
  //   } catch {
  //     setError("Invalid URL format. Please enter a valid URL.");
  //     return;
  //   }
  //   setLoading(true);
  //   setError(null);
  //   setScreenshot(null);

  //   try {
  //     const params = new URLSearchParams({
  //       url: url.trim(),
  //       viewport: viewport
  //     });
      
  //     if (selector.trim()) {
  //       params.append('selector', selector.trim());
  //     }
      
  //     const response = await fetch(
  //       `/api/screenshot?${params.toString()}`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to capture screenshot.");
  //     }
  //     const blob = await response.blob();
  //     setScreenshot(URL.createObjectURL(blob));
  //   } catch (err) {
  //     setError(
  //       err instanceof Error ? err.message : "An unknown error occurred."
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)', ...cssVars }}>
      {/* Header */}
      {/* @ts-ignore */}
      <Header theme={theme} brand={brand} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight serif-headline primary-textcolor">
                Finally... A Smarter Way to Increase Your{" "}
                <span className="solid-gradient-text serif-headline">{brand.platform} {brand.description}</span>
              </h1>
              
              <p className="text-lg leading-relaxed sans-serif-text" style={{ color: 'var(--color-text-secondary)' }}>
                Done-for-you marketing support to get your account in front of new audiences without the hassle.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {/* @ts-ignore */}
              {brand.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="sans-serif-text" style={{ color: 'var(--color-text-primary)' }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/trial"
                className="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity sans-serif-text"
              >
                START MY FREE 3-DAY TRIAL
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-full">
            <ImageWithPhone
                image={brand.image}
                phonePosition="landing-page"
                phoneImage={brand.phoneImage}
                phoneImageAlt={brand.phoneImageAlt}
            />
          </div>
        </div>
      </main>

      {/* Trusted by Section */}
      <TrustedBySection />

      {/* Channel Marketing Showcase Section */}
      <ChannelMarketing brand={brand} />

      {/* Why Growing Section */}
      <WhyGrowing brand={brand} />

      {/* Simple Steps Section */}
      <SimpleSteps brand={brand} />

      {/* Feedbacks Section */}
      <Feedbacks brand={brand} />

      {/* New Audience Section */}
      <NewAudience brand={brand} />

      {/* Promotion Toolkit Section */}
      <PromotionToolkit brand={brand}/>

      {/* What Happens Section */}
      <WhatHappens brand={brand} />

      {/* Transparent Price Section */}
      {/* <TransparentPrice brand={brand} /> */}


      {/* Pricing Section */}
      <PricingSection brand={brand} />

      {/* Smarter Way Section */}
      <SmarterWay brand={brand} />

      {/* FAQ Section */}
      <FAQ brand={brand} />

      {/* Contact Us Section */}
      <ContactUs />

      {/* <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Screenshot Preview
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Enter a URL below to generate a screenshot
        </p>
        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://vercel.com"
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black focus:outline-none"
            />
            <select
              value={viewport}
              onChange={(e) => setViewport(e.target.value as "desktop" | "mobile")}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black focus:outline-none bg-white"
            >
              <option value="desktop">Desktop</option>
              <option value="mobile">Mobile</option>
            </select>
            <button
              onClick={handleScreenshot}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {loading ? "Capturing..." : "Capture"}
            </button>
          </div>
          <div>
            <input
              type="text"
              value={selector}
              onChange={(e) => setSelector(e.target.value)}
              placeholder="CSS Selector (optional) - e.g., h1, main, #page-content"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black focus:outline-none"
            />
            <p className="text-sm text-gray-500 mt-1">
              Leave empty to capture the full page, or specify a CSS selector (h1, main, header)
            </p>
          </div>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {screenshot && (
          <div className="mt-8 border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-2xl font-semibold p-4 bg-gray-100 border-b text-black">
              Screenshot Preview
            </h2>
            <img
              src={screenshot || "/placeholder.svg"}
              alt="Website screenshot"
              className="w-full"
            />
          </div>
        )}
      </div>
    </main> */}

      {/* Footer */}
      <Footer brand={brand} />
    </div>
  );
}
