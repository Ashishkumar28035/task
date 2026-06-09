import "../Styles/Signup.css";
import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";

function Signup() {
  const navigate = useNavigate();

  return (
    <MobileWrapper>
      <div className="signup-container">
        <h1 className="signup-title">
          Create your <br />
          PopX account
        </h1>

        <form className="signup-form">
          <div className="input-group">
            <label>Full Name*</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label>Phone number*</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label>Email address*</label>
            <input type="email" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label>Password*</label>
            <input type="password" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label>Company name</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="agency-section">
            <p className="agency-title">
              Are you an Agency?<span>*</span>
            </p>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="agency"
                  defaultChecked
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="agency"
                />
                No
              </label>
            </div>
          </div>
        </form>

        <button
          className="create-account-btn"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>
      </div>
    </MobileWrapper>
  );
}

export default Signup;