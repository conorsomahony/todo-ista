import React from "react";
import ReactDOM from "react-dom";
import "grommet/grommet.min.css";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import TodoistaApp from "./components/TodoistaApp";

ReactDOM.render(<TodoistaApp />, document.getElementById("root"));
registerServiceWorker();
