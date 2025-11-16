"use client";

import { useState } from "react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function Hero() {
  const [bannerImageRef, isBannerInView] = useInViewAnimation({ triggerOnce: true });
  const [plusImageRef, isPlusInView] = useInViewAnimation({ triggerOnce: true });

  return (
    <div
      className="elementor-element elementor-element-607520c e-con-full e-flex e-con"
      data-id="607520c"
      data-element_type="container"
      data-settings='{"content_width":"full","background_background":"gradient"}'
    >
      <div
        className="elementor-element elementor-element-1d340db e-flex e-con-boxed e-con"
        data-id="1d340db"
        data-element_type="container"
        data-settings='{"content_width":"boxed"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-7d77c58 e-con-full e-flex e-con"
            data-id="7d77c58"
            data-element_type="container"
            data-settings='{"content_width":"full"}'
          >
            <div
              className="elementor-element elementor-element-48ad2e9 e-flex e-con-boxed e-con"
              data-id="48ad2e9"
              data-element_type="container"
              data-settings='{"content_width":"boxed"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-9697a51 elementor-widget elementor-widget-text-editor"
                  data-id="9697a51"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p className="has-white-color">5/5</p>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-aae44c9 elementor--star-style-star_unicode elementor-widget elementor-widget-star-rating"
                  data-id="aae44c9"
                  data-element_type="widget"
                  data-widget_type="star-rating.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-star-rating__wrapper">
                      <div
                        className="elementor-star-rating"
                        title="5/5"
                        itemType="http://schema.org/Rating"
                        itemScope={true}
                        itemProp="reviewRating"
                      >
                        <i className="elementor-star-full">★</i>
                        <i className="elementor-star-full">★</i>
                        <i className="elementor-star-full">★</i>
                        <i className="elementor-star-full">★</i>
                        <i className="elementor-star-full">★</i>{" "}
                        <span
                          itemProp="ratingValue"
                          className="elementor-screen-only has-white-color"
                        >
                          5/5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-be00e7e elementor-widget elementor-widget-text-editor"
                  data-id="be00e7e"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p className="has-white-color">
                      by <strong>2478+</strong> Happy TubeKarma Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-b4731ac elementor-widget elementor-widget-text-editor"
              data-id="b4731ac"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p className="has-white-color">The #1 Organic YouTube™ Growth Service</p>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-f0a7426 elementor-widget__width-initial elementor-widget elementor-widget-heading"
              data-id="f0a7426"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default">
                  Get 5,000 YouTube™ Subscribers Every Month
                </h1>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-9a38222 elementor-widget elementor-widget-text-editor"
              data-id="9a38222"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p className="has-white-color">
                  TubeKarma creates social accounts that reach out to
                  your ideal viewers. You make videos. We deliver
                  consistent and 100% organic subscriber growth.
                </p>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-647694c elementor-mobile-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="647694c"
              data-element_type="widget"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i
                        aria-hidden="true"
                        className="fas fa-check-circle"
                      />{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      100% compliant with YouTube™ TOS
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i
                        aria-hidden="true"
                        className="fas fa-check-circle"
                      />{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      Easy setup – just share your channel link and
                      preferred audience
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i
                        aria-hidden="true"
                        className="fas fa-check-circle"
                      />{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      AI finds and attracts your ideal audience 24/7
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-80ca4b6 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button"
              data-id="80ca4b6"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                    href="#pricing"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">
                        Start My 3 Day Free Trial
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-ed5e262 e-flex e-con-boxed e-con"
              data-id="ed5e262"
              data-element_type="container"
              data-settings='{"content_width":"boxed"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-c3848e0 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-image"
                  data-id="c3848e0"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      decoding="async"
                      width={120}
                      height={53}
                      src="assets/want-to-join.png"
                      className="attachment-large size-large wp-image-1785745 entered lazyloaded"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-3be1cb8 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                  data-id="3be1cb8"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p className="has-white-color">
                      Want To Join <strong>2478+</strong> Successful
                      Youtubers? Start Your 3 Day Free Trial.
                      <strong>6 spots left this week!</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-2382dd1 e-con-full e-flex e-con"
            data-id="2382dd1"
            data-element_type="container"
            data-settings='{"content_width":"full"}'
          >
            <div
              className="elementor-element elementor-element-3185776 elementor-widget elementor-widget-image"
              data-id={3185776}
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  ref={bannerImageRef as React.RefObject<HTMLImageElement>}
                  decoding="async"
                  width={1010}
                  height={694}
                  src="assets/bannerimg.png"
                  className={`elementor-animation-bob attachment-full size-full wp-image-1785744 entered lazyloaded ${isBannerInView ? "bob-in-view" : ""}`}
                  alt=""
                />
              </div>
            </div>
            <div
              className="elementor-element elementor-element-651daea elementor-absolute elementor-widget elementor-widget-image"
              data-id="651daea"
              data-element_type="widget"
              data-settings='{"_position":"absolute"}'
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  ref={plusImageRef as React.RefObject<HTMLImageElement>}
                  decoding="async"
                  width={147}
                  height={147}
                  src="assets/plus-200-percent.png"
                  className={`elementor-animation-bob attachment-large size-large wp-image-1785810 entered lazyloaded ${isPlusInView ? "bob-in-view" : ""}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-c5080c7 e-con-full e-flex e-con"
        data-id="c5080c7"
        data-element_type="container"
        data-settings='{"content_width":"full"}'
      >
        <div
          className="elementor-element elementor-element-57b5c7c elementor-widget elementor-widget-spacer"
          data-id="57b5c7c"
          data-element_type="widget"
          data-widget_type="spacer.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-spacer">
              <div className="elementor-spacer-inner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

