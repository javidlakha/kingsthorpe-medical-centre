import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PAGES } from "./constants";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/404";
import { Appointments } from "./pages/Appointments";
import { Chaperones } from "./pages/Chaperones";
import { Complaints } from "./pages/Complaints";
import { ContactDetails } from "./pages/ContactDetails";
import { HomeVisits } from "./pages/HomeVisits";
import { NHSApp } from "./pages/NHSApp";
import { OnlineAppointments } from "./pages/OnlineAppointments";
import { OpeningHours } from "./pages/OpeningHours";
import { OutOfHours } from "./pages/OutOfHours";
import { Prescriptions } from "./pages/Prescriptions";
import { Register } from "./pages/Register";
import { RegulatoryNotices } from "./pages/RegulatoryNotices";
import { SicknessCertificates } from "./pages/SicknessCertificates";
import { TestResults } from "./pages/TestResults";
import { Vaccinations } from "./pages/Vaccinations";

interface PageProps {
  children: ReactElement;
}

function Page(props: PageProps) {
  return <div className="page-container">{props.children}</div>;
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        height: "100vh",
      }}
    >
      <Navigation />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={PAGES.appointments} element={<Appointments />} />
          <Route path={PAGES.chaperones} element={<Chaperones />} />
          <Route path={PAGES.complaints} element={<Complaints />} />
          <Route path={PAGES.contactDetails} element={<ContactDetails />} />
          <Route path={PAGES.homeVisits} element={<HomeVisits />} />
          <Route path={PAGES.nhsApp} element={<NHSApp />} />
          <Route path={PAGES.onlineAppointments} element={<OnlineAppointments />} />
          <Route path={PAGES.openingHours} element={<OpeningHours />} />
          <Route path={PAGES.outOfHours} element={<OutOfHours />} />
          <Route path={PAGES.prescriptions} element={<Prescriptions />} />
          <Route path={PAGES.register} element={<Register />} />
          <Route
            path={PAGES.regulatoryNotices}
            element={<RegulatoryNotices />}
          />
          <Route
            path={PAGES.sicknessCertificates}
            element={<SicknessCertificates />}
          />
          <Route path={PAGES.testResults} element={<TestResults />} />
          <Route path={PAGES.vaccinations} element={<Vaccinations />} />

          <Route
            path="appointments.html"
            element={<Navigate to={PAGES.appointments} />}
          />
          <Route
            path="chaperones.html"
            element={<Navigate to={PAGES.chaperones} />}
          />
          <Route
            path="complaints.html"
            element={<Navigate to={PAGES.complaints} />}
          />
          <Route
            path="data-protection.html"
            element={<Navigate to={PAGES.regulatoryNotices} />}
          />
          <Route
            path="freedom-of-information.html"
            element={<Navigate to={PAGES.regulatoryNotices} />}
          />
          <Route
            path="home-visits.html"
            element={<Navigate to={PAGES.homeVisits} />}
          />
          <Route
            path="nhs-app.html"
            element={<Navigate to={PAGES.nhsApp} />}
          />
          <Route
            path="out-of-hours.html"
            element={<Navigate to={PAGES.outOfHours} />}
          />
          <Route
            path="regulatory-compliance.html"
            element={<Navigate to={PAGES.regulatoryNotices} />}
          />
          <Route
            path="repeat-prescriptions.html"
            element={<Navigate to={PAGES.prescriptions} />}
          />
          <Route
            path="register.html"
            element={<Navigate to={PAGES.register} />}
          />
          <Route
            path="sickness-certificates.html"
            element={<Navigate to={PAGES.sicknessCertificates} />}
          />
          <Route
            path="test-results.html"
            element={<Navigate to={PAGES.testResults} />}
          />
          <Route
            path="vaccinations.html"
            element={<Navigate to={PAGES.vaccinations} />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Page>
      <Footer />
    </div>
  );
}

export default App;
