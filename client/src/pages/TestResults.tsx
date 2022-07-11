import { CALL_AFTER_TEST_RESULTS } from "../constants";
import "../style/page.css";

export function TestResults() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Test Results</div>
          <p>
            To obtain your test results, please call reception on{" "}
            <a href="tel:+441604713823">01604 713823</a>{" "}
            <b>after {CALL_AFTER_TEST_RESULTS}</b>.
          </p>
          <p>
            Please allow at least three working days for the result of blood
            tests and fourteen days for X-ray results. Other tests may take take
            longer.
          </p>
        </div>
      </div>
    </>
  );
}
