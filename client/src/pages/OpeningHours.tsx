import { OPENING_HOURS } from "../constants";
import { practiceTrainingDays } from "../components/practice-training-days";
import "../style/page.css";

export function OpeningHours() {
  return (
    <div className="content-container">
      <div className="content">
        <div className="page-title">Opening hours</div>
        <p>
          The practice is open <b>{OPENING_HOURS}</b>, except on the following
          practice training days, when we are open from 8am - 12.30pm:
        </p>
        <p>
          <ul className="content-links">
            {practiceTrainingDays().map((date) => (
              <li>{date}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
}
