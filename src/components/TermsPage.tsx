import { resolveTheme } from "@/themes";
import Footer from "./Footer";
import Header from "./Header";

interface TermsPageProps {
    theme: 'tubemagnet' | 'instalever' | 'xgrowlab' | 'streameredge' | 'bolderbook' | 'omgtok' | 'earforge';
  }
  
  export default function TermsPage({ theme }: TermsPageProps) {

    const currentTheme = resolveTheme(theme);
    const { cssVars, brand } = currentTheme;

    return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)', ...cssVars }}>
        <Header brand={brand} />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 serif-headline primary-textcolor">
                Terms and Conditions
            </h1>
            
            <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">OVERVIEW</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        This website is operated by Verendus LLC. Throughout the site, the terms &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to Verendus LLC. Verendus LLC offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        By visiting our site and/ or purchasing something from us, you engage in our &quot;Service&quot; and agree to be bound by the following terms and conditions (&quot;Terms of Service&quot;, &quot;Terms&quot;), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">CANCELLATION POLICY</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You may cancel your subscription at any time without any penalties or fees. Upon requesting cancellation, billing will cease immediately, and no further charges will be applied.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        <strong>NOTICE PERIOD:</strong> To avoid a subscription renewal, you must cancel your subscription at least one day prior to the next billing date.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        <strong>CUSTOMER SUPPORT CONTACT METHOD:</strong> For assistance with cancellations, you can contact us using the contact form available at the bottom of our page.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">REFUND POLICY</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        <strong>30 Day Satisfaction Guarantee:</strong> Our refund policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can&apos;t offer you a refund under any circumstance. To complete your refund, we require a receipt or proof of purchase. Any refund request that is more than 30 days after purchase will be taken on a case by case basis.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">ONLINE STORE TERMS</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You must not transmit any worms or viruses or any code of a destructive nature.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        A breach or violation of any of the Terms will result in an immediate termination of your Services.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">SPECIAL ADMONITIONS OF INTERNATIONAL USE</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        Recognizing the global nature of the Internet, you agree to comply with any and all applicable local, state, national or international laws and regulations regarding online conduct, acceptable Content and use of the Service.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">GENERAL CONDITIONS</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        We reserve the right to refuse service to anyone for any reason at any time.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">MODIFICATIONS TO SERVICE</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        Verendus LLC reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that Verendus LLC shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">PAYMENT PROCESSING</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        The Processor&apos;s role is to accept and process credit card, debit card and other types of payments (collectively &quot;Cards&quot;) with respect to sales of the products and services of Verendus LLC through internet-based transactions (&quot;Card Not Present Transactions&quot; or &quot;CNP Transactions&quot;).
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        By accepting this Agreement, you authorize Verendus LLC to charge such Cards for products and services purchased on the website.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">PRODUCTS OR SERVICES</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected. Results, including the quantity, quality and legitimacy of followers, likes, subscribers, and any other form of social media engagement received on behalf of the service, is not guaranteed in any way. Verendus LLC and its parent, subsidiaries, affiliates, officers, directors, shareholders, employees, agents, attorneys, partners, licensors and other representatives shall not be liable for any complaints pertaining to the quality, quantity or legitimacy of followers, likes, subscribers, and any other form of social media engagement received on behalf of the service.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        The customer agrees to alternative methods of service. Alternative methods of account growth may be employed by the company at its discretion. Alternative methods include but are not limited to external account promotions across subsidiary websites and/or external websites. These methods aim to increase the followers, likes, subscribers and other forms of social media engagement on the client&apos;s account. Furthermore, we can&apos;t guarantee the continuous, uninterrupted or error-free operability of the services. We make no guarantee that any increase in followers, likes, or any other form of social media engagement delivered to the client will be retained and represented on their account into perpetuity. Verendus LLC and its subsidiaries are not liable for damages incurred due to a decrease in followers, likes or other forms of social media engagement experienced by the client at any point in time.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">ACCURACY OF BILLING AND ACCOUNT INFORMATION</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        For more detail, please review our Refund Policy.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">PROHIBITED USES</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">DISCLAIMER OF WARRANTIES</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You expressly understand and agree that your use of the service is at your sole risk. The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Verendus LLC and its parent, subsidiaries, affiliates, officers, directors, shareholders, employees, agents, attorneys, partners, licensors and other representatives expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement. Verendus LLC and its parent, subsidiaries, affiliates, officers, directors, shareholders, employees, agents, attorneys, partners, licensors and other representatives make no warranty that: (i) the service will meet your requirements; (ii) the service will be uninterrupted, timely, secure or error-free; (iii) the results that may be obtained from the use of the service will be accurate or reliable; (iv) the quality of any products, services, information or other material purchased or obtained by you through the service will meet your expectations; and (v) any errors in the software will be corrected. Any material downloaded or otherwise obtained through the use of the service is accessed at your own discretion and risk, and you will be solely responsible for any damage to your computer system or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from Verendus LLC or through or from the service shall create any warranty not expressly stated in the TOS.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">LIMITATION OF LIABILITY</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You expressly understand and agree that Verendus LLC and its parent, subsidiaries, affiliates, officers, directors, shareholders, employees, agents, attorneys, partners, licensors and other representatives shall not be liable to you for any direct, indirect, incidental, special, consequential or exemplary damages, including, but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if Verendus LLC has been advised of the possibility of such damages), resulting from: (i) the use or the inability to use the service; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the service; (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third party on the service; (v) the quality, quantity or legitimacy of followers, likes, subscribers, and any other form of social media engagement received on behalf of the service; or (vi) any other matter relating to the service;
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">INDEMNITY</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You agree to indemnify and hold Verendus LLC and its parent, subsidiaries, affiliates, officers, directors, shareholders, agents, attorneys, employees, partners, licensors and other representatives harmless from any claim or demand, including reasonable attorneys&apos; fees, made by any third party due to or arising out of, or in connection with, (i) Content you submit, post, transmit or otherwise make available through the Service, (ii) your use or access of the Service, (iii) your connection to the Service, (iv) your violation of the TOS, (v) your violation of any rights of another, (vi) any taxes arising in connection with your purchase or use of the Service in any jurisdiction, domestic or otherwise, including, without limitation, sales and use tax, (vii) the quality, quantity or legitimacy of followers, likes, subscribers, and any other form of social media engagement received on behalf of the service, or (viii) any other matter relating to the service
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">ARBITRATION</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        The parties agree that any controversy or claim between them or against any agent, employee, successor, or assign of the other, whether related to these Terms of Use or your use of the Site or otherwise, and any claim or dispute related to these Terms of Use or your use of the Site or duties contemplated under these Terms of Use, including the validity of this arbitration clause (the &quot;Claim&quot;), shall be settled by binding arbitration administered by the American Arbitration Association in accordance with the then current Commercial Arbitration Rules and this provision and shall be aired in the Commonwealth of Puerto Rico.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You may bring claims only on your own behalf. Neither you nor Verendus LLC will participate in a class action or class-wide arbitration for any claims covered by this agreement. You also agree not to participate in claims brought in a private attorney general or representative capacity, or consolidated claims involving another person&apos;s account, if Verendus LLC is a party to the proceeding. Any provision of applicable law notwithstanding, the arbitrator will not have authority to award damages, remedies or awards that conflict with these Terms of Use.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">SEVERABILITY</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">TERMINATION</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">ENTIRE AGREEMENT</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).
                    </p>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">GOVERNING LAW</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the state of Delaware.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">CHANGES TO TERMS OF SERVICE</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 sans-serif-text primary-textcolor">STATUTE OF LIMITATION</h2>
                    <p className="mb-4 sans-serif-text secondary-textcolor leading-relaxed">
                        You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the Service or the TOS must be filed within one (1) year after such claim or cause of action arose or be forever barred. The section titles in the TOS are for convenience only and have no legal or contractual effect.
                    </p>
                </div>
            </div>
        </main>
        <Footer brand={brand} />
    </div>
    );
  }
