import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorTextBase: "#151515",
        colorBgBase: "#fefefe",
        colorPrimary: "#cc76a1",
        colorInfo: "#cc76a1",
        colorSuccess: "#007c77",
      },
    }}
  >
    <App />
  </ConfigProvider>,
);
