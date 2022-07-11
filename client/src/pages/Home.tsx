import { Link } from "react-router-dom";
import { ADDRESS, CQC_URL, OPENING_HOURS, PAGES } from "../constants";
import { practiceTrainingDays } from "../components/practice-training-days";
import "../style/page.css";

export function Home() {
  return (
    <>
      <div className="notice-container">
        <div className="notice">
          If you or anyone you have been in contact with is exhibiting
          coronavirus symptoms, please do not come to the surgery. Instead,
          please book an online appointment. Thank you for your understanding.
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Medical services</div>
          <ul className="content-links">
            <li>
              <Link to={PAGES.appointments}>Book an appointment</Link>
            </li>
            <li>
              <Link to={PAGES.prescriptions}>Order a repeat prescription</Link>
            </li>
            <li>
              <Link to={PAGES.register}>Register at this practice</Link>
            </li>
            <li>
              <Link to={PAGES.vaccinations}>Get vaccinated</Link>
            </li>
            <li>
              <Link to={PAGES.testResults}>Obtain test results</Link>
            </li>
            <li>
              <Link to={PAGES.sicknessCertificates}>
                Request a sickness certificate
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Useful information</div>
          <ul className="content-links">
            <li>
              <a href={CQC_URL} rel="noreferrer" target="_blank">
                Care Quality Commission report
              </a>
            </li>
            <li>
              <Link to={PAGES.contactDetails}>Contact details</Link>
            </li>
            <li>
              <Link to={PAGES.chaperones}>Chaperones</Link>
            </li>
            <li>
              <Link to={PAGES.complaints}>Complaints</Link>
            </li>
            <li>
              <Link to={PAGES.homeVisits}>Home visits</Link>
            </li>
            <li>
              <Link to={PAGES.outOfHours}>Out of hours cover</Link>
            </li>
            <li>
              <Link to={PAGES.regulatoryNotices}>Regulatory notices</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Opening hours</div>
          The practice is open <b>{OPENING_HOURS}</b>, except on the following
          practice training days, when we are open from 8am - 12.30pm:
          <ul className="content-links">
            {practiceTrainingDays(3).map((date) => (
              <li>{date}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Location</div>
          <p>
            {ADDRESS.map((fragment) => (
              <>
                {fragment} <br />
              </>
            ))}
          </p>
          <a
            href="https://www.google.com/maps/search/Kingsthorpe+Medical+Centre+Eastern+Avenue+South+Kingsthorpe++Northampton+Northamptonshire+NN2+7JN/@52.25870132446289,-0.8923816680908203,17z"
            rel="noreferrer"
            target="_blank"
          >
            Directions
          </a>
          <p>
            The building has step-free access and an audio induction loop.
            Parking is free for patients.
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Notices</div>
          <p>
            To protect our patients and our staff, all persons who enter the
            building are required to wear a mask, unless they have a medical
            exemption.
          </p>
        </div>
      </div>
    </>
  );
}
