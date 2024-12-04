import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const { worker } = require("../../shared/mocks/browser");
worker.start({
  onUnhandledRequest: "bypass",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import ReactDOM from "react-dom";
// const Red = () =>
//   ReactDOM.createPortal(
//     <div className="red">Red</div>,
//     document.getElementById("dialog")
//   );

// const Green = () => (
//   <div className="green">
//     <div>Green</div>
//     <Red />
//   </div>
// );

// root.render(<Green />);
