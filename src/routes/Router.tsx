import { createBrowserRouter, Link } from "react-router-dom";
import ToggleButton from "../pages/ToggleButton";
import TableWithI18n from "../pages/TableWithI18n";

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
]);

export default router;
