import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export function CheckoutFormSection() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
<section
  className="elementor-section elementor-top-section elementor-element elementor-element-731ba190 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  data-id="731ba190"
  data-element_type="section"
>
  <div className="elementor-container elementor-column-gap-default">
    <div
      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-49b53144"
      data-id="49b53144"
      data-element_type="column"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className="elementor-element elementor-element-696943a3 elementor-widget elementor-widget-wc-elements"
          data-id="696943a3"
          data-element_type="widget"
          id="sgcheckout"
          data-widget_type="wc-elements.default"
        >
          <div className="elementor-widget-container">
            <div className="woocommerce">
              <div className="woocommerce-notices-wrapper" />
              <div className="woocommerce-notices-wrapper" />
              <form
                name="checkout"
                method="post"
                className="checkout woocommerce-checkout"
                action="/checkout/"
                encType="multipart/form-data"
                noValidate={true}
              >
                <div className="col2-set" id="customer_details">
                  <div className="col-1">
                    <div className="woocommerce-billing-fields">
                      <h3>Billing details</h3>
                      <div className="custom-step-heading">
                        <div className="custom-heading-count">1</div>
                        <div className="custom-heading-content">
                          <h3>Contact Information</h3>
                          <h5>For Order Confirmation &amp; Customer Support</h5>
                        </div>
                      </div>
                      <div className="woocommerce-billing-fields__field-wrapper">
                        <p
                          className="form-row form-row-first validate-required validate-required"
                          id="billing_first_name_field"
                          data-priority={10}
                        >
                          <label htmlFor="billing_first_name" className="">
                            First Name&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="billing_first_name"
                              id="billing_first_name"
                              placeholder=""
                              defaultValue=""
                              autoComplete="given-name"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-last validate-required validate-required"
                          id="billing_last_name_field"
                          data-priority={20}
                        >
                          <label htmlFor="billing_last_name" className="">
                            Last name&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="billing_last_name"
                              id="billing_last_name"
                              placeholder=""
                              defaultValue=""
                              autoComplete="family-name"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide validate-required validate-required"
                          id="billing_phone_field"
                          data-priority={90}
                        >
                          <label htmlFor="billing_phone" className="">
                            Phone&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <PhoneInput
                              international
                              defaultCountry="US"
                              value={phoneNumber}
                              onChange={(value) => setPhoneNumber(value || "")}
                              className="input-text"
                              name="billing_phone"
                              id="billing_phone"
                              placeholder="E.g. +1234567890"
                              autoComplete="tel"
                            />
                            <input type="hidden" name="full_phone" value={phoneNumber || ""} />
                          </span>
                        </p>
                        <div id="valid-msg" className="hide">
                          ✓ Valid
                        </div>
                        <div id="error-msg" className="hide" />
                        <p />
                        <p
                          className="flex flex-col form-row form-row-first validate-required validate-required validate-email"
                          id="billing_email_field"
                          data-priority={100}
                        >
                          <label htmlFor="billing_email" className="">
                            Email Address&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="email"
                              className="input-text w-full"
                              name="billing_email"
                              id="billing_email"
                              placeholder=""
                              defaultValue=""
                              autoComplete="email username"
                            />
                          </span>
                        </p>
                        <p
                          className="flex flex-col form-row address-field form-row-last validate-required"
                          id="billing_postcode_field"
                          data-priority={110}
                        >
                          <label htmlFor="billing_postcode" className="">
                            ZIP Code&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="tel"
                              className="input-text w-full"
                              name="billing_postcode"
                              id="billing_postcode"
                              placeholder=""
                              defaultValue=""
                              maxLength={12}
                              autoComplete="postal-code"
                              pattern="\d*"
                            />
                          </span>
                        </p>
                        <br />
                        <div className="custom-step-heading-middle">
                          <div className="custom-heading-count">2</div>
                          <div className="custom-heading-content">
                            <h3>YouTube™ Account Info</h3>
                            <h5>Get new engaged followers each month</h5>
                          </div>
                        </div>
                        <p
                          className="flex flex-col form-row form-row-wide validate-required validate-required"
                          id="ig_username_field"
                          data-priority={120}
                        >
                          <label htmlFor="ig_username" className="">
                            YouTube™ Channel Link&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text w-full"
                              name="ig_username"
                              id="ig_username"
                              placeholder="E.g. https://www.youtube.com/channel/UC0C-w0YjGpqDXGB8IHb662A"
                              defaultValue=""
                            />
                          </span>
                        </p>
                        <p
                          className="flex flex-col form-row form-row-wide"
                          id="list-of-targeted-profiles_field"
                          data-priority={130}
                        >
                          <label
                            htmlFor="list-of-targeted-profiles"
                            className=""
                          >
                            Describe Your Niche&nbsp;
                            <span className="optional">(Optional)</span>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text w-full"
                              name="list-of-targeted-profiles"
                              id="list-of-targeted-profiles"
                              placeholder="Tell us what interests/demographics we should target"
                              defaultValue=""
                            />
                          </span>
                        </p>{" "}
                      </div>
                      <input
                        type="hidden"
                        id="_convert_attributes"
                        name="_convert_attributes"
                        defaultValue=""
                      />
                      <input
                        type="hidden"
                        name="_wae_recaptcha_response"
                        id="waeRecaptchaResponse"
                        defaultValue="0cAFcWeA4U_ldhmyQMb3AlML19RlW7Q2qDGjzIz67h9aSO26XGlOOKB2gypqJrIeZTdfI_7Sd-szuP_8RdYUosvBjWsaQZ1GG1th3VuUQ9XwZfH4QzzYNtTsK5LXp5zWvlaD_nwNb5AxVA-t2X4H2PNAIugeUigMFDOgUrnkDfDCkppBsgfOe7GwXNE3XbKIMyDtyKnPzosuK6SN6a7Y-WYBL-Q3gvg_IDWSzgJDI24H-gMEm0uH3Xnef7nqKz39n5MtamR4I8uAfPGCcn1-u0yZZ5q5-k52vt0d7Ek_zGDpcalAeiczRwBeO83im1es2fOWgG1w5gTbxbWmm-86mwFE234WwoV2vJPQHQVicRi4N_dbzSTiqgSw954xllt88pHNnL5NwPAO50J14VfRgzeKZh57W1Yt5yTEG7ZpEwmAP1HjbED3K984cpX4rvGmMABrQV1RWZbxo8THUlsMyn1QPOopQJMYIUzjUrwYom5kGk2Tu3ZUO2kNiv23CWMuXG2Y71i8s4Kj8ZsbCRQAJ2yh7ztjiDlcDMJHktIVsacC12h2SEQRt4jV1MwuUDDqH7t484_ffuQsLsAQ5N5ArbZyxRdw6QFjV2q-vOctqIYclpC94R2ykNyI2STTWUSVZkzprY0mun-amj4ARaJ18O3mQS0orqu4OkQUs5umuelqR1XR0bzceR7LSUWL0E3sSG26rYbwFYGN7lxkDa6HhK1vt-V7q5NcxFbw"
                      />
                    </div>
                    <div className="woocommerce-account-fields"></div>
                  </div>
                  <div className="col-2">
                    <div className="woocommerce-shipping-fields"></div>
                    <div className="woocommerce-additional-fields">
                      <input
                        type="hidden"
                        name="metorik_source_type"
                        defaultValue="typein"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_url"
                        defaultValue="(none)"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_mtke"
                        defaultValue="(none)"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_utm_campaign"
                        defaultValue="(none)"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_utm_source"
                        defaultValue="(direct)"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_utm_medium"
                        defaultValue="(none)"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_utm_content"
                        defaultValue="(none)"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_utm_id"
                        defaultValue="(none)"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_utm_term"
                        defaultValue="(none)"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_session_entry"
                        defaultValue="/"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_session_start_time"
                        defaultValue="2025-11-06 17:06:52"
                      />
                      <input
                        type="hidden"
                        name="metorik_source_session_pages"
                        defaultValue={2}
                      />
                      <input
                        type="hidden"
                        name="metorik_source_session_count"
                        defaultValue={10}
                      />
                    </div>
                  </div>
                </div>
                <h3 id="order_review_heading">Your order</h3>
                <div
                  id="order_review"
                  className="woocommerce-checkout-review-order"
                >
                  <table className="shop_table woocommerce-checkout-review-order-table">
                    {/* 	<thead>
		<tr>
			<th class="product-name">Product</th>
			<th class="product-total">Total</th>
		</tr>
	</thead> */}
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-name">
                          <div
                            style={{
                              color: "#3594ba!important",
                              fontWeight: 700,
                              fontSize: "1.45rem",
                              paddingBottom: 30
                            }}
                          >
                            TubeKarma - Influencer Plan&nbsp;{" "}
                            <strong className="product-quantity">× 1</strong>{" "}
                          </div>
                          <div
                            className="product-name"
                            style={{
                              color: "#4ea93c!important",
                              fontWeight: "700!important",
                              fontSize: 22
                            }}
                          >
                            {" "}
                            Today&apos;s Charge: $0
                          </div>
                          {/* 								<div class="product-name" style="color: #4ea93c!important;font-weight: 700!important;font-size:22px">Today's Charge: $0</div>
                           */}
                          <div
                            className="product-name recurring-product-price-specifier"
                            style={{
                              fontWeight: "500!important",
                              fontSize: 13,
                              paddingLeft: 2
                            }}
                          >
                            Then{" "}
                            <span className="subscription-price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  99.00
                                </bdi>
                              </span>{" "}
                              <span className="subscription-details">
                                {" "}
                                / week with a 3-day free trial
                              </span>
                            </span>
                            per week beginning on November 14, 2025
                          </div>
                        </td>
                        {/* 						<div><h5 style="color: #4ea93c!important;font-weight: 700!important;font-size:18px">Today's Charge: $0</h5></div> */}
                        {/* 						<td class="product-total">
							<span class="subscription-price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>99.00</bdi></span> <span class="subscription-details"> / week with a 3-day free trial</span></span>						</td>  */}
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              0.00
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <strong>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                0.00
                              </bdi>
                            </span>
                          </strong>{" "}
                        </td>
                      </tr>
                      <tr className="recurring-totals">
                        <th colSpan={2}>Recurring totals</th>
                      </tr>
                      <tr className="cart-subtotal recurring-total">
                        <th rowSpan={1}>Subtotal</th>
                        <td data-title="Subtotal">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            99.00
                          </span>{" "}
                          / week
                        </td>
                      </tr>
                      <tr className="order-total recurring-total">
                        <th rowSpan={1}>Recurring total</th>
                        <td data-title="Recurring total">
                          <strong>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              99.00
                            </span>
                          </strong>{" "}
                          / week
                          <div className="first-payment-date">
                            <small>First renewal: November 14, 2025</small>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="custom-step-heading custom-step-heading-payment">
                    <div className="custom-heading-count">3</div>
                    <div className="custom-heading-content">
                      <h3>Payment Information</h3>
                      <h5>100% Secure &amp; 256-Bit Encrypted Checkout</h5>
                    </div>
                  </div>
                  <div id="payment" className="woocommerce-checkout-payment">
                    <ul className="wc_payment_methods payment_methods methods">
                      <li className="wc_payment_method payment_method_authorize_net_cim_credit_card">
                        <input
                          id="payment_method_authorize_net_cim_credit_card"
                          type="radio"
                          className="input-radio"
                          name="payment_method"
                          defaultValue="authorize_net_cim_credit_card"
                          defaultChecked={true}
                          data-order_button_text="Place order"
                          style={{ display: "none" }}
                        />
                        <label htmlFor="payment_method_authorize_net_cim_credit_card">
                          Credit Card{" "}
                          <div className="sv-wc-payment-gateway-card-icons">
                            <img
                              src="assets/card-visa.svg"
                              alt="visa"
                              className="sv-wc-payment-gateway-icon wc-authorize-net-cim-credit-card-payment-gateway-icon"
                              width={40}
                              height={25}
                              style={{ width: 40, height: 25 }}
                            />
                            <img
                              src="assets/card-mastercard.svg"
                              alt="mastercard"
                              className="sv-wc-payment-gateway-icon wc-authorize-net-cim-credit-card-payment-gateway-icon"
                              width={40}
                              height={25}
                              style={{ width: 40, height: 25 }}
                            />
                            <img
                              src="assets/card-amex.svg"
                              alt="amex"
                              className="sv-wc-payment-gateway-icon wc-authorize-net-cim-credit-card-payment-gateway-icon"
                              width={40}
                              height={25}
                              style={{ width: 40, height: 25 }}
                            />
                            <img
                              src="assets/card-discover.svg"
                              alt="discover"
                              className="sv-wc-payment-gateway-icon wc-authorize-net-cim-credit-card-payment-gateway-icon"
                              width={40}
                              height={25}
                              style={{ width: 40, height: 25 }}
                            />
                          </div>{" "}
                        </label>
                        <div className="payment_box payment_method_authorize_net_cim_credit_card">
                          <p>Pay securely using your credit card.</p>
                          <fieldset
                            id="wc-authorize-net-cim-credit-card-credit-card-form"
                            aria-label="Payment Info"
                          >
                            <legend style={{ display: "none" }}>
                              Payment Info
                            </legend>
                            <div className="wc-authorize-net-cim-credit-card-new-payment-method-form js-wc-authorize-net-cim-credit-card-new-payment-method-form">
                              <p
                                className="form-row form-row-wide validate-required"
                                id="wc-authorize-net-cim-credit-card-account-number_field"
                                data-priority=""
                              >
                                <label
                                  htmlFor="wc-authorize-net-cim-credit-card-account-number"
                                  className=""
                                >
                                  Card Number&nbsp;
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <span className="woocommerce-input-wrapper">
                                  <input
                                    type="tel"
                                    className="input-text js-sv-wc-payment-gateway-credit-card-form-input js-sv-wc-payment-gateway-credit-card-form-account-number unknown"
                                    name=""
                                    id="wc-authorize-net-cim-credit-card-account-number"
                                    placeholder="•••• •••• •••• ••••"
                                    defaultValue=""
                                    autoComplete="cc-number"
                                    autoCorrect="no"
                                    autoCapitalize="no"
                                    spellCheck={false}
                                    maxLength={20}
                                  />
                                </span>
                              </p>
                              <p
                                className="form-row form-row-first validate-required"
                                id="wc-authorize-net-cim-credit-card-expiry_field"
                                data-priority=""
                              >
                                <label
                                  htmlFor="wc-authorize-net-cim-credit-card-expiry"
                                  className=""
                                >
                                  Expiration (MM/YY)&nbsp;
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <span className="woocommerce-input-wrapper">
                                  <input
                                    type="tel"
                                    className="input-text js-sv-wc-payment-gateway-credit-card-form-input js-sv-wc-payment-gateway-credit-card-form-expiry"
                                    name="wc-authorize-net-cim-credit-card-expiry"
                                    id="wc-authorize-net-cim-credit-card-expiry"
                                    placeholder="MM / YY"
                                    defaultValue=""
                                    autoComplete="cc-exp"
                                    autoCorrect="no"
                                    autoCapitalize="no"
                                    spellCheck={false}
                                    maxLength={7}
                                  />
                                </span>
                              </p>
                              <p
                                className="form-row form-row-last validate-required"
                                id="wc-authorize-net-cim-credit-card-csc_field"
                                data-priority=""
                              >
                                <label
                                  htmlFor="wc-authorize-net-cim-credit-card-csc"
                                  className=""
                                >
                                  Card Security Code&nbsp;
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <span className="woocommerce-input-wrapper">
                                  <input
                                    type="tel"
                                    className="input-text js-sv-wc-payment-gateway-credit-card-form-input js-sv-wc-payment-gateway-credit-card-form-csc"
                                    name=""
                                    id="wc-authorize-net-cim-credit-card-csc"
                                    placeholder="CSC"
                                    defaultValue=""
                                    autoComplete="off"
                                    autoCorrect="no"
                                    autoCapitalize="no"
                                    spellCheck={false}
                                    maxLength={4}
                                  />
                                </span>
                              </p>
                              <input
                                type="hidden"
                                id="wc-authorize-net-cim-credit-card-payment-nonce"
                                name="wc-authorize-net-cim-credit-card-payment-nonce"
                                defaultValue=""
                              />
                              <input
                                type="hidden"
                                id="wc-authorize-net-cim-credit-card-payment-descriptor"
                                name="wc-authorize-net-cim-credit-card-payment-descriptor"
                                defaultValue=""
                              />
                              <input
                                type="hidden"
                                id="wc-authorize-net-cim-credit-card-last-four"
                                name="wc-authorize-net-cim-credit-card-last-four"
                                defaultValue=""
                              />
                              <input
                                type="hidden"
                                id="wc-authorize-net-cim-credit-card-card-type"
                                name="wc-authorize-net-cim-credit-card-card-type"
                                defaultValue=""
                              />
                              <div className="clear" />
                              <input
                                name="wc-authorize-net-cim-credit-card-tokenize-payment-method"
                                id="wc-authorize-net-cim-credit-card-tokenize-payment-method"
                                type="hidden"
                                defaultValue="true"
                              />
                            </div>
                            {/* ./new-payment-method-form-div */}
                          </fieldset>{" "}
                        </div>
                      </li>
                    </ul>
                    <div className="form-row place-order">
                      <div className="woocommerce-terms-and-conditions-wrapper">
                        <div className="woocommerce-privacy-policy-text" />
                        <p className="form-row validate-required">
                          <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                            <input
                              type="checkbox"
                              className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                              name="terms"
                              id="terms"
                            />
                            <span className="woocommerce-terms-and-conditions-checkbox-text">
                              I have read and agree to the website{" "}
                              <a
                                href="/terms/"
                                className="woocommerce-terms-and-conditions-link"
                                target="_blank"
                              >
                                terms and conditions
                              </a>
                            </span>
                            &nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="hidden"
                            name="terms-field"
                            defaultValue={1}
                          />
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="button alt"
                        name="woocommerce_checkout_place_order"
                        id="place_order"
                        value="Sign Up Now"
                        data-value="Sign Up Now"
                      >
                        Place order
                      </button>
                      <input
                        type="hidden"
                        id="woocommerce-process-checkout-nonce"
                        name="woocommerce-process-checkout-nonce"
                        defaultValue="36ba77db98"
                      />
                      <input
                        type="hidden"
                        name="_wp_http_referer"
                        defaultValue="/?wc-ajax=update_order_review"
                      />{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-44b9c0d3 elementor-widget elementor-widget-image"
                    data-id="44b9c0d3"
                    data-element_type="widget"
                    id="checkout-left-img"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        decoding="async"
                        width={519}
                        height={40}
                        src="assets/payment-seal.png"
                        className="attachment-large size-large wp-image-1607078"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-598c7bbc elementor-widget elementor-widget-heading"
                    data-id="598c7bbc"
                    data-element_type="widget"
                    id="checkout-left-heading"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Your account manager will contact you within a few
                        hours!{" "}
                      </h2>{" "}
                    </div>
                  </div>
                  <input
                    type="hidden"
                    className="AcceptUI"
                    data-acceptuiformheadertxt="TubeKarma"
                    data-acceptuiformbtntxt="Place order"
                    data-billingaddressoptions='{"show":false, "required":false}'
                    data-apiloginid="36UxjXW6r"
                    data-clientkey="2P87QW5J838cRwx77Dg5S86LQ8k3p75R5cuK5yXfbvgD9e8FuCcwNB3M8ywMEfG8"
                    data-responsehandler="wc_authorize_net_cim_credit_card_accept_hosted_handler"
                  />{" "}
                </div>
              </form>
            </div>{" "}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-44b9c0d3 elementor-widget elementor-widget-image"
          data-id="44b9c0d3"
          data-element_type="widget"
          id="checkout-left-img"
          data-widget_type="image.default"
        >
          <div className="elementor-widget-container">
            <img
              decoding="async"
              width={519}
              height={40}
              src="assets/payment-seal.png"
              className="attachment-large size-large wp-image-1607078"
              alt=""
            />{" "}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-598c7bbc elementor-widget elementor-widget-heading"
          data-id="598c7bbc"
          data-element_type="widget"
          id="checkout-left-heading"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              Your account manager will contact you within a few hours!{" "}
            </h2>{" "}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-df637e2 elementor-widget elementor-widget-html"
          data-id="df637e2"
          data-element_type="widget"
          data-widget_type="html.default"
        >
          <div className="elementor-widget-container"></div>
        </div>
      </div>
    </div>
    <div
      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-664a3c92"
      data-id="664a3c92"
      data-element_type="column"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-widget-wrap elementor-element-populated e-swiper-container">
        <div
          className="elementor-element elementor-element-11482944 elementor-widget elementor-widget-heading"
          data-id={11482944}
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h3 className="elementor-heading-title elementor-size-default">
              Order Summary
            </h3>{" "}
          </div>
        </div>
        <section
          className="elementor-section elementor-inner-section elementor-element elementor-element-55beb28f elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="55beb28f"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6efd7914 elementor-hidden-mobile"
              data-id="6efd7914"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-edefcba elementor-widget elementor-widget-image"
                  data-id="edefcba"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      decoding="async"
                      width={445}
                      height={441}
                      src="assets/favicon-tubekarma.png"
                      className="attachment-large size-large wp-image-1297473"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5ddb3f88"
              data-id="5ddb3f88"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-4446613a elementor-widget elementor-widget-shortcode"
                  data-id="4446613a"
                  data-element_type="widget"
                  data-widget_type="shortcode.default"
                >
                  <div className="elementor-widget-container">
                    <div className="product-title-name">
                      TubeKarma - Influencer Plan{" "}
                    </div>
                    <div
                      className="product-name recurring-product-price-specifier"
                      style={{
                        fontWeight: "400!important",
                        fontSize: 13,
                        paddingLeft: 2
                      }}
                    >
                      Then{" "}
                      <span className="subscription-price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            99.00
                          </bdi>
                        </span>{" "}
                        <span className="subscription-details">
                          {" "}
                          / week with a 3-day free trial
                        </span>
                      </span>
                      per week beginning on November 14, 2025
                    </div>{" "}
                    <div className="elementor-shortcode" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-59a0e62a"
              data-id="59a0e62a"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-576a8302 elementor-widget elementor-widget-shortcode"
                  data-id="576a8302"
                  data-element_type="widget"
                  data-widget_type="shortcode.default"
                >
                  <div className="elementor-widget-container">
                    <div className="product-plan-total">
                      <s>
                        <span>
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              99.00
                            </bdi>
                          </span>
                        </span>
                      </s>
                      <div>$0.00</div>
                    </div>
                    <div className="elementor-shortcode" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-inner-section elementor-element elementor-element-7588dc6c elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="7588dc6c"
          data-element_type="section"
          id="todaycharge"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4b9e11ec"
              data-id="4b9e11ec"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-65fb143f elementor-widget elementor-widget-heading"
                  data-id="65fb143f"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      Today&apos;s Charge:
                    </h3>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-310b524a"
              data-id="310b524a"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-6f62925 elementor-widget elementor-widget-shortcode"
                  data-id="6f62925"
                  data-element_type="widget"
                  data-widget_type="shortcode.default"
                >
                  <div className="elementor-widget-container">
                    <div id="price-checkout-total">$0.00</div>{" "}
                    <div className="elementor-shortcode" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="elementor-element elementor-element-7d9ccf05 elementor-hidden-phone elementor-widget elementor-widget-heading"
          data-id="7d9ccf05"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h3 className="elementor-heading-title elementor-size-default">
              Why Choose TubeKarma
            </h3>{" "}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-17e0178c elementor-hidden-phone elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
          data-id="17e0178c"
          data-element_type="widget"
          data-widget_type="icon-list.default"
        >
          <div className="elementor-widget-container">
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="fas fa-check" />{" "}
                </span>
                <span className="elementor-icon-list-text">
                  IntelliBoost™ Analytics
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="fas fa-check" />{" "}
                </span>
                <span className="elementor-icon-list-text">
                  Strategic Audience Targeting
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="fas fa-check" />{" "}
                </span>
                <span className="elementor-icon-list-text">24/7 Support</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="fas fa-check" />{" "}
                </span>
                <span className="elementor-icon-list-text">
                  {" "}
                  Straightforward Pricing
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="fas fa-check" />{" "}
                </span>
                <span className="elementor-icon-list-text">
                  {" "}
                  Streamlined Setup
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="fas fa-check" />{" "}
                </span>
                <span className="elementor-icon-list-text">
                  Enterprise Security
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="fas fa-check" />{" "}
                </span>
                <span className="elementor-icon-list-text">
                  Professional Guidance
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-46b4b67d elementor-hidden-phone elementor-widget elementor-widget-heading"
          data-id="46b4b67d"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h3 className="elementor-heading-title elementor-size-default">
              As Seen On
            </h3>{" "}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-2e1d7c86 elementor-hidden-phone elementor-widget elementor-widget-image-carousel e-widget-swiper"
          data-id="2e1d7c86"
          data-element_type="widget"
          data-settings='{"slides_to_show":"3","navigation":"none","slides_to_show_tablet":"5","slides_to_show_mobile":"3","autoplay":"no","infinite":"yes","speed":500}'
          data-widget_type="image-carousel.default"
          aria-roledescription="carousel"
          aria-label="Carousel | Horizontal scrolling: Arrow Left & Right"
        >
          <div className="elementor-widget-container">
            <div
              className="elementor-image-carousel-wrapper swiper-container swiper-container-initialized swiper-container-horizontal"
              dir="ltr"
            >
              <div
                className="elementor-image-carousel swiper-wrapper swiper-image-stretch"
                aria-live="polite"
                style={{
                  transform: "translate3d(-423px, 0px, 0px)",
                  transitionDuration: "0ms"
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="10 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={9}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/mashable-1.jpg"
                      alt="mashable-1.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="11 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={10}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/elite-1.jpg"
                      alt="elite-1.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="12 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={11}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/bf-1.jpg"
                      alt="bf-1.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="1 of 12"
                  style={{ width: 141 }}
                  data-swiper-slide-index={0}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/forbes.jpg"
                      alt="forbes.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="2 of 12"
                  style={{ width: 141 }}
                  data-swiper-slide-index={1}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/ibm.jpg"
                      alt="ibm.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="3 of 12"
                  style={{ width: 141 }}
                  data-swiper-slide-index={2}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/newyork-times.jpg"
                      alt="newyork-times.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="4 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={3}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/tc.jpg"
                      alt="tc.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="5 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={4}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/time.jpg"
                      alt="time.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="6 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={5}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/usa-today.jpg"
                      alt="usa-today.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="7 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={6}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/vanity-fair.jpg"
                      alt="vanity-fair.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="8 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={7}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/vice.jpg"
                      alt="vice.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="9 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={8}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/wired.jpg"
                      alt="wired.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="10 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={9}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/mashable-1.jpg"
                      alt="mashable-1.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="11 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={10}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/elite-1.jpg"
                      alt="elite-1.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-prev"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="12 of 12"
                  style={{ width: 141 }}
                  aria-hidden="true"
                  inert={true}
                  data-swiper-slide-index={11}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/bf-1.jpg"
                      alt="bf-1.jpg"
                    />
                  </figure>
                </div>{" "}
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="1 of 12"
                  style={{ width: 141 }}
                  data-swiper-slide-index={0}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/forbes.jpg"
                      alt="forbes.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="2 of 12"
                  style={{ width: 141 }}
                  data-swiper-slide-index={1}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/ibm.jpg"
                      alt="ibm.jpg"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="3 of 12"
                  style={{ width: 141 }}
                  data-swiper-slide-index={2}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="assets/newyork-times.jpg"
                      alt="newyork-times.jpg"
                    />
                  </figure>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-a86def9 elementor-hidden-phone elementor-widget elementor-widget-heading"
          data-id="a86def9"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h3 className="elementor-heading-title elementor-size-default">
              Testimonials
            </h3>{" "}
          </div>
        </div>
        <section
          className="elementor-section elementor-inner-section elementor-element elementor-element-45930330 elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id={45930330}
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-14cc6e3"
              data-id="14cc6e3"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-a996a92 elementor-widget elementor-widget-heading"
                  data-id="a996a92"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">
                      &quot;Working with TubeKarma has transformed how I approach my
                      YouTube™ channel&apos;s visibility. Before, I was spending
                      hours trying to promote my videos with little success.
                      Their professional team developed a customized marketing
                      strategy that helped introduce my content to more relevant
                      audiences.&quot; - Tina B
                    </h6>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>
  );
}
