import {
  ADDRESS,
  CALL_AFTER_APPOINTMENTS,
  EMAIL,
  EMAIL_REPEAT_PRESCRIPTIONS,
  TELEPHONE,
} from "../constants";
import "../style/page.css";

export function Prescriptions() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Prescriptions</div>
          <p>
            Medication can only be prescribed after an appointment.
            Subsequently, repeat prescriptions can be requested online, by
            telephone, by e-mail, or by post.
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Online</div>
          <p>
            To request a repeat prescription online, please log into{" "}
            <a
              href="https://systmonline.tpp-uk.com/"
              rel="noreferrer"
              target="_blank"
            >
              SystmOnline
            </a>
            . You will need to have registered for this service. To register,
            please call reception on {TELEPHONE} or e-mail {EMAIL} with the name
            and address of your pharmacist.
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Telephone</div>
          <p>{TELEPHONE}</p>
          <p>Please try to call after {CALL_AFTER_APPOINTMENTS} if possible.</p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">E-mail</div>
          <p>{EMAIL_REPEAT_PRESCRIPTIONS}</p>
          <p>Please use the subject 'Repeat Prescriptions'.</p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Post</div>
          <p>Please send a stamped addressed envelope to:</p>
          <p>
            {["Repeat Prescriptions", ...ADDRESS].map((fragment) => (
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
