import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child_1" }, "1st child"),
  React.createElement("h2", { id: "child_1" }, "2nd child"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
