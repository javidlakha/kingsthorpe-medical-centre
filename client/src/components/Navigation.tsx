import { Link } from "react-router-dom";
import { PAGES } from "../constants";
import "../style/navigation.css";

export function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-container">
        <img className="nhs-logo" src="nhs-logo.jpg" alt="NHS logo" />
        <Link className="surgery-name" to="/">
          Kingsthorpe <br />
          Medical Centre
        </Link>
        <ul className="navigation-links">
          <li>
            <Link to={PAGES.appointments}>Appointments</Link>
          </li>
          <li>
            <Link to={PAGES.prescriptions}>Prescriptions</Link>
          </li>
          <li>
            <Link to={PAGES.register}>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
