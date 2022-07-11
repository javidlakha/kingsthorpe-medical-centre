import { OPENING_HOURS, TELEPHONE } from "../constants";
import "../style/page.css";

export function OutOfHours() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Out of hours</div>
          <p>
            If you need medical advice when the practice is closed, please call
            111.
          </p>
          <p>
            <b>For all life threatening conditions always call 999.</b>
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Appointments</div>
          <p>
            Appointments between 6.30pm - 9.30pm on weekdays and 9am - 5pm on
            weekends and Bank Holidays can be made with the{" "}
            <a
              href="https://northantsgpalliance.com/services/general-practice-extended-access/"
              rel="noreferrer"
              target="_blank"
            >
              Northampton GP Extended Access Service
            </a>
            . To book an appointment, please contact the practice on {TELEPHONE}{" "}
            during our opening hours ({OPENING_HOURS}). Please note that though
            you will be seen by an experienced local GP or nurse, it is unlikely
            to be your own.
          </p>
        </div>
      </div>
    </>
  );
}
