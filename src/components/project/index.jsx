import "./styles.css";
// eslint-disable-next-line react/prop-types
const Project = ({ clicked }) => {
  return (
    <>
      <div className="project-wrapper">
        <img
          src="./project-profile.jpg"
          alt="channel profile photo"
          className="project-profile"
        />
        <div>
          <div>Frontend FYI</div>
          <div className="medium-text">Youtube channel name</div>
          <div className="project-subtitles">21,800 subscribers</div>
          <div className="project-subtitles"> 78 videos</div>
        </div>
        <img
          src="./right.png"
          alt=""
          className="right-arrow cursor-pointer "
          onClick={clicked}
        />
      </div>
    </>
  );
};
export default Project;
