import App from "@/App";
import Template from "@/components/templates/Template";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/template",
    element: <Template />,
  },
]);
