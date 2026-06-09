import MobileWrapper from "../components/MobileWrapper";
import "../Styles/Profile.css";

function Profile() {
  return (
    <MobileWrapper>
      <div>
        <div className="header">
          Account Settings
        </div>

        <div className="profile-card">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div>
            <h3>Marry Doe</h3>
            <p>marry@gmail.com</p>
          </div>
        </div>

        <p className="bio">
          Lorem Ipsum Dolor Sit Amet,
          Consetetur Sadipscing Elitr.
          Sed Diam Nonumy Eirmod Tempor.
        </p>
      </div>
    </MobileWrapper>
  );
}

export default Profile;