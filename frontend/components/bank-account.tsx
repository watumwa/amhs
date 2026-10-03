import { siteSettings } from "../content/site-settings";

export function BankAccountCard() {
  const account = siteSettings.bankAccount;

  return <aside className="bank-account-card" aria-label="Official school bank account">
    <div className="bank-account-heading">
      <img src={account.logo} alt="Equity logo" width={376} height={265} />
      <div>
        <span>Official school account</span>
        <strong>Bank transfer details</strong>
      </div>
    </div>
    <dl>
      <div><dt>Bank</dt><dd>{account.bankName}</dd></div>
      <div><dt>Account number</dt><dd className="bank-account-number">{account.accountNumber}</dd></div>
      <div><dt>Account name</dt><dd>{account.accountName}</dd></div>
    </dl>
    <p>Before sending funds, confirm that the recipient name shown by the bank matches the account name above. Keep your transfer receipt for reference.</p>
  </aside>;
}

export function BankAccountSection() {
  return <section className="bank-account-section">
    <div className="container bank-account-section-grid">
      <div className="bank-account-section-copy">
        <p className="eyebrow eyebrow-light"><span /> Pay by bank transfer</p>
        <h2>A clear, official way<br /><em>to make your payment.</em></h2>
        <p>Use the school account details shown here for approved school payments, donations and sponsorship support. Contact the school office if you need help identifying the correct payment reference.</p>
      </div>
      <BankAccountCard />
    </div>
  </section>;
}

type MobileMoneyMethod = (typeof siteSettings.schoolFeeMobileMoney)[number];

function MobileMoneyCard({ method }: { method: MobileMoneyMethod }) {
  return <article className={`mobile-money-card mobile-money-card--${method.brand}`}>
    <div className="mobile-money-card-heading">
      {method.brand === "mtn"
        ? <div className="payment-brand payment-brand--mtn" aria-label="MTN MoMo"><span>MTN</span><strong>MoMo</strong></div>
        : <div className="payment-brand payment-brand--airtel" aria-label="Airtel Money"><strong>airtel</strong><span>money</span></div>}
      <span className="payment-purpose">School fees</span>
    </div>
    <p>Merchant ID</p>
    <strong className="merchant-id">{method.merchantId}</strong>
    <dl>
      <div><dt>Payment route</dt><dd>{method.paymentRoute}</dd></div>
      <div><dt>Reference</dt><dd>Student name</dd></div>
    </dl>
    <p className="mobile-money-note">Use this merchant ID only for AMHS school fees. Confirm the school details before approving payment and keep the transaction receipt.</p>
  </article>;
}

export function SchoolFeesPaymentSection() {
  return <section className="school-fees-payment-section" aria-labelledby="school-fee-payment-title">
    <div className="container">
      <div className="school-fees-payment-heading">
        <div>
          <p className="eyebrow eyebrow-light"><span /> Official payment channels</p>
          <h2 id="school-fee-payment-title">Choose the method<br /><em>that works for your family.</em></h2>
        </div>
        <p>School fees may be paid by bank transfer, MTN MoMo or Airtel Money. Use the student&apos;s name as the payment reference and retain the receipt for school verification.</p>
      </div>
      <div className="school-fees-payment-grid">
        <BankAccountCard />
        {siteSettings.schoolFeeMobileMoney.map((method) => <MobileMoneyCard method={method} key={method.provider} />)}
      </div>
      <p className="payment-safety-note"><strong>Payment safety:</strong> confirm the merchant ID or account details before authorising a transaction. If anything shown on your phone differs from the details above, stop and contact the school office.</p>
    </div>
  </section>;
}
