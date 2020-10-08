import React from "react";
import "../assets/style.css";

export default ({ name = "<module_name>" }) => {
  return (
    <div className="yellowBackground">
      [Module 1] <b>remote</b> {name} React micro app
    </div>
  );
};
