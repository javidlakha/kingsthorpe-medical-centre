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
            To register at this practice, please fill out{" "}
            <a
              href="https://gp-registration.nhs.uk/K83035"
              rel="noreferrer"
              target="_blank"
            >
              this form
            </a>.
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
