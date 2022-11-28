import _ from "lodash";
import(/* webpackPreload: true */ "./app.css");
import React, { useState, Suspense, ErrorBoundary } from "react";
import Github from "./github";
import Logo from "./logo.svg";
// const Github = React.lazy(() => import("./github"));

const App = ({ name }) => {
    console.log("git", Github)
  const [appear, setAppear] = useState(false);
  const clickHandler = () => {
    setAppear((prev) => !prev);
    // import(/*webpackPreload : true */ './githubgithub')
    console.log("printing");
  };
  return (
    <div id="content">
      <img src={Logo} alt="build icon" />
      <h2> Welcome {name} to WebSack👋 </h2>
      <h1> Your very own webpack for building your dream project</h1>
      {/* <a href="https://github.com/Shah-Arsalan/websack">Github 🔗</a> */}
      <button onClick={clickHandler}>Show</button>
      {appear &&
            <Github />
      }
    </div>
  );
};
export default App;

// const MyComponent = () => (
//     <div>

//     </div>
// );
