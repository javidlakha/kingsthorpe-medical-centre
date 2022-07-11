import { Link } from "react-router-dom";
import "../style/page.css";

export function PageNotFound() {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="page-title">Page not found</div>
          <p>The page you were looking for cannot be found.</p>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </>
  );
}
