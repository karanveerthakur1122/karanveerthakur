import React from "react";
import '../css/Copyright.css'

const Copyright = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const companyName = "karan Veer Thakur"
  return (
    <div className="copyright">
      <p>
        &copy; {currentYear} {companyName}. All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;