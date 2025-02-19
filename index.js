import jsPage from "./assets/js.png";
import "./index.css";
console.log("Hello World!");

const body = document.querySelector("body");

const textBlock = document.createElement("h1");
textBlock.textContent = "I love JavaScript";
body.append(textBlock);

const jsPageContainer = document.createElement("img");
jsPageContainer.src = jsPage;
body.append(jsPageContainer);
