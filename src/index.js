import React from "react";
import ReactDOM from "react-dom";
import "react-image-crop/dist/ReactCrop.css";
import "react-image-crop/lib/ReactCrop.scss";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
