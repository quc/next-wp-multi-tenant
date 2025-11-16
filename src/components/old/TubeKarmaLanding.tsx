"use client";

import { useState } from "react";
import Page from "./Page";

export default function TubeKarmaLanding() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <Page />
  );
}

