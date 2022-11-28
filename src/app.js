import _ from "lodash";
import(/* webpackPreload: true */ "./app.css");
import React, { useState, Suspense} from "react";
import { ErrorBoundary } from "react-error-boundary";
import Logo from "./logo.svg";
const Github = React.lazy(() => import("./github"));

const App = ({ name }) => { 
  const [appear, setAppear] = useState(false);
  const clickHandler = () => {
    setAppear((prev) => !prev);
  };
  return (
    <div id="content">
      <img src={Logo} alt="build icon" />
      <h2> Welcome {name} to WebSack👋 </h2>
      <h1> Your very own webpack for building your dream project</h1>
      <button className="btn" onClick={clickHandler}>{!appear ? "Show github link with lazy loading" : "hide"}</button>
      {appear && (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Github />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};
export default App;


