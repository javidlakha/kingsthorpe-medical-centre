import "../style/page.css";

export function OnlineAppointments() {
  return (
    <div className="content-container">
      <div className="content">
        <div className="page-title">Online appointments</div>
        <p>
          Patients of Kingsthorpe Medical Centre can book an online
          appointment with an NHS general practitioner using <a
            href="https://www.livi.co.uk/"
            rel="noreferrer"
            target="_blank"
          >
            LIVI
          </a>. This provides access to medical advice, prescriptions and
          referrals on the same day (including weekends). The service is
          provided free on the NHS.
        </p>
        <p>
          You can download the <a
          href="https://www.livi.co.uk/"
          rel="noreferrer"
          target="_blank"
        >
          LIVI
        </a> app to your mobile phone or tablet, from the <a
          href="https://apps.apple.com/gb/app/livi-see-a-gp-by-video/id1433906974"
          rel="noreferrer"
          target="_blank"
        >
          App Store
        </a> or <a
          href="https://play.google.com/store/apps/details?id=health.livi.android"
          rel="noreferrer"
          target="_blank"
        >
          Google Play
        </a>.
        </p>
        <p>
          <a
            href="https://www.livi.co.uk/"
            rel="noreferrer"
            target="_blank"
          >
            LIVI
          </a> GPs are all GMC-registered NHS GPS, who (with your consent)
          will be able to access your medical records and diagnose you based
          on your medical history.
        </p>
      </div>
    </div>
  );
}
