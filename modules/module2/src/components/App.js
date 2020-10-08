import React from "react";
import "../assets/style.css";

export default ({ name = "<module_name>" }) => {
  return (
    <div className="blueBackground">
      [Module 2] <b>remote</b> {name} React micro app
    </div>
  );
};
