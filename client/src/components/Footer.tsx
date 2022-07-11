import { Link } from "react-router-dom";
import { ADDRESS, CQC_URL, OPENING_HOURS, PAGES } from "../constants";
import "../style/footer.css";

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <ul className="footer-links">
          <li>{ADDRESS.join(", ")}</li>
          <li>
            Opening hours: {OPENING_HOURS}, except on&nbsp;
            <Link to={PAGES.openingHours}>practice training days</Link>
          </li>
          <li>
            <Link to={PAGES.contactDetails}>Contact details</Link>
          </li>
        </ul>
        <a
          className="cqc-rating"
          href={CQC_URL}
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt='Inspected and rated as being "Good" by the Care Quality Commission'
            className="cqc-rating-image"
            src="cqc-good-white.svg"
          />
        </a>
      </div>
    </div>
  );
}
