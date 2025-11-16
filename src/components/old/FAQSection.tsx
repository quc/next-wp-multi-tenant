"use client";

import { useState } from "react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface FAQItem {
    id: number;
    question: string;
    answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "WHAT IS YOUR REFUND AND CANCELLATION POLICY?",
        answer: (
            <>
                <p>
                    Since we operate on a month-to-month basis, you
                    can cancel your account at any time, and we will
                    continue to grow your account until the end of
                    your billing cycle.
                </p>
                <p>
                    We also offer a 30 day, no questions asked,
                    refund policy.
                </p>
                <p>
                    What this means is that you can claim a full
                    refund anytime during the first 30 days of
                    signing up with us. This provides you with a
                    risk-free opportunity of testing our services
                    out to see how well they work for you.
                </p>
            </>
        ),
    },
    {
        id: 2,
        question: "HOW DO YOU GROW ACCOUNTS AND ATTRACT SUBSCRIBERS?",
        answer: (
            <>
                <p>
                    Our team of expert digital marketers uses their
                    extensive knowledge of the YouTube™ algorithm to
                    bring you an organic YouTube™ growth service
                    that is as effective as it is thorough. A
                    dedicated account manager is assigned to you
                    once you decide to sign up with TubeKarma, who
                    then deeply studies your niche market and
                    audience preferences and then create a strategy
                    based on the insights gathered.
                </p>
                <p>
                    Depending on your package, 40-200 accounts are
                    generated for your channel. These accounts then
                    send messages to users on different social media
                    platforms (based on consumer insights about who
                    is most likely to engage) and asks them to
                    subscribe you. This targeted approach allows you
                    to gain subscribers in far less time than you
                    would have otherwise.
                </p>
            </>
        ),
    },
    {
        id: 3,
        question: "IS THIS SERVICE 100% SAFE?",
        answer: (
            <>
                <p>
                    <strong>Definitely</strong>! TubeKarma uses
                    targeted strategies to help you gain organic and
                    real subscribers. We always stay well within the
                    bounds of YouTube™&apos;s terms of service. TubeKarma
                    is a legit social media marketing agency, not
                    just a superficial growth service.
                </p>
                <p>
                    With our specialization in YouTube™ growth
                    strategies, we have helped over 7,500 accounts
                    grow YouTube™ channel. And we can help you too!
                    All our services are safely within YouTube™&apos;s
                    terms of service, and we pride ourselves on
                    providing organic growth for our customers.
                </p>
            </>
        ),
    },
    {
        id: 4,
        question: "WILL THIS SERVICE WORK FOR ME?",
        answer: (
            <>
                <p>
                    <strong>It sure will!</strong> The only
                    requirement is that you should have the desire
                    to get subscribers for YouTube™ – and we&apos;ll take
                    it from there. We have helped customers across
                    numerous niches and industries successfully grow
                    their YouTube™ channels tremendously.
                </p>
                <p>
                    Whether you&apos;re an influencer, a brand, an
                    agency, or an individual from any part of the
                    world, we have something for you! All our
                    strategies are tailored to suit your specific
                    needs after careful study of your target market.
                    Rest assured that you&apos;ll get only relevant and
                    real subscribers.
                </p>
            </>
        ),
    },
    {
        id: 5,
        question: "How Many Subscribers Will My Account Gain?",
        answer: (
            <>
                <p>
                    That depends on many factors, such as the
                    industry you&apos;re operating in, the
                    products/services you&apos;re offering, and your
                    overall YouTube™ strategy. Needless to say, your
                    content is the most valuable factor in deciding
                    how many subscribers you will gain. A true
                    organic growth service will never promise you a
                    fixed number of subscribers because they know
                    that it depends on many variables outside of
                    their control.
                </p>
                <p>
                    As a general rule, we work on customizing a
                    growth strategy that will suit the factors
                    you&apos;re already operating with. Experience has
                    shown that TubeKarma customers gain anywhere
                    between 3000 to 5000+ subscribers per month. If
                    you&apos;d like to consult with us about the best
                    growth strategy for you, you can fill out our
                    contact form below to get in touch.
                </p>
            </>
        ),
    },
    {
        id: 6,
        question: "WHAT IF I WANT TO CANCEL MY FREE TRIAL?",
        answer: (
            <>
                <p>
                    You may cancel your subscription or free trial
                    anytime. We operate on a week-to-week basis and
                    will continue growing your account until the end
                    of the billing period.
                </p>
                <p>
                    Use our YouTube growth service free trial to try
                    us out for 3 days and see what we have to offer.
                    Cancel anytime during the trial period, and you
                    won&apos;t pay a dime.
                </p>
            </>
        ),
    },
    {
        id: 7,
        question: "WHAT'S THE DIFFERENCE BETWEEN PACKAGES?",
        answer: (
            <>
                <p>
                    We have created a variety of standard packages
                    at different prices to suit different budgets
                    and customer requirements. We also offer
                    customized packages for customers looking for
                    something specific. As you might expect, higher
                    packages offer faster subscriber growth and
                    better results. That&apos;s not to say that lower
                    packages are not worth the money – they are
                    still better than what competitors are offering.
                </p>
                <p>
                    If you want to discuss any particular
                    requirement you have, our representatives are
                    always available to help you and guide you
                    towards what will work best for you. You can
                    also fill out the contact form below to reach
                    out to us for anything specific.
                </p>
            </>
        ),
    },
];

export default function FAQ() {
    const [faqImageRef, isFaqInView] = useInViewAnimation({ triggerOnce: true });
    const [openFaqId, setOpenFaqId] = useState<number | null>(1);

    const handleToggleFaq = (faqId: number) => {
        setOpenFaqId((prevId) => (prevId === faqId ? null : faqId));
    };

    return (
        <div
            className="elementor-element elementor-element-06de85d e-flex e-con-boxed e-con"
            data-id="06de85d"
            data-element_type="container"
            id="faqs"
            data-settings='{"content_width":"boxed"}'
        >
            <div className="e-con-inner">
                <div
                    className="elementor-element elementor-element-e367016 e-con-full e-flex e-con"
                    data-id="e367016"
                    data-element_type="container"
                    data-settings='{"content_width":"full"}'
                >
                    <div
                        className="elementor-element elementor-element-2c0441f e-con-full e-flex e-con"
                        data-id="2c0441f"
                        data-element_type="container"
                        data-settings='{"content_width":"full"}'
                    >
                        <div
                            className="elementor-element elementor-element-a937d48 elementor-widget elementor-widget-heading"
                            data-id="a937d48"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                    Frequently Asked Questions
                                </h2>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-250ee22 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                            data-id="250ee22"
                            data-element_type="widget"
                            data-widget_type="text-editor.default"
                        >
                            <div className="elementor-widget-container">
                                <p>
                                    Need more info about how TubeKarma works? You can find
                                    it here.
                                </p>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-187ccf0 elementor-hidden-mobile elementor-widget elementor-widget-image"
                            data-id="187ccf0"
                            data-element_type="widget"
                            data-widget_type="image.default"
                        >
                            <div className="elementor-widget-container">
                                <img
                                    ref={faqImageRef as React.RefObject<HTMLImageElement>}
                                    decoding="async"
                                    width={504}
                                    height={513}
                                    src="assets/faq-img.png"
                                    className={`elementor-animation-bob attachment-full size-full wp-image-1786176 ${isFaqInView ? "bob-in-view" : ""}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-003e654 e-con-full e-flex e-con"
                        data-id="003e654"
                        data-element_type="container"
                        data-settings='{"content_width":"full"}'
                    >
                        <div
                            className="elementor-element elementor-element-1937500 elementor-widget elementor-widget-accordion"
                            data-id={1937500}
                            data-element_type="widget"
                            data-widget_type="accordion.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="elementor-accordion">
                                    {faqData.map((faq) => {
                                        const isOpen = openFaqId === faq.id;
                                        return (
                                            <div key={faq.id} className="elementor-accordion-item">
                                                <h5
                                                    id={`elementor-tab-title-${faq.id}`}
                                                    className={`elementor-tab-title ${isOpen ? "elementor-active" : ""}`}
                                                    data-tab={faq.id}
                                                    role="button"
                                                    aria-controls={`elementor-tab-content-${faq.id}`}
                                                    aria-expanded={isOpen}
                                                    tabIndex={0}
                                                    aria-selected={isOpen}
                                                    onClick={() => handleToggleFaq(faq.id)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter" || e.key === " ") {
                                                            e.preventDefault();
                                                            handleToggleFaq(faq.id);
                                                        }
                                                    }}
                                                >
                                                    <span
                                                        className="elementor-accordion-icon elementor-accordion-icon-right"
                                                        aria-hidden="true"
                                                    >
                                                        <span className="elementor-accordion-icon-closed">
                                                            <i className="fas fa-plus" />
                                                        </span>
                                                        <span className="elementor-accordion-icon-opened">
                                                            <i className="fas fa-minus" />
                                                        </span>
                                                    </span>
                                                    <a
                                                        className="elementor-accordion-title"
                                                        tabIndex={0}
                                                    >
                                                        {faq.question}
                                                    </a>
                                                </h5>
                                                <div
                                                    id={`elementor-tab-content-${faq.id}`}
                                                    className={`elementor-tab-content elementor-clearfix ${isOpen ? "elementor-active" : ""}`}
                                                    data-tab={faq.id}
                                                    role="region"
                                                    aria-labelledby={`elementor-tab-title-${faq.id}`}
                                                    style={{ display: isOpen ? "block" : "none" }}
                                                >
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-7b02b37 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image"
                            data-id="7b02b37"
                            data-element_type="widget"
                            data-widget_type="image.default"
                        >
                            <div className="elementor-widget-container">
                                <img
                                    ref={faqImageRef as React.RefObject<HTMLImageElement>}
                                    decoding="async"
                                    width={504}
                                    height={513}
                                    src="assets/faq-img.png"
                                    className={`elementor-animation-bob attachment-full size-full wp-image-1786176 ${isFaqInView ? "bob-in-view" : ""}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}