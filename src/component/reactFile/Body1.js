import React from "react";
import "../css/Body1.css"; // Import the CSS file for styling
import profile from "../image/profile.png";
import resume from "../image/resume.pdf";
const Body1 = () => {
  const handleClick = () => {
    alert("Downloading...");
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="body1-container">
      <div className="side1">
        <div className="title">
          <h1 class="gradient-text-shadow">
            FULL STACK <br />
            DEVELOPER
          </h1>
        </div>
        <div>
          <div className="description">
            I am Karan Veer - Web Developer with a passion for creating
            beautiful and responsive websites.
          </div>
          <div className="DownloadBtn">
            {/* <button onClick={handleClick}>
                    View My Work
                </button> */}

            <button
              className="cursor-pointer mt-4 flex justify-around items-center bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
              onClick={handleClick}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className="profilePic">
        <img src={profile} alt="profilePic" />
      </div>
    </div>
  );
};

export default Body1;
