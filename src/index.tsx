import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./index.css";

const rootElement =
  document.getElementById("root") ?? document.createElement("div");

ReactDOM.createRoot(rootElement).render(<App />);
