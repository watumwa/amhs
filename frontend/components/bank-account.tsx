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
