import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
import { FaHome } from "react-icons/fa";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link
            to="/"
            style={{
              color: "#03a9f4",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <FaHome
              size={22}
              style={{ marginRight: "0.25rem", paddingBottom: "2px" }}
            />{" "}
            Back To Home Page
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
