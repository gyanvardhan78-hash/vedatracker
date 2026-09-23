import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Veda Tracker",
  description:
    "Refund and cancellation policy for Veda Tracker digital subscriptions and in-app purchases.",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      effectiveDate="July 1, 2026"
    >
      <section>
        <h2>1. Overview</h2>
        <p>
          This Refund & Cancellation Policy applies to all digital
          subscriptions, premium features, and in-app purchases
          (collectively, "Digital Products") made available through the
          Veda Tracker application. Payments for Digital Products are
          processed securely through Razorpay and other supported payment
          methods. By making a purchase, you acknowledge and agree to the
          terms outlined below.
        </p>
      </section>

      <section>
        <h2>2. Nature of Digital Products</h2>
        <p>
          Digital Products offered through Veda Tracker are delivered
          electronically and provide immediate access to premium features
          upon successful payment confirmation. Due to the intangible and
          immediately accessible nature of digital goods, standard
          "change of mind" refunds that apply to physical goods do not apply
          to Digital Products.
        </p>
      </section>

      <section>
        <h2>3. General Refund Policy</h2>
        <p>
          <strong className="text-white">
            All digital subscriptions and in-app purchases are non-refundable
            once activated,
          </strong>{" "}
          except as expressly set out in this Policy or as required by
          applicable consumer protection law. Once a subscription or premium
          feature has been successfully activated on your account, the
          associated fee is considered earned and non-recoverable, as access
          to the digital content or service has already been granted.
        </p>
      </section>

      <section>
        <h2>4. Exceptions — When a Refund May Be Considered</h2>
        <p>
          Notwithstanding Section 3, we may, at our sole discretion,
          consider a full or partial refund in the following limited
          circumstances:
        </p>
        <ul>
          <li>
            A duplicate or accidental payment was made for the same
            subscription plan within the same billing cycle;
          </li>
          <li>
            A technical error on our end resulted in a charge without the
            corresponding premium feature being activated or made
            accessible;
          </li>
          <li>
            An unauthorized transaction occurred on your payment method that
            is verified and confirmed by our payment gateway partner,
            Razorpay;
          </li>
          <li>
            Any other circumstance where a refund is mandated under
            applicable Indian consumer protection law.
          </li>
        </ul>
        <p>
          To request a refund under any of the above exceptions, you must
          contact us within 7 days of the transaction date at{" "}
          <a href="mailto:support@vedatracker.com" className="text-accent-soft hover:underline">
            support@vedatracker.com
          </a>{" "}
          with your registered email address, transaction ID, and a
          description of the issue.
        </p>
      </section>

      <section>
        <h2>5. Refund Review Process</h2>
        <p>
          Upon receiving a refund request, our team will review the claim
          and may request additional information or supporting evidence. We
          aim to complete this review within 5–7 business days of receiving
          a complete request. If approved, refunds will be processed to the
          original payment method used at the time of purchase, through
          Razorpay, and may take an additional 5–10 business days to reflect
          in your account, depending on your bank or payment provider.
        </p>
      </section>

      <section>
        <h2>6. Subscription Cancellation</h2>
        <p>
          You may cancel an active subscription at any time through your
          account settings within the app or by contacting our support
          team. Cancellation will stop future automatic renewals; however,
          cancellation does not entitle you to a refund for the current
          billing period already paid for. You will continue to have access
          to premium features until the end of the then-current billing
          cycle.
        </p>
      </section>

      <section>
        <h2>7. Failed or Pending Transactions</h2>
        <p>
          If a payment is deducted from your account but the corresponding
          subscription or feature is not activated due to a technical or
          gateway-related failure, the amount is typically auto-reversed by
          Razorpay to your original payment method within 5–7 business days.
          If you do not receive a reversal within this timeframe, please
          contact us with your transaction reference for further
          investigation.
        </p>
      </section>

      <section>
        <h2>8. Chargebacks</h2>
        <p>
          We encourage users to contact our support team before initiating a
          chargeback with their bank or card issuer, as this allows us to
          resolve billing concerns more efficiently. Fraudulent or abusive
          use of the chargeback process may result in suspension of your
          account.
        </p>
      </section>

      <section>
        <h2>9. Changes to This Policy</h2>
        <p>
          We reserve the right to modify this Refund & Cancellation Policy
          at any time. Changes will be effective immediately upon posting
          within the app or on this page, along with an updated effective
          date. Continued use of the Service after such changes constitutes
          your acceptance of the revised Policy.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          For any refund, cancellation, or billing-related queries, please
          reach out to us at{" "}
          <a href="mailto:support@vedatracker.com" className="text-accent-soft hover:underline">
            support@vedatracker.com
          </a>{" "}
          or visit our Contact Us page for additional details.
        </p>
      </section>
    </LegalLayout>
  );
}
