import Link from "next/link";
import React from "react";

export function CheckoutFooter() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-77c3074 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="77c3074"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-168a408"
          data-id="168a408"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-76c2002 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="76c2002"
              data-element_type="widget"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <a href="#top">
                      <span className="elementor-icon-list-text">Home</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <a href="#pricing">
                      <span className="elementor-icon-list-text">Free Trial</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <a href="#contact">
                      <span className="elementor-icon-list-text">Contact</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <Link href="/terms/">
                      <span className="elementor-icon-list-text">
                        Terms &amp; Condition
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <Link href="/privacy/">
                      <span className="elementor-icon-list-text">
                        Privacy Policy
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-fd8b733 elementor-widget elementor-widget-heading"
              data-id="fd8b733"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default">
                  © 2025 TubeKarma. All Rights Reserved.
                </div>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-67d80fd elementor-widget elementor-widget-html"
              data-id="67d80fd"
              data-element_type="widget"
              data-widget_type="html.default"
            >
              <div className="elementor-widget-container">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n  #wc-authorize-net-cim-credit-card-account-number {\n    background-color: #d3d3d3e0 !important;\n  }\n"
                  }}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

