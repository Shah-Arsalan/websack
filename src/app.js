import _ from "lodash";
import(/* webpackPreload: true */ './app.css')
import Logo from "./logo.svg";

const App = ({ name}) => {

   let flag = false;
	return `
    <div id="content">
    <img src="${Logo}" alt="build icon" />
    <h2> Welcome ${name} to WebSack👋 </h2>
<h1> Your very own webpack for building your dream project</h1>
<a href="https://github.com/Shah-Arsalan/websack">Github 🔗</a>
    <div>
    `;
};
export default App;