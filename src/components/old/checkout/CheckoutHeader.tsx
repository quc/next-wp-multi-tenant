import React from "react";

export function CheckoutHeader() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-4e499269 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="4e499269"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6c8b3d16"
          data-id="6c8b3d16"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-37ce25cd elementor-widget elementor-widget-image"
              data-id="37ce25cd"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  decoding="async"
                  width={1024}
                  height={287}
                  src="assets/logo.png"
                  className="attachment-large inline-block size-large wp-image-89980"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6b0916cd"
          data-id="6b0916cd"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-16c454e3 elementor-widget elementor-widget-image"
              data-id="16c454e3"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  decoding="async"
                  width={371}
                  height={50}
                  src="assets/checkout-tubekarma.png"
                  className="attachment-full inline-block wp-image-1297553"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-24c88c8e elementor-hidden-tablet elementor-hidden-phone"
          data-id="24c88c8e"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-7ef00872 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="7ef00872"
              data-element_type="widget"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <a href="mailto:support@tubekarma.com" target="_blank">
                      <span className="elementor-icon-list-icon">
                        <i className="fa fa-envelope-open" aria-hidden="true" />
                      </span>
                      <span className="elementor-icon-list-text" />
                    </a>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <a href="mailto:support@tubekarma.com" target="_blank">
                      <span className="elementor-icon-list-text">
                        24x7 Support <br />
                        support@tubekarma.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

