import "../style/page.css";

export function SicknessCertificates() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Sickness certificates</div>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Absences for seven days or fewer</div>
          <p>
            Patients can self-certificate for the first seven calendar days of
            their illness; employers are obliged to accept this certification.
          </p>
          <p>
            If you are absent from work due to illness for seven days or fewer,
            your employer should not ask for medical evidence that you've been
            ill. Most employers have their own self-certification form - if
            yours does not, you may use{" "}
            <a
              href="https://www.gov.uk/government/publications/statutory-sick-pay-employees-statement-of-sickness-sc2"
              rel="noreferrer"
              target="_blank"
            >
              HMRC's Employee Statement of Sickness (SC2)
            </a>{" "}
            form.
          </p>
          <p>
            Patients who are self-employed or unemployed can claim{" "}
            <a
              href="https://www.gov.uk/employment-support-allowance"
              rel="noreferrer"
              target="_blank"
            >
              Employment Support Allowance
            </a>{" "}
            from the Department for Work and Pensions.
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Absences for more than seven days</div>
          <p>
            Patients who are absent from work for more than seven days due to
            illness and whose employers require a 'fit note' (sick note) must be
            examined by a doctor. There is no charge for this. Please note that
            we cannot issue a 'fit note' if we did not see you during your
            illness; nor can we back-date certificates for when you were ill but
            not seen by a doctor.
          </p>
          <p>
            Doctors can use a 'fit note' to recommend alterations in working
            practices to employers that might allow the patient to work in some
            capacity before full health is regained.
          </p>
          <p>
            Patients under the care of a hospital can have their 'fit note'
            issued by the hospital, rather than by their general practitioners.
          </p>
        </div>
      </div>
    </>
  );
}
