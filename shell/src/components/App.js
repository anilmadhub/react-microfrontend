import React, { lazy, Suspense } from "react";
const Module1 = lazy(() => import("module1/App"));

export const App = () => {
  return (
    <>
      <div>Shell</div>
      <Suspense fallback="loading module... ">
        <Module1 name="Module_name" />
      </Suspense>
    </>
  );
};
