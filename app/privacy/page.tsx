import type { Metadata } from "next";
import Link from "next/link";
import {
  CompanyDetails,
  Highlight,
  LegalArticle,
  LegalList,
  MailLink,
  type LegalClause,
} from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What Primale collects, how we use it, and the choices you have over your data.",
};

const clauses: LegalClause[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    body: (
      <>
        <p>
          Primale Health Limited (“Primale”, “we”, “us”) provides a UK
          testosterone-optimization membership, the Primale app, and this
          website. We are the data controller for the personal data described
          in this policy.
        </p>
        <CompanyDetails />
        <p>
          For anything about this policy or your data, email <MailLink />.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    heading: "What we collect",
    body: (
      <>
        <p>
          <Highlight>If you join the waitlist:</Highlight> your email address
          and the time you signed up.
        </p>
        <p>
          <Highlight>If you create an account:</Highlight> your name and email
          address, and — if you sign in with Apple or Google — the identifier
          and email those services return to us. We never receive your Apple or
          Google password.
        </p>
        <p>
          <Highlight>If you take out a membership:</Highlight> your plan,
          billing status, renewal date, and payment records. Card details go
          directly to Stripe; we only ever see the last four digits and the card
          type.
        </p>
        <p>
          <Highlight>To send you a test kit:</Highlight> your delivery address,
          date of birth, sex, and the other details the laboratory needs on your
          lab form, plus the status of each kit and order.
        </p>
        <p>
          <Highlight>From your blood tests:</Highlight> the results the
          laboratory returns, and the history of those results over time.
        </p>
        <p>
          <Highlight>From your device, if you allow it:</Highlight> Apple Health
          data such as sleep, workouts, heart rate, and activity, and a push
          notification token so we can tell you when a kit ships or results
          land.
        </p>
        <p>
          <Highlight>When you use the app:</Highlight> the goals and preferences
          you set, and basic technical information such as app version and error
          logs.
        </p>
      </>
    ),
  },
  {
    id: "health-data",
    heading: "Health data",
    body: (
      <>
        <p>
          Blood test results and Apple Health data are{" "}
          <Highlight>special category data</Highlight> under UK GDPR, and we
          treat them accordingly. We process them on the basis of your explicit
          consent, which you give when you order a test or connect Apple Health,
          and which you can withdraw at any time.
        </p>
        <p>
          Apple Health access is read-only. We never write to or change your
          Health data.
        </p>
        <p>
          <Highlight>
            We never use health data for advertising or marketing, we never sell
            it, and we never share it with data brokers.
          </Highlight>{" "}
          Health data is only used to deliver the service described in these
          pages — showing you your results, tracking them over time, and
          generating your suggestions.
        </p>
        <p>
          You can disconnect Apple Health in the app, or revoke access entirely
          in iOS Settings → Privacy &amp; Security → Health.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    heading: "How we use it",
    body: (
      <LegalList
        items={[
          "To run your membership and take payment.",
          "To order, post, and track your monthly test kit, and to get your sample analysed.",
          "To show your results and trends, and to generate supplement and lifestyle suggestions.",
          "To send you service emails and notifications — a welcome when you join, and updates when your kit is posted, reaches the lab, and when results are ready. You can turn kit and results emails off in the app.",
          "To answer your support emails.",
          "To fix bugs, keep Primale secure, and understand which features are used, using aggregated data where we can.",
          "To tell you when memberships open, if you joined the waitlist.",
        ]}
      />
    ),
  },
  {
    id: "legal-bases",
    heading: "Legal bases (UK GDPR)",
    body: (
      <LegalList
        items={[
          "Performance of a contract — running your account, membership, kit deliveries, and payments.",
          "Explicit consent — blood test results, Apple Health data, push notifications, and waitlist emails. You can withdraw consent at any time.",
          "Legitimate interests — keeping Primale secure, preventing fraud, and improving the product, balanced against your privacy.",
          "Legal obligation — keeping tax and accounting records, and responding to lawful requests.",
        ]}
      />
    ),
  },
  {
    id: "sharing",
    heading: "Who we share it with",
    body: (
      <>
        <p>
          <Highlight>We do not sell your data.</Highlight> We share it with
          service providers who help us run Primale, and only so they can
          provide that service:
        </p>
        <LegalList
          items={[
            "Supabase — our database, authentication, and backend functions.",
            "Stripe — payments, membership billing, and the billing portal.",
            "Vercel — hosting for this website.",
            "Expo — delivery of push notifications to your device.",
            "Resend — delivery of account and test-kit emails. Emails never contain your results.",
            "Sussex Pathology — laboratory analysis of the blood samples you return.",
            "Apple and Google — sign-in, if you choose to use it.",
            "Royal Mail and our fulfilment partners — posting kits to you and returning samples to the lab.",
          ]}
        />
        <p>
          We may also disclose data where the law requires it, or to protect
          someone’s safety or our legal rights. If Primale is ever sold or
          reorganised, data may transfer to the new owner under this policy.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    heading: "Where your data is held",
    body: (
      <p>
        We host data in the UK or the European Economic Area wherever we can.
        Some of our providers process data in the United States. Where data
        leaves the UK we rely on UK adequacy regulations or the International
        Data Transfer Addendum to the EU Standard Contractual Clauses, so your
        data keeps an equivalent level of protection.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: (
      <LegalList
        items={[
          "Waitlist emails — until you ask us to delete them, or until the waitlist closes and we no longer need them.",
          "Account, results, and Apple Health data — while your account is open, and deleted when you delete your account.",
          "Payment and order records — six years after your last transaction, because UK tax law requires it.",
          "Support emails — two years after the conversation ends.",
        ]}
      />
    ),
  },
  {
    id: "security",
    heading: "How we protect it",
    body: (
      <p>
        Data is encrypted in transit and at rest. Access to member data is
        restricted to the people who need it to run the service, and our
        database enforces row-level rules so one member’s data can’t be read by
        another. No system is perfectly secure, but if a breach ever affects
        your rights we’ll tell you and the ICO as the law requires.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "Your rights",
    body: (
      <>
        <p>You have the right to:</p>
        <LegalList
          items={[
            "Get a copy of the personal data we hold about you.",
            "Have inaccurate data corrected.",
            "Have your data deleted.",
            "Object to or restrict how we use it.",
            "Withdraw consent you’ve given, including for Apple Health and marketing emails.",
            "Receive your data in a portable format.",
          ]}
        />
        <p>
          Email <MailLink /> and we’ll respond within one month. There’s no
          charge.
        </p>
      </>
    ),
  },
  {
    id: "account-deletion",
    heading: "Deleting your account",
    body: (
      <>
        <p>
          You can delete your account yourself at any time, from Profile →
          Delete account in the app. It takes effect immediately.
        </p>
        <p>
          Deleting your account removes your profile, results history, goals,
          preferences, Apple Health data, and delivery details, cancels your
          membership, and cancels any kit that hasn’t yet gone to the lab.
        </p>
        <p>
          We have to keep a minimal record of your payments and orders for six
          years to meet UK tax and accounting rules. That record is kept
          separately from your health data and is not used for anything else.
        </p>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children",
    body: (
      <p>
        Primale is for adults. We don’t knowingly collect data about anyone
        under 18. If you believe a minor has created an account, email{" "}
        <MailLink /> and we’ll delete it.
      </p>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and tracking",
    body: (
      <p>
        This website doesn’t use advertising or analytics cookies. Essential
        cookies may be set by our hosting provider to serve the site securely.
        The app contains no advertising SDKs and no third-party tracking.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <p>
        We’ll update this page when our practices change, and the date at the
        top shows when it was last revised. If a change materially affects how
        we use your data, we’ll tell you by email or in the app before it takes
        effect.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact and complaints",
    body: (
      <>
        <p>
          Email <MailLink /> with any question or complaint about your data.
        </p>
        <p>
          You can also complain to the Information Commissioner’s Office (ICO),
          the UK’s data protection regulator, at ico.org.uk. We’d appreciate the
          chance to put things right first.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalArticle
      title="Privacy policy"
      updated="13 October 2026"
      intro={
        <>
          <p>
            Primale handles blood test results and health data, so here’s the
            short version: we use your data to run your membership and show you
            your results, we never sell it, and we never use health data for
            advertising. You can delete your account and your results from
            inside the app at any time.
          </p>
          <p>
            The detail is below. See also our{" "}
            <Link href="/terms" className="text-primary-light underline">
              terms of service
            </Link>
            .
          </p>
        </>
      }
      clauses={clauses}
    />
  );
}
