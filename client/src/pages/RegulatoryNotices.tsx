import { ADDRESS } from "../constants";
import "../style/page.css";

export function RegulatoryNotices() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Regulatory notices</div>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Data protection</div>
          <p>
            The practice complies with the{" "}
            <a href="https://www.gov.uk/data-protection" rel="noreferrer" target="_blank">
              Data Protection Act (2018)
            </a>
            .
          </p>
          <p>
            Our doctors and nursing staff have access to patients' records for
            clinical purposes. Other staff members have access on a strict 'need
            to know' basis only. Patient confidentiality is important to us. We
            do not provide information about a patient to third parties (e.g.
            employers, private health insurers, etc.) without the patient's
            consent.
          </p>
          <p>
            Under the Data Protection Act you are entitled to access clinical
            records, or any other personal information held about you. Personal
            and medical details will only be released to the patient, their
            legal guardian or other parties with the patient’s written request.
            Please contact the Practice Manager for further information and
            costs (if applicable). You can do this by writing to:
          </p>
          <p>
            {["The Practice Manager", ...ADDRESS].map((fragment) => (
              <>
                {fragment} <br />
              </>
            ))}
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Freedom of information</div>
          <p>
            The{" "}
            <a
              href="https://www.gov.uk/make-a-freedom-of-information-request"
              rel="noreferrer"
              target="_blank"
            >
              Freedom of Information Act (2000)
            </a>{" "}
            recognises that members of the public have the right to request
            access to recorded information held by this surgery.
          </p>
          <p> Freedom of information requests should be made in writing to:</p>
          <p>
            {["The Practice Manager", ...ADDRESS].map((fragment) => (
              <>
                {fragment} <br />
              </>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
