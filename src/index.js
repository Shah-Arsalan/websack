import App from "./app";
import React from "react";
import ReactDOM from "react-dom";


const root = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <App name="Web Dev" />
    </React.StrictMode>,
    root
);
// root.innerHTML = `
// ${App({ name: "Web Dev" })}
// `;