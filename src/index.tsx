import React, { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

setGlobal({
  page: "top"
});

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
