import { resolveTheme } from "@/themes";
import Footer from "./Footer";
import Header from "./Header";

interface LandingPageProps {
    theme: 'tubemagnet' | 'instalever' | 'xgrowlab' | 'streameredge' | 'bolderbook' | 'omgtok' | 'earforge';
  }
  
  export default function PrivacyPage({ theme }: LandingPageProps) {

    const currentTheme = resolveTheme(theme);
    const { cssVars, brand } = currentTheme;

    

    return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)', ...cssVars }}>
        <Header brand={brand} />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 serif-headline primary-textcolor">
                Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">Overview</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        This website is operated by {brand.nameFirst} LLC. By visiting any websites operated by {brand.nameFirst} LLC, you are consenting to our privacy policy. Throughout the site, the terms &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to {brand.nameFirst} LLC. {brand.nameFirst} LLC is committed to protecting your privacy online. This Privacy Policy describes the personal information we collect through this website. The terms &quot;user,&quot; &quot;you,&quot; and &quot;your&quot; refer to site visitors, customers, and any other users of the site.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        The term &quot;personal information&quot; is defined as information that you voluntarily provide to us that personally identifies you and/or your contact information, such as your name, phone number, and email address.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        Use of our websites, including all materials presented herein and all online services provided by {brand.nameFirst} LLC. is subject to the following Privacy Policy. This Privacy Policy applies to all site visitors, customers, and all other users of the site. By using the Site or Service, you agree to this Privacy Policy, without modification, and acknowledge reading it.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">Information We Collect</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        <strong>Product Orders.</strong> We collect a variety of personal information with each product order.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">This includes:</p>
                    <ul className="list-disc pl-6 mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        <li className="mb-2">Your name, address, email address, phone number and other personal information. This information is shared with our e-commerce software providers to ensure completion of your order. We use your email to communicate with you about your order and to manage our customer relationship with you. When you place an order you may be added to our mailing list from which you can unsubscribe at any time using the unsubscribe link in each email.</li>
                        <li className="mb-2">Your payment information. We collect payment information for each order but we do not store payment information on {brand.nameFirst} LLC servers. Your payment information is securely communicated to and processed via our e-commerce software providers.</li>
                    </ul>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        We only collect the personal information you voluntarily provide to us which may include:
                    </p>
                    <ul className="list-disc pl-6 mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        <li className="mb-2">Your email address in order to subscribe to our mailing list, sign up for a consultation call, or sign up for one of our interactive forums;</li>
                        <li className="mb-2">Your name, email address, website in order to post a comment on our blog; and your social media profiles in order to share an article from our blog on social media via a third party provider;</li>
                        <li className="mb-2">Your full name, email address and message in order to contact us via our contact form.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">Activity</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        We may record information relating to your use of the Site, such as the searches you undertake, the pages you view, your browser type, IP address, requested URL, referring URL, and timestamp information. We use this type of information to administer the Site and provide the highest possible level of service to you. We also use this information in the aggregate to perform statistical analyses of user behavior and characteristics in order to measure interest in and use of the various areas of the Site.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">Cookies</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        We may send cookies to your computer in order to uniquely identify your browser and improve the quality of our service. The term &quot;cookies&quot; refers to small pieces of information that a website sends to your computer&apos;s hard drive while you are viewing the Site. We may use both session cookies (which expire once you close your browser) and persistent cookies (which stay on your computer until you delete them). You have the ability to accept or decline cookies using your web browser settings. If you choose to disable cookies, some areas of the Site may not work properly or at all.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">How Your Information Is Used</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        The information you provide is used to process transactions, send periodic emails, and improve the service we provide. We do share your information with trusted third parties who assist us in operating our website, conducting our business and servicing clients and visitors. These trusted third parties agree to keep this information confidential. Your personal information will never be shared with unrelated third parties.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">Third Party Links</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        The Site may contain links to third party websites. Except as otherwise discussed in this Privacy Policy, this document only addresses the use and disclosure of information we collect from you on our Site. Other sites accessible through our site via links or otherwise have their own policies in regard to privacy. We are not responsible for the privacy policies or practices of third parties.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">Security</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        We maintain security measures to protect your personal information from unauthorized access, misuse, or disclosure. However, no exchange of data over the Internet can be guaranteed as 100% secure. While we make every effort to protect your personal information shared with us through our Site, you acknowledge that the personal information you voluntarily share with us through this Site could be accessed or tampered with by a third party. You agree that we are not responsible for any intercepted information shared through our Site without our knowledge or permission. Additionally, you release us from any and all claims arising out of or related to the use of such intercepted information in any unauthorized manner.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">Children</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        To access or use the Site, you must be 18 years old or older and have the requisite power and authority to enter into this Privacy Policy. Children under the age of 18 are prohibited from using the Site.
                    </p>
                </div>
            </div>
        </main>
        <Footer brand={brand} />
    </div>
    );
  }