"use client";

import { useState } from "react";
import HeroSection from "./HeroSection";
import TrustedBySection from "./TrustedBySection";
import NumbersSection from "./NumbersSection";
import GrowingWithUsSection from "./GrowingWithUsSection";
import StepsSection from "./StepsSection";
import FasterGrowSection from "./FasterGrowSection";
import GrowYourChannelSection from "./GrowYourChannelSection";
import GrowsToolkitSection from "./GrowsToolkitSection";
import MonetizationStepsSection from "./MonetizationStepsSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import FooterSection from "./FooterSection";
import TestimonialLineSection from "./TestimonialLineSection";
import Nav from "./Nav";
import LanguageSwitcher from "./LanguageSwitcher";

export default function TubeKarmaLanding() {
    return (
        <main className="home page-template-default page page-id-1812559 theme-stratusx translatepress-en_US elementor-default elementor-kit-1574451 elementor-page elementor-page-1812559 th-sticky-header loaded th-touch e--ua-isTouchDevice e--ua-blink e--ua-chrome e--ua-webkit">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-dark-grayscale">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0 0.49803921568627" />
          <feFuncG type="table" tableValues="0 0.49803921568627" />
          <feFuncB type="table" tableValues="0 0.49803921568627" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-grayscale">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0 1" />
          <feFuncG type="table" tableValues="0 1" />
          <feFuncB type="table" tableValues="0 1" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-purple-yellow">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR
            type="table"
            tableValues="0.54901960784314 0.98823529411765"
          />
          <feFuncG type="table" tableValues="0 1" />
          <feFuncB
            type="table"
            tableValues="0.71764705882353 0.25490196078431"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-blue-red">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0 1" />
          <feFuncG type="table" tableValues="0 0.27843137254902" />
          <feFuncB
            type="table"
            tableValues="0.5921568627451 0.27843137254902"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-midnight">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0 0" />
          <feFuncG type="table" tableValues="0 0.64705882352941" />
          <feFuncB type="table" tableValues="0 1" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-magenta-yellow">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0.78039215686275 1" />
          <feFuncG type="table" tableValues="0 0.94901960784314" />
          <feFuncB
            type="table"
            tableValues="0.35294117647059 0.47058823529412"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-purple-green">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR
            type="table"
            tableValues="0.65098039215686 0.40392156862745"
          />
          <feFuncG type="table" tableValues="0 1" />
          <feFuncB type="table" tableValues="0.44705882352941 0.4" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-blue-orange">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0.098039215686275 1" />
          <feFuncG type="table" tableValues="0 0.66274509803922" />
          <feFuncB
            type="table"
            tableValues="0.84705882352941 0.41960784313725"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <Nav />
  <div className="wrap" role="document">
    <div className="content">
      <div className="inner-container">
        <h1 className="entry-title">
          NP – FB Tubekarma LP1 – Video 1 – Winner
        </h1>
        <section className="content-editor">
          <div
            data-elementor-type="wp-page"
            data-elementor-id={1812559}
            className="elementor elementor-1812559"
            data-elementor-post-type="page"
          >
            <HeroSection />
            <TrustedBySection />
            <NumbersSection />
            <GrowingWithUsSection />
            <StepsSection />
            <FasterGrowSection />
            <GrowYourChannelSection />
            <GrowsToolkitSection />
            <MonetizationStepsSection />
            <PricingSection />
            <FAQSection />
            <TestimonialLineSection />
          </div>
        </section>
      </div>
    </div>
  </div>
  <FooterSection />
  <template id="tp-language" data-tp-language="en_US" />
  <style
    id="ibx-notification-1261-style"
    dangerouslySetInnerHTML={{
      __html:
        "\n    .ibx-notification-popup-1261 {\n      background: #ffffff;\n      color: #000000;\n      border-radius: 50px;\n      border-width: 1px;\n      border-style: solid;\n      border-color: #dddddd;\n      -webkit-box-shadow: 0 0 25px 0px rgba(153, 153, 153, 0.3);\n      -moz-box-shadow: 0 0 25px 0px rgba(153, 153, 153, 0.3);\n      -o-box-shadow: 0 0 25px 0px rgba(153, 153, 153, 0.3);\n      box-shadow: 0 0 25px 0px rgba(153, 153, 153, 0.3);\n    }\n\n    .ibx-notification-popup-1261 .ibx-notification-popup-title,\n    .ibx-notification-popup-1261 .ibx-notification-popup-review-name,\n    .ibx-notification-popup-1261 .ibx-notification-popup-review-text {\n      color: #000000;\n    }\n\n    .ibx-notification-popup-1261 .ibx-notification-popup-rating span {\n      color: #000000;\n    }\n\n    .ibx-notification-popup--1261 .ibx-notification-popup-close {\n      color: #000000;\n    }\n\n    .ibx-notification-popup-1261 .ibx-notification-popup-img {\n      height: 70px;\n      width: 70px;\n    }\n\n    .ibx-notification-popup-1261 .ibx-notification-popup-img img {\n      border-radius: 50px;\n      max-height: 70px;\n    }\n\n    .ibx-notification-popup-1261 .ibx-notification-popup-img.has-letter {\n      border-radius: 50px;\n    }\n\n    .ibx-notification-popup-1261 .ibx-notification-popup-text {\n      margin-top: 0px;\n      margin-bottom: 0px;\n      margin-left: 10px;\n      margin-right: 10px;\n    }\n  "
    }}
  />
  <LanguageSwitcher />
  <div>
    <div
      className="grecaptcha-badge"
      data-style="bottomright"
      style={{
        width: 256,
        height: 60,
        display: "block",
        transition: "right 0.3s",
        position: "fixed",
        bottom: 14,
        right: "-186px",
        boxShadow: "gray 0px 0px 5px",
        borderRadius: 2,
        overflow: "hidden"
      }}
    >
      <textarea
        id="g-recaptcha-response-100000"
        name="g-recaptcha-response"
        className="g-recaptcha-response"
        style={{
          width: 250,
          height: 40,
          border: "1px solid rgb(193, 193, 193)",
          margin: "10px 25px",
          padding: 0,
          resize: "none",
          display: "none"
        }}
        defaultValue={""}
      />
    </div>
  </div>
  <meta
    name="facebook-domain-verification"
    content="nohyzf5x2ln0ngcm579kc4wut090n3"
  />
  <span id="elementor-device-mode" className="elementor-screen-only" />
  <svg style={{ display: "none" }} className="e-font-icon-svg-symbols" />
  <a
    id="scrollUp"
    href="#top"
    style={{ display: "none", position: "fixed", zIndex: 2147483647 }}
  />
</main>

    );
}

