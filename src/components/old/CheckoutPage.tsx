'use client';

import React from "react";
import { AvailabilityBanner } from "./checkout/AvailabilityBanner";
import { CheckoutHeader } from "./checkout/CheckoutHeader";
import { ChannelVisibilitySection } from "./checkout/ChannelVisibilitySection";
import { FreeTrialSection } from "./checkout/FreeTrialSection";
import { SecureCheckoutSection } from "./checkout/SecureCheckoutSection";
import { CheckoutFormSection } from "./checkout/CheckoutFormSection";
import { CheckoutFooter } from "./checkout/CheckoutFooter";

export default function TubeKarmaCheckout() {
  return (
    <>
      <AvailabilityBanner />
      <CheckoutHeader />
      <ChannelVisibilitySection />
      <FreeTrialSection />
      <SecureCheckoutSection />
      <CheckoutFormSection />
      <CheckoutFooter />
    </>
  );
}
