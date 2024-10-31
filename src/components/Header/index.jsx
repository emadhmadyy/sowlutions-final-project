import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Flyout from "../Flyout";
import Project from "../project";
const Header = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchFieldText) {
      navigate(`/not-found?search=${encodeURIComponent(searchFieldText)}`);
    }
  };
  const [searchFieldText, setSearchFieldText] = useState("");
  const handleChange = (event) => {
    setSearchFieldText(event.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("Songs");
  // eslint-disable-next-line no-unused-vars
  const [menu, SetMenu] = useState(["All", "Songs", "Photos", "Videos", "SFX"]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const toggleFlyout = () => {
    if (isprojectListOpen == true) {
      setIsProjectListOpen(false);
    }
    setIsFlyoutOpen(!isFlyoutOpen);
  };
  const onMenuItemClick = (m) => {
    setSearchText(m);
    setIsOpen(false);
  };
  const [isprojectListOpen, setIsProjectListOpen] = useState(false);
  const handleChangeProjectClick = () => {
    setIsProjectListOpen(true);
    setIsFlyoutOpen(false);
  };

  return (
    <>
      <div className="header-wrapper rlp">
        <div className="white">Thematic logo </div>
        <div className="header-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search"
              className="search-bar"
              required
              value={searchFieldText}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <div className="input-label" onClick={() => toggleMenu()}>
              <div>{searchText}</div>
              <img src="./down-arrow.png" alt="down-arrow-icon" />
            </div>
            {isOpen && (
              <div className="drop-menu">
                {menu.map((m, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer"
                      onClick={() => onMenuItemClick(m)}
                    >
                      {m}
                    </div>
                  );
                })}
              </div>
            )}
            <img
              src="./search.png"
              alt=""
              className="search-icon cursor-pointer"
              onClick={() => handleSearch()}
            />
          </div>
          <div
            className="rlp white cursor-pointer"
            onClick={() => {
              navigate("/not-found");
            }}
          >
            Discover
          </div>
          <div
            className="white cursor-pointer"
            onClick={() => {
              navigate("/not-found");
            }}
          >
            Songs
          </div>
          <div className="rlp white cursor-pointer">Playlists</div>
          <div className="white cursor-pointer">1865 points</div>
          <div
            className="rlp white cursor-pointer"
            onClick={() => {
              navigate("/not-found");
            }}
          >
            bell
          </div>
          <div className="project-wrapper-header">
            <img
              src="./project-profile.jpg"
              alt="channel profile photo"
              className="project-profile-header"
            />
            <div
              onClick={() => {
                toggleFlyout();
              }}
              className="cursor-pointer"
            >
              <div className="white">Frontend FYI</div>
              <div className="medium-text white">Youtube channel name</div>
              <div className="project-subtitles ">21,800 subscribers</div>
            </div>
            {isFlyoutOpen && (
              <Flyout clicked={() => handleChangeProjectClick()} />
            )}
            {isprojectListOpen && (
              <Project clicked={() => setIsProjectListOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
