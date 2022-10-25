import App from "./app";

const root = document.getElementById("root");
root.innerHTML = `
${App({ name: "Web Dev" })}
`;