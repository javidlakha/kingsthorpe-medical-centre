import {
  ADDRESS,
  CALL_AFTER_APPOINTMENTS,
  CALL_AFTER_TEST_RESULTS,
  EMAIL,
  TELEPHONE,
} from "../constants";
import "../style/page.css";

export function ContactDetails() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Contact Details</div>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Telephone</div>
          <p>{TELEPHONE}</p>
          <p>Please try to call after {CALL_AFTER_APPOINTMENTS} if possible.</p>
          <p>
            <b>
              Test results are not available until after{" "}
              {CALL_AFTER_TEST_RESULTS}.
            </b>
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">E-mail</div>
          <p>{EMAIL}</p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Address</div>
          <p>
            {ADDRESS.map((fragment) => (
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
