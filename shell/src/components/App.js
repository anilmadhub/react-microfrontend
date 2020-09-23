import React, { lazy, Suspense } from "react";
const Test = lazy(() => import("module1/App"));

export const App = () => {
  return (
    <>
      <div>Shell</div>
      <Suspense fallback="loading module... ">
        <Test />
      </Suspense>
    </>
  );
};
