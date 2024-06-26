import { createBrowserRouter, Link } from "react-router-dom";
import ToggleButton from "../pages/ToggleButton";
import TableWithI18n from "../pages/TableWithI18n";
import SampleBox from "../pages/SampleBox";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "test",
    element: <ToggleButton />,
  },
  {
    path: "table-with-i18n",
    element: <TableWithI18n />,
  },
  {
    path: "sample-box",
    element: <SampleBox />,
  },
]);

export default router;
