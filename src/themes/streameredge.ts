const theme ={
    cssVars: {
      '--gradient-primary': '#144579',
      '--gradient-primary-checkout-icon-bg': '#DAECFF',
      '--gradient-primary-start': '#144579',
      '--gradient-primary-end': '#144579',
      '--secondary-color': '#144579',
      '--color-text-primary': '#333333',
      '--color-text-secondary': '#555555',
      '--color-background': '#FFFFFF',
      '--color-background-secondary': '#F5F5F5',
      '--color-button-text': '#FFFFFF',
      '--color-border': '#E0E0E0',
      '--font-family-serif': 'var(--font-ubuntu), serif',
      '--font-family-sans-serif': 'Inter, sans-serif',
    },
    meta: {
      title: 'StreamerEdge',
      icon: '/assets/header.svg',
      description: 'StreamerEdge is a platform that helps you grow your Twitch™ channel with strategic promotion.',
      keywords: ['Twitch™', 'Channel', 'Promotion', 'Growth'],
      robots: {
        index: true,
        follow: true,
      },
      og: {
        title: 'StreamerEdge',
        description: 'StreamerEdge is a platform that helps you grow your Twitch™ channel with strategic promotion.',
        image: '/assets/og.png',
      },
      twitter: {
        title: 'StreamerEdge',
        description: 'StreamerEdge is a platform that helps you grow your Twitch™ channel with strategic promotion.',
        image: '/assets/og.png',
      },
    },
    brand: {
      name: 'StreamerEdge',
      nameFirst: 'streameredge',
      nameSecond: '',
      headerImage: '/assets/header.svg',
      headerImageClass: 'w-[256px] h-[30px]',
      headerIsShowName: false,
      platform: 'Twitch™',
      platformType: 'Channel',
      description: 'Channel Visibility',
      image: '/assets/chart.gif',
      phoneImage: '/assets/phone.gif',
      phoneImageAlt: 'phone image',
      features: [
        'Strategic personalized channel promotion',
        'Respect platform compliance guidelines',
        'For beginners or experienced streamers'
      ],
      notifications: [
        { name: 'Claire', time: '1m ago' },
        { name: 'Bill', time: '2m ago' },
        { name: 'Andrew', time: '3m ago' }
      ],
      video: 'https://www.youtube.com/embed/2t2ANJv5NuY?autoplay=1&rel=0&modestbranding=1',
      checkout: {
        summaryTitle: 'Premium Twitch™ Channel Growth Package',
        summaryText: 'Elevate your Twitch™ channel with strategic promotion that brings dedicated viewers who love your content.'
      },
      videoThumbnail: 'https://img.youtube.com/vi/2t2ANJv5NuY/maxresdefault.jpg',
      whyGrowing: {
        challenges: [
          `The algorithm usually favors big streamers, leaving many high-quality channels underexposed`,
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
        description: 'Twitch™ Channel Visibility',
        imgClass: '[transform:scaleX(-1)]',
        image: '/assets/img-two.png',
        firstStep: '1. Define Your Target Demographics',
        firstStepDescription: 'Share details about your target audience demographics. Our marketing team researches audience segments in your content category and develops external marketing strategies for Twitch™.',
        secondStep: '2. Share Your Content Pillars',
        secondStepDescription: 'We execute strategic promotion campaigns through our established network of creators, partnership specialists, and advertising channels to increase your Twitch™ channel\'s visibility across multiple platforms.',
        thirdStep: '3. Engage with Your Viewer',
        thirdStepDescription: 'Simply provide your Twitch™ channel link, and we\'ll handle the strategic promotion. No complicated setup. Our team works to introduce your channel to new audiences while you focus on creating content.',
      },
      pricing: {
        title: 'Growth Package',
        subtitle: 'Choose the perfect plan for your Twitch™ channel growth needs',
        packages: [
          {
            name: 'StreamerEdge Lite',
            price: '$69',
            description: 'Hands-off channel promotion to get more followers, engagement and reach. For personal channels looking for fast organic growth.',
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
            name: 'StreamerEdge Standard',
            price: '$99',
            description: 'Hands-off channel promotion to get more followers, engagement and reach. For upcoming influencers and businesses looking for significantly faster growth.',
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
            name: 'StreamerEdge Premium',
            price: '$199',
            description: 'Hands-off channel promotion to get more followers, engagement and reach. Exponential organic growth that easily outpaces your competition.',
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
        description: 'Twitch™ Channel',
        features: [
          {
            title: 'Strategic Audience Research',
            description: 'Our expert team studies your channel category and researches demographic segments in your channel category. We stay current with platform updates to continuously refine our external marketing approach for your channel.'
          },
          
          {
            title: 'Dedicated Support',
            description: 'A personal account manager collaborates with our round-the-clock support team to handle your channel promotion campaigns. We manage the strategic work while you concentrate on optimizing your content and engagement.'
          },
          
          {
            title: 'Secure & Simple',
            description: 'Your promotion campaigns operate through our secure platform with professional-grade data protection. No downloads needed, no passwords required – simply provide your Twitch™ channel details and we manage the marketing execution.'
          },

          {
            title: 'Launch Once, Market Consistently',
            description: 'Begin your marketing campaigns without the ongoing oversight that other services demand. Our straightforward pricing and hands-off approach gives you more time for what matters – sharing engaging content.'
          }
          
        ]
      },
      promotionToolkit: {
        type: 'Channel',
        image: '/assets/img-three.png',
        tool: 'StreamerEdge',
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
        platform: 'Twitch™ Channel',
        tool: 'StreamerEdge'
      },
      faq: [
        {
          question: "What Is Your Refund and Cancellation Policy",
          answer: "We offer a 3-day free trial with no commitment. You can cancel anytime during the trial period with zero charges. After the trial, you can cancel your subscription at any time with no complicated process - just one simple step and you're done. We also offer a satisfaction guarantee for our service quality.",
        },
        
        {
          question: "How Do You Increase My Twitch™ Channel Visibility?",
          answer: "We use strategic cross-platform marketing techniques including audience research, demographic analysis, and targeted promotion campaigns. Our team works through established networks of creators, partnership specialists, and advertising channels to introduce your channel to new audiences while respecting platform guidelines.",
        },
        
        {
          question: "Is This Service Platform Compliant?",
          answer: "Yes, absolutely. All our marketing strategies are designed to respect Twitch™'s terms of service and community guidelines. We use only platform-friendly methods and stay current with platform updates to ensure our external marketing approach remains compliant and effective.",
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
          title: "Twitch™ Channel",
        type: "channel",
        features: [
          "Strategic personalized channel promotion",
          "Respect platform compliance guidelines", 
          "For beginners or experienced streamers"
        ]
      }
    }
  }
  

export default theme;