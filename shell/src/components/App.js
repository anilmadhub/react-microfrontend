import React, { lazy, Suspense } from "react";
const Module1 = lazy(() => import("module1/App"));
const Module2 = lazy(() => import("module2/App"));

export const App = () => {
  return (
    <>
      <div style={{ background: "green" }}>Shell</div>
      <Suspense fallback="loading module... ">
        <Module1 name="Module_name" />
        <Module2 name="Module_name" />
      </Suspense>
    </>
  );
};
