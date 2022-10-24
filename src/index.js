import App from "./App";

const root = document.getElementById("root");
root.innerHTML = `
<h1> Your very own webpack for starting your project</h1>
${App({ name: "Tanay" })}
`;