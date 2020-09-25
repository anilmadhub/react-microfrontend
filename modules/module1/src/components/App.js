import React from "react";

export default ({ name = "<module_name>" }) => {
  return (
    <div>
      [Module 1] <b>remote</b> {name} React micro app
    </div>
  );
};
