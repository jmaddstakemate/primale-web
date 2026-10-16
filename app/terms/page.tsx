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
  title: "Terms of service",
  description:
    "The terms covering the Primale app, the Primale Pro membership, and this website.",
};

const clauses: LegalClause[] = [
  {
    id: "about",
    heading: "About these terms",
    body: (
      <>
        <p>
          These terms are an agreement between you and Primale Health Limited
          (“Primale”, “we”, “us”). They cover the Primale mobile app, the
          Primale Pro membership, and this website.
        </p>
        <CompanyDetails />
        <p>
          By creating an account, joining the waitlist, or taking out a
          membership, you accept these terms. If you don’t agree with them,
          please don’t use Primale. Questions go to <MailLink />.
        </p>
      </>
    ),
  },
  {
    id: "not-medical-advice",
    heading: "Primale is not medical advice",
    body: (
      <>
        <p>
          <Highlight>
            Primale is a wellness and lifestyle product, not healthcare.
          </Highlight>{" "}
          We are not a clinic, a pharmacy, a medical device, or a diagnostic
          service, and we do not provide testosterone replacement therapy (TRT)
          or any other treatment.
        </p>
        <p>
          Results, reference ranges, trends, and the supplement and lifestyle
          suggestions in the app are information and general guidance only. They
          are not a diagnosis and are not a substitute for advice from a
          qualified clinician. Primale does not diagnose, treat, cure, or
          prevent any condition.
        </p>
        <p>
          We don’t interpret your results clinically. If something in your
          results looks unusual we may suggest you speak to a clinician, but it
          remains your decision and your responsibility to seek care.
        </p>
        <p>
          If you feel unwell, speak to your GP. In an emergency call 999, or
          call 111 for urgent advice.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    heading: "Who can use Primale",
    body: (
      <>
        <p>To hold a Primale account or membership, you confirm that:</p>
        <LegalList
          items={[
            "You are 18 or over.",
            "You live in the United Kingdom and can give us a UK delivery address. Blood test kits are only posted within the UK.",
            "The details you give us — including the information on your lab form — are accurate and about you.",
            "You are using one account for yourself only.",
          ]}
        />
        <p>
          You must not order a kit for someone else, or return a sample that
          isn’t your own. Results are matched to the account and lab form they
          were ordered under, and a mismatched sample makes the result
          meaningless.
        </p>
      </>
    ),
  },
  {
    id: "account",
    heading: "Your account",
    body: (
      <>
        <p>
          You can sign in with Apple, Google, or an email address and password.
          Keep your sign-in details secure — you’re responsible for activity on
          your account.
        </p>
        <p>
          Keep your delivery and personal details up to date. We can’t post a
          kit without a complete delivery address, and the lab can’t process a
          sample without the details on your lab form.
        </p>
        <p>
          You can delete your account at any time from Profile → Delete account.
          That cancels your membership immediately and removes your results
          history — see our{" "}
          <Link href="/privacy#account-deletion" className="text-primary-light underline">
            privacy policy
          </Link>{" "}
          for what we delete and what we have to keep.
        </p>
      </>
    ),
  },
  {
    id: "membership",
    heading: "What Primale Pro includes",
    body: (
      <>
        <p>While your membership is active, you get:</p>
        <LegalList
          items={[
            "A finger-prick blood test kit posted to your UK address each month.",
            "Analysis of your sample by an accredited UK laboratory.",
            "Your results in the app, tracked month to month.",
            "Supplement and lifestyle suggestions based on those results and the goals you set.",
          ]}
        />
        <p>
          Membership does <Highlight>not</Highlight> include supplements
          themselves, prescriptions, medication, clinical consultations,
          phlebotomy, or any form of treatment.
        </p>
        <p>
          Your kit entitlement is one kit per month of active membership. It
          doesn’t accumulate — if you turn off automatic testing or skip a
          month, that month’s kit isn’t banked for later.
        </p>
      </>
    ),
  },
  {
    id: "billing",
    heading: "Price, billing and automatic renewal",
    body: (
      <>
        <p>
          Primale Pro costs <Highlight>£49 per month</Highlight> or{" "}
          <Highlight>£490 per year</Highlight>, in GBP, including VAT where it
          applies. The price you’ll be charged is shown in the app before you
          confirm.
        </p>
        <p>
          Payments are taken by Stripe, our payment processor. We never see or
          store your full card details.
        </p>
        <p>
          <Highlight>Your membership renews automatically</Highlight> at the end
          of each billing period — monthly or yearly, depending on the plan you
          chose — using your saved payment method, until you cancel. Membership
          is bought through Primale rather than through Apple’s or Google’s
          in-app purchases, so you cancel it in Primale and not in your App
          Store or Play Store subscriptions.
        </p>
        <p>
          If a payment fails we may retry it, and your membership and kit
          deliveries may pause until a payment succeeds.
        </p>
        <p>
          We may change our prices. If a change affects your renewal we’ll email
          you at least 30 days beforehand, and you can cancel before it takes
          effect.
        </p>
      </>
    ),
  },
  {
    id: "cancellations",
    heading: "Cancelling and refunds",
    body: (
      <>
        <p>
          You can cancel at any time from Profile → Manage billing &
          subscription, or by emailing <MailLink />. Cancelling stops future
          renewals; your membership continues until the end of the period you’ve
          already paid for.
        </p>
        <p>
          <Highlight>Your 14-day right to change your mind.</Highlight> As a UK
          consumer you have 14 days from starting your membership to cancel for
          a refund. If we’ve already posted a kit and you’ve returned your
          sample to the lab in that time, we may deduct the value of the test
          and analysis already provided, because you asked us to start that
          service straight away.
        </p>
        <p>
          After the 14-day period we don’t refund unused months, unless
          something has gone wrong on our side or the law says otherwise.
        </p>
        <p>
          If a kit arrives damaged, incomplete, or never arrives, tell us and
          we’ll replace it or refund that month’s test.
        </p>
      </>
    ),
  },
  {
    id: "blood-tests",
    heading: "Blood tests and lab results",
    body: (
      <>
        <p>
          Primale kits are self-collected finger-prick samples. You need to
          follow the instructions in the kit and in the app, including any
          guidance on timing, and return your sample promptly in the prepaid
          envelope.
        </p>
        <p>
          Some samples can’t be analysed — most often when there isn’t enough
          blood, the sample has degraded in transit, or the lab form is missing
          or doesn’t match. Where a failure wasn’t caused by not following the
          instructions, we’ll replace the kit once for that month.
        </p>
        <p>
          Turnaround times shown in the app are estimates. They depend on the
          post and on the laboratory, so we can’t guarantee a date. The
          laboratory is responsible for analysing your sample; we present the
          results it returns.
        </p>
        <p>
          A result describes a single moment in time and can be affected by
          sleep, illness, training, hydration, time of day, and anything you’re
          taking. Treat a single reading as one data point, not a verdict.
        </p>
      </>
    ),
  },
  {
    id: "protocols",
    heading: "Supplement and lifestyle suggestions",
    body: (
      <>
        <p>
          Suggestions in the app are produced from your results, your goals, and
          the information you give us, using a fixed set of rules. They are not
          a clinician’s judgement about you.
        </p>
        <p>
          We don’t sell, supply, or dispense supplements. You buy them yourself
          from whoever you choose, and that purchase is between you and that
          seller.
        </p>
        <p>
          Check with a pharmacist or clinician before starting a supplement,
          especially if you take medication, are being treated for a condition,
          or are due surgery. Never stop or change prescribed medication because
          of something you read in Primale.
        </p>
      </>
    ),
  },
  {
    id: "apple-health",
    heading: "Apple Health and device data",
    body: (
      <>
        <p>
          If you grant permission on iOS, Primale reads data such as sleep,
          workouts, heart rate, and activity from Apple Health so you can see it
          alongside your results. Access is read-only — we never add to or
          change your Health data.
        </p>
        <p>
          You can disconnect in the app, or revoke access at any time in iOS
          Settings → Privacy &amp; Security → Health.
        </p>
        <p>
          We never use Health data for advertising or marketing, and we never
          sell it. See our{" "}
          <Link href="/privacy#health-data" className="text-primary-light underline">
            privacy policy
          </Link>{" "}
          for the detail.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    body: (
      <>
        <p>When using Primale, you agree not to:</p>
        <LegalList
          items={[
            "Share, resell, or transfer your account, membership, or test kits.",
            "Submit a blood sample that isn’t your own, or give false details on a lab form.",
            "Try to access another member’s data, or any part of our systems you haven’t been given access to.",
            "Copy, scrape, reverse-engineer, or resell any part of the app or website.",
            "Present Primale content as medical advice to other people.",
            "Use Primale for anything unlawful, or in a way that disrupts it for others.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ip",
    heading: "Our content and your content",
    body: (
      <>
        <p>
          The app, this website, and everything in them — including the design,
          text, reference ranges, and the logic behind our suggestions — belong
          to us or our licensors. We give you a personal, non-transferable,
          revocable licence to use the app for your own membership, and nothing
          more.
        </p>
        <p>
          Your results and the information you enter remain yours. We may use
          anonymised, aggregated data that cannot identify you to improve
          Primale.
        </p>
      </>
    ),
  },
  {
    id: "waitlist",
    heading: "The waitlist",
    body: (
      <p>
        Joining the Primale waitlist does not create a membership, charge your
        card, or guarantee a place. We’ll email you when memberships open in
        your area. You can ask to be removed at any time by contacting{" "}
        <MailLink />.
      </p>
    ),
  },
  {
    id: "availability",
    heading: "Availability and changes to Primale",
    body: (
      <>
        <p>
          We aim to keep Primale available, but it may be interrupted for
          maintenance and updates, or for reasons outside our control. We may
          add, change, or remove features as the product develops.
        </p>
        <p>
          If we make a change that meaningfully reduces what your membership
          includes, or if we withdraw the service altogether, you can cancel and
          we’ll refund the unused part of the period you’ve paid for.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    heading: "Ending your membership",
    body: (
      <>
        <p>
          You can cancel or delete your account whenever you like, as described
          above.
        </p>
        <p>
          We may suspend or end your membership if you break these terms, if
          payments repeatedly fail, if we reasonably believe your use of Primale
          is unsafe or fraudulent, or if we stop offering the service. Where we
          end your membership and you haven’t broken these terms, we’ll refund
          the unused part of your current period.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    heading: "Our responsibility for loss",
    body: (
      <>
        <p>
          We don’t exclude or limit our liability where it would be unlawful to
          do so. That includes liability for death or personal injury caused by
          our negligence, for fraud, and for breaches of your legal rights as a
          consumer.
        </p>
        <p>
          We are responsible for foreseeable loss and damage caused by us
          breaking these terms or failing to use reasonable care and skill. We
          are not responsible for loss that isn’t foreseeable, or for loss
          arising from you relying on a result or a suggestion in the app
          instead of getting clinical advice.
        </p>
        <p>
          Primale is supplied for personal use. If you use it for any commercial
          purpose, we have no liability to you for loss of profit, business,
          goodwill, or opportunity.
        </p>
        <p>
          Where the law allows a cap on our liability, our total liability to
          you is limited to the amount you paid us in the 12 months before the
          claim arose.
        </p>
      </>
    ),
  },
  {
    id: "app-stores",
    heading: "App stores",
    body: (
      <>
        <p>
          If you downloaded the Primale app from the App Store or Google Play,
          you also need to comply with that store’s terms.
        </p>
        <p>
          These terms are between you and Primale only — not Apple or Google.
          Neither Apple nor Google is responsible for the app, its content, or
          supporting it, and any support request should come to us at{" "}
          <MailLink />. Apple and its subsidiaries are third-party beneficiaries
          of these terms and may enforce the parts that apply to them.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    body: (
      <p>
        We may update these terms as Primale develops. If a change materially
        affects you, we’ll tell you by email or in the app at least 30 days
        before it applies, unless the change is needed for legal or safety
        reasons. Continuing to use Primale after a change takes effect means you
        accept it. The date at the top of this page shows when it was last
        updated.
      </p>
    ),
  },
  {
    id: "complaints",
    heading: "Complaints and contact",
    body: (
      <p>
        If something has gone wrong, email <MailLink /> and we’ll aim to reply
        within five working days. Nothing here affects your statutory rights as
        a UK consumer, and you can get free advice from Citizens Advice.
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of England and Wales, and the
        courts of England and Wales have exclusive jurisdiction. If you live in
        Scotland or Northern Ireland, you can also bring proceedings in the
        courts there.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalArticle
      title="Terms of service"
      updated="13 October 2026"
      intro={
        <>
          <p>
            These terms cover the Primale app, the Primale Pro membership, and
            this website. Plain-English summary: Primale is a wellness product,
            not healthcare; you need to be 18 or over and in the UK; membership
            renews automatically until you cancel; and nothing in the app
            replaces advice from a clinician.
          </p>
          <p>
            The full terms are below — the summary doesn’t replace them. See
            also our{" "}
            <Link href="/privacy" className="text-primary-light underline">
              privacy policy
            </Link>
            .
          </p>
        </>
      }
      clauses={clauses}
    />
  );
}
