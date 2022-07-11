import { Link } from "react-router-dom";
import { ADDRESS, PAGES } from "../constants";
import "../style/page.css";

export function Register() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Register at this practice</div>
          <p>
            To register at this practice, please fill out both the NHS'{" "}
            <a
              href={
                process.env.PUBLIC_URL +
                "/GMS1-family-doctor-services-registration-form.pdf"
              }
              rel="noreferrer"
              target="_blank"
            >
              family doctor services registration (GMS1)
            </a>{" "}
            and the practice's{" "}
            <a
              href={
                process.env.PUBLIC_URL + "/new-patient-registration-form.pdf"
              }
              rel="noreferrer"
              target="_blank"
            >
              new patient registration form
            </a>.
          </p>
          <p>
            You can either drop these forms off at reception during the
            practice's <Link to={PAGES.openingHours}>opening hours</Link>, or
            post them to
          </p>
          <p>
            {["Patient Registration", ...ADDRESS].map((fragment) => (
              <>
                {fragment} <br />
              </>
            ))}
          </p>
          <p>
            We will then be in touch to confirm your registration and arrange
            for a new patient health check.
          </p>
        </div>
      </div>
    </>
  );
}
