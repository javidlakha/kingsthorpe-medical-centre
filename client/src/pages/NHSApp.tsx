import "../style/page.css";

export function NHSApp() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">NHS app</div>
          <p>The{" "}
            <a
              href="https://www.nhs.uk/nhs-app/"
              rel="noreferrer"
              target="_blank"
            >
              NHS app
            </a>
            {" "}gives you a simple and secure way to access a range of NHS
            services.
          </p>
          <p>
            Download the NHS App on your smartphone or tablet via the
            {" "}
            <a
                href="https://apps.apple.com/us/app/nhs-app/id1388411277"
                rel="noreferrer"
                target="_blank"
            >
              App Store
            </a>
            {" "}or{" "}
            <a
                href="https://play.google.com/store/apps/details?id=com.nhs.online.nhsonline"
                rel="noreferrer"
                target="_blank"
            >
              Google Play
            </a>
            . You can also access the same services in a web browser by logging
            in through the{" "}
            <a
                href="https://www.nhs.uk/nhs-app/account/"
                rel="noreferrer"
                target="_blank"
            >
              NHS website
            </a>
            .
          </p>
          <p>
            You must be aged 13 or over to use the NHS App. You also need to be
            registered with a GP surgery in England or the Isle of Man. Find
            out more about who can use the NHS App{" "}
            <a
              href="https://www.nhs.uk/nhs-app/nhs-app-help-and-support/getting-started-with-the-nhs-app/who-can-use-the-nhs-app/"
              rel="noreferrer"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <div>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="video-container"
              height="315"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube-nocookie.com/embed/zqivFwl7cWE?si=CeD3E7U3dndDLbpj"
              title="Meet your NHS App"
              width="560"
            />
          </div>
        </div>
      </div>
    </>
  );
}
