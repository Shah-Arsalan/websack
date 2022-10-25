import App from "./App";
import Logo from "./logo.svg";

const root = document.getElementById("root");
root.innerHTML = `
${App({ name: "Web Dev" })}
`;