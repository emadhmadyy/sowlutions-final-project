import { useNavigate } from "react-router-dom";
import "./styles.css";
// eslint-disable-next-line react/prop-types
const Flyout = ({ clicked }) => {
  const navigate = useNavigate();
  const navigateToNotFoundPage = () => {
    navigate("not-found");
  };
  return (
    <div className="flyout-wrapper">
      <div className="email white">husseinkawouk@gmail.com</div>
      <div className="profile">
        <img src="./unnamed.jpg" className="profile-img" />
        <div
          className="white cursor-pointer"
          onClick={() => navigateToNotFoundPage()}
        >
          {" "}
          view profile
        </div>
      </div>
      <button className="swtich-project-btn" onClick={clicked}>
        Switch Project
      </button>
      <div
        className="white cursor-pointer"
        onClick={() => navigateToNotFoundPage()}
      >
        Licenses & Downloads
      </div>
      <div
        className="white cursor-pointer"
        onClick={() => navigateToNotFoundPage()}
      >
        My Playlists
      </div>
      <div
        className="white cursor-pointer"
        onClick={() => navigateToNotFoundPage()}
      >
        Trackfluencer
      </div>
      <div
        className="white cursor-pointer"
        onClick={() => navigateToNotFoundPage()}
      >
        Points
      </div>
      <div
        className="white cursor-pointer"
        onClick={() => navigateToNotFoundPage()}
      >
        Settings
      </div>
      <div
        className="white cursor-pointer"
        onClick={() => navigateToNotFoundPage()}
      >
        Logout
      </div>
    </div>
  );
};
export default Flyout;
