import React, { lazy, Suspense } from "react";
const Module1 = lazy(() => import("module1/App"));
import "../assets/style.css";

export const App = () => {
  return (
    <>
      <div className="space">
        <h1>React micro frontend</h1>
        <h3>One shell, Two modules</h3>
      </div>
      <div className="greenBackground space">
        <strong className="space">Shell</strong>
        <Suspense fallback="loading module... ">
          <Module1 name="Module_name" />
        </Suspense>
      </div>
    </>
  );
};
