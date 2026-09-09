import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LegalBody, LegalCta, LegalSection } from "@/components/site/LegalLayout";

const title = "Terms & Conditions and Refund Policy | Velora Kitch 'N' Bath Co.";
const description =
  "Read the terms of use, product warranty conditions, and the refund and replacement policy for Velora Kitch 'N' Bath Co.";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Terms & Conditions / Refund Policy"
        subtitle="Please read these terms carefully before using our website or purchasing our products."
      />

      <LegalBody>
        <LegalSection heading="Terms & Conditions">
          <p>
            By accessing this website you agree to these terms. All content, product imagery, logos
            and text are the property of Velora Kitch 'N' Bath Co. and may not be reproduced without
            written permission.
          </p>
        </LegalSection>

        <LegalSection heading="Product Information">
          <p>
            We make every effort to display products, finishes and specifications accurately. Minor
            variations in colour or dimension may occur due to photography, screen calibration or
            ongoing product improvement.
          </p>
        </LegalSection>

        <LegalSection heading="Pricing & Quotations">
          <p>
            Prices shared in quotations are valid for the period stated in the quotation and are
            subject to change thereafter without prior notice.
          </p>
        </LegalSection>

        <LegalSection heading="Warranty">
          <p>
            Velora products are covered against manufacturing defects for the period specified on your
            invoice. Warranty excludes damage caused by improper installation, misuse, harsh chemicals,
            hard water scaling or normal wear.
          </p>
        </LegalSection>

        <LegalSection heading="Refund Policy">
          <p>
            Refund or replacement requests must be raised within 7 days of delivery. Products must be
            unused, uninstalled and returned in original packaging with the invoice.
          </p>
          <p>
            Approved refunds are processed to the original payment method within 7–10 working days of
            the returned goods being inspected. Custom or made-to-order items, installed products and
            clearance goods are not eligible for refund.
          </p>
        </LegalSection>

        <LegalSection heading="Limitation of Liability">
          <p>
            Velora shall not be liable for any indirect or consequential loss arising from the use of
            our website or products beyond the value of the product supplied.
          </p>
        </LegalSection>

        <LegalSection heading="Governing Law">
          <p>These terms are governed by the laws of India and subject to local jurisdiction.</p>
        </LegalSection>
      </LegalBody>

      <LegalCta title="Have Questions?" text="Our team is happy to clarify any term, warranty or refund detail." />
    </>
  );
}