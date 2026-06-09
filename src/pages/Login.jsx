import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import "../Styles/Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <MobileWrapper>
      <div className="login-page">
        <h1 className="login-title">
          Signin to your <br />
          PopX account
        </h1>

        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/profile")}
        >
          Login
        </button>
      </div>
    </MobileWrapper>
  );
}

export default Login;