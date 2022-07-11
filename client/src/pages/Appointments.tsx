import { Link } from "react-router-dom";
import {
  CALL_AFTER_APPOINTMENTS,
  OPENING_HOURS,
  PAGES,
  TELEPHONE,
} from "../constants";
import "../style/page.css";

export function Appointments() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Appointments</div>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Book an appointment</div>
          <p>
            Appointments can be booked by telephone or online. Our opening hours
            are {OPENING_HOURS}, but{" "}
            <Link to={PAGES.outOfHours}>out of hours appointments</Link> are
            also possible.
          </p>
          <ul>
            <li>
              To book an appointment by telephone, call {TELEPHONE}. (Please try
              to call after {CALL_AFTER_APPOINTMENTS} if possible.)
            </li>
            <li>
              To book an appointment online, log into{" "}
              <a
                href="https://app.doctorlink.com/kingsthorpemedical/signin"
                rel="noreferrer"
                target="_blank"
              >
                Doctorlink
              </a>
              . (
              <a
                href="https://app.doctorlink.com/kingsthorpemedical/register"
                rel="noreferrer"
                target="_blank"
              >
                Requires registration
              </a>
              .)
            </li>
          </ul>
          <p>Patients may see the doctor of their choice.</p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Urgent appointments</div>
          <p>
            Urgent appointments will always be seen the same day but not
            necessarily with your usual doctor. If you require an urgent
            appointment you will be booked in for a telephone consultation with
            our nursing team. If they determine you need to see a clinician this
            will be arranged for you.
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Cancellations</div>
          <p>
            Please do everything possible to meet an appointment. Missed
            appointments prevent us from seeing other patients and drain the
            NHS' resources. However, if it is imperative that you cancel an
            appointment, <b>please tell us as soon as possible</b>. You can do
            so by calling {TELEPHONE}.
          </p>
        </div>
      </div>
    </>
  );
}
