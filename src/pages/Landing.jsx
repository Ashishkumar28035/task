import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import "../Styles/Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <MobileWrapper>
      <div className="landing">
        <div className="bottom-content">
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </MobileWrapper>
  );
}

export default Landing;