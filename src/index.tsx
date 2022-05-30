import "./index.css";

import { loadDevTools } from "jira-dev-tool";
import "antd/dist/antd.less";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AppProviders } from "./context";
import reportWebVitals from "./reportWebVitals";

loadDevTools(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <AppProviders>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProviders>
  );
});
reportWebVitals();
