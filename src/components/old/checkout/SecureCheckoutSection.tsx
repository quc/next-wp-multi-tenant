import React from "react";

export function SecureCheckoutSection() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-3c1f2c36 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="3c1f2c36"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-399763c9"
          data-id="399763c9"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-0a373ac elementor-widget-divider--view-line_text elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider"
              data-id="0a373ac"
              data-element_type="widget"
              data-widget_type="divider.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator">
                    <h6 className="elementor-divider__text elementor-divider__element">
                      Guaranteed Safe &amp; Secure Checkout{" "}
                    </h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-55165165 elementor-widget elementor-widget-image"
              data-id={55165165}
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  decoding="async"
                  width={719}
                  height={45}
                  src="assets/seal-1.png"
                  className="attachment-large size-large wp-image-1297410"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

