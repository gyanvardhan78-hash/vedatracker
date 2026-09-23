import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Veda Tracker",
  description: "How Veda Tracker collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="July 1, 2026">
      <section>
        <h2>1. Introduction</h2>
        <p>
          Veda Tracker ("we", "us", "our") is committed to protecting the
          privacy of our users. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you download,
          install, or use the Veda Tracker mobile application and related
          services (collectively, the "Service"). Please read this Privacy
          Policy carefully. If you do not agree with the terms of this
          Privacy Policy, please do not access the Service.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong className="text-white">Account Information:</strong>{" "}
            Name, email address, and password (encrypted) when you register
            for an account.
          </li>
          <li>
            <strong className="text-white">Usage Data:</strong> Information
            about how you interact with the Service, including features
            used, session duration, syllabus and study progress data you
            input, and app performance diagnostics.
          </li>
          <li>
            <strong className="text-white">Device Information:</strong>{" "}
            Device model, operating system version, unique device
            identifiers, and mobile network information.
          </li>
          <li>
            <strong className="text-white">Payment Information:</strong>{" "}
            When you make a purchase, payment details are collected and
            processed directly by our third-party payment processor
            (Razorpay). We do not store your full card, UPI, or bank
            account details on our own servers.
          </li>
          <li>
            <strong className="text-white">Communications:</strong>{" "}
            Records of correspondence when you contact our support team.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, maintain, and improve the Service;</li>
          <li>
            Process transactions and send related information, including
            confirmations and invoices;
          </li>
          <li>
            Personalize your experience, such as syllabus tracking and
            progress recommendations;
          </li>
          <li>
            Communicate with you, including responding to support requests
            and sending important updates about the Service;
          </li>
          <li>
            Monitor and analyze usage trends to improve app functionality
            and user experience;
          </li>
          <li>
            Detect, investigate, and prevent fraudulent transactions and
            other illegal activities, and protect the rights and safety of
            our users;
          </li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing of Information</h2>
        <p>
          We do not sell your personal information. We may share your
          information in the following circumstances:
        </p>
        <ul>
          <li>
            <strong className="text-white">Payment Processors:</strong> With
            Razorpay and other payment gateways solely for the purpose of
            processing your transactions in accordance with their own
            privacy policies.
          </li>
          <li>
            <strong className="text-white">Service Providers:</strong> With
            third-party vendors who perform services on our behalf, such as
            cloud hosting, analytics, and customer support, under
            appropriate confidentiality obligations.
          </li>
          <li>
            <strong className="text-white">Legal Requirements:</strong>{" "}
            Where required to comply with applicable law, regulation, legal
            process, or governmental request.
          </li>
          <li>
            <strong className="text-white">Business Transfers:</strong> In
            connection with a merger, acquisition, or sale of assets, in
            which case we will notify you before your information becomes
            subject to a different privacy policy.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Data Storage and Security</h2>
        <p>
          We implement reasonable administrative, technical, and physical
          security measures designed to protect your information from
          unauthorized access, alteration, disclosure, or destruction. This
          includes encryption of sensitive data in transit and restricted
          access to production systems. However, no method of electronic
          transmission or storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section>
        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a
          longer retention period is required or permitted by law. When your
          information is no longer required, we will securely delete or
          anonymize it.
        </p>
      </section>

      <section>
        <h2>7. Your Rights and Choices</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access,
          correct, update, or request deletion of your personal information.
          You may also have the right to withdraw consent where processing
          is based on consent. To exercise these rights, please contact us
          at{" "}
          <a href="mailto:support@vedatracker.com" className="text-accent-soft hover:underline">
            support@vedatracker.com
          </a>
          . We will respond to your request within a reasonable timeframe
          and in accordance with applicable law.
        </p>
      </section>

      <section>
        <h2>8. Children's Privacy</h2>
        <p>
          The Service is not directed to children under the age of 13, and
          we do not knowingly collect personal information from children
          under 13. If we become aware that we have inadvertently collected
          personal information from a child under 13, we will take steps to
          delete such information promptly.
        </p>
      </section>

      <section>
        <h2>9. Third-Party Links and Services</h2>
        <p>
          The Service may contain links to third-party websites or services
          that are not owned or controlled by us, including our payment
          gateway partner. We are not responsible for the privacy practices
          of these third parties, and we encourage you to review their
          respective privacy policies.
        </p>
      </section>

      <section>
        <h2>10. International Data Transfers</h2>
        <p>
          Your information may be stored and processed on servers located
          outside your state, province, or country, where data protection
          laws may differ from those of your jurisdiction. By using the
          Service, you consent to the transfer of your information to such
          locations.
        </p>
      </section>

      <section>
        <h2>11. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will
          notify you of any material changes by posting the new Privacy
          Policy within the Service and updating the "Effective date" above.
          You are advised to review this Privacy Policy periodically.
        </p>
      </section>

      <section>
        <h2>12. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <a href="mailto:support@vedatracker.com" className="text-accent-soft hover:underline">
            support@vedatracker.com
          </a>{" "}
          or write to us at the address listed on our Contact Us page.
        </p>
      </section>
    </LegalLayout>
  );
}
