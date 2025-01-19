import React from "react";
import "../css/Career.css"; // Import the CSS for styling and animations

const Career = () => {
  return (
    <div>
        <div className="title">
            <h1>Academic TimeLine</h1>
        </div>
      <div className="career-container">
        {/* Timeline structure */}
        <div className="timeline">
          {/* Main vertical line */}
          <div className="main-line"></div>

          {/* Lightning animation */}
          <div className="lightning"></div>

          {/* Career events */}
          <div className="event event-1">
            <span>10th Passout - 2020</span>
            <span>From Nepal</span>
            <h1>MITHILA INSTITUTE OF TECHNOLOGY</h1>
          </div>
          <div className="event event-2">
            <span>12th Passout - 2022</span>
            <span>From Nepal</span>
            <h1>MITHILA INSTITUTE OF TECHNOLOGY</h1>
          </div>
          <div className="event event-3">
            <span>B.Tech CSE - 2022-2026</span>
            <h1>KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;