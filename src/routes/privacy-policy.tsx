import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LegalBody, LegalCta, LegalSection } from "@/components/site/LegalLayout";

const title = "Privacy Policy | Velora Kitch 'N' Bath Co.";
const description =
  "How Velora Kitch 'N' Bath Co. collects, uses, stores and protects the personal information you share with us.";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <>
      <PageHero eyebrow="Policies" title="Privacy Policy" subtitle="Your privacy matters to us." />

      <LegalBody>
        <LegalSection heading="Introduction">
          <p>
            Velora Kitch 'N' Bath Co. respects your privacy. This policy explains what information we
            collect when you visit our website or contact us, how we use it, and the choices you have.
          </p>
        </LegalSection>

        <LegalSection heading="Information We Collect">
          <p>
            We collect information you provide voluntarily — such as your name, phone number, email
            address and enquiry details submitted through our contact form or WhatsApp. We may also
            collect limited technical data such as browser type and pages visited to improve our site.
          </p>
        </LegalSection>

        <LegalSection heading="How We Use Your Information">
          <p>
            Your information is used to respond to enquiries, prepare quotations, provide product
            support and share relevant updates. We do not sell, rent or trade your personal data.
          </p>
        </LegalSection>

        <LegalSection heading="Data Sharing">
          <p>
            Information may be shared with trusted service partners strictly for fulfilling your
            request, or where disclosure is required by applicable law.
          </p>
        </LegalSection>

        <LegalSection heading="Data Security">
          <p>
            We apply reasonable technical and organisational safeguards to protect your information
            against unauthorised access, alteration or disclosure.
          </p>
        </LegalSection>

        <LegalSection heading="Cookies">
          <p>
            Our website may use cookies to remember preferences and understand usage patterns. You can
            disable cookies through your browser settings at any time.
          </p>
        </LegalSection>

        <LegalSection heading="Your Rights">
          <p>
            You may request access to, correction of, or deletion of your personal information by
            contacting us using the details below.
          </p>
        </LegalSection>

        <LegalSection heading="Updates to This Policy">
          <p>
            We may update this policy from time to time. The latest version will always be published
            on this page.
          </p>
        </LegalSection>
      </LegalBody>

      <LegalCta title="Need Help?" text="Contact our team for any question about your privacy or data." />
    </>
  );
}