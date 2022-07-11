import { ADDRESS, TELEPHONE } from "../constants";
import "../style/page.css";

export function Complaints() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Complaints</div>
          <p>Please let us know as soon as possible if you have a complaint.</p>
          <p>Complaints should be made to:</p>
          <p>
            {["The Practice Manager", ...ADDRESS].map((fragment) => (
              <>
                {fragment} <br />
              </>
            ))}
          </p>
          <p>
            Or you can telephone {TELEPHONE} - please ask for the practice
            manager.
          </p>
          <p>
            Patients may find the{" "}
            <a
              href="https://www.nhs.uk/using-the-nhs/about-the-nhs/how-to-complain-to-the-nhs/"
              rel="noreferrer"
              target="_blank"
            >
              NHS' complaints advice page
            </a>{" "}
            useful.
          </p>
        </div>
      </div>
    </>
  );
}
