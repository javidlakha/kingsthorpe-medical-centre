import { CALL_AFTER_APPOINTMENTS, TELEPHONE } from "../constants";
import "../style/page.css";

export function Vaccinations() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Vaccinations</div>
          <p>
            Please call reception on {TELEPHONE} after {CALL_AFTER_APPOINTMENTS}{" "}
            to enquire about childhood immunisations or travel vaccinations.
          </p>
          <p>
            Please note that{" "}
            <a
              href="https://www.nhs.uk/conditions/travel-vaccinations/#which-travel-vaccines-are-free"
              rel="noreferrer"
              target="_blank"
            >
              some travel vaccines
            </a>{" "}
            are not covered by the NHS and therefore there may be a charge for
            this service.
          </p>
        </div>
      </div>
    </>
  );
}
