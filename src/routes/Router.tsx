import { Container, Grid } from "@mui/material";
import { createBrowserRouter, Link } from "react-router-dom";
import MyComponentWithLoading from "../components/hoc1/MyComponentWithLoading";
import MainWithSideBarComponent from "../components/hoc2/MainWithSideBarComponent";
import SampleBox from "../pages/SampleBox";
import TableWithI18n from "../pages/TableWithI18n";
import ToggleButton from "../pages/ToggleButton";
import CreateContactDrawer from "../components/CreateContactDrawer";

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
  {
    path: "with-loading-hoc",
    element: (
      <div>
        <h1>Higher-Order Component Example</h1>
        <MyComponentWithLoading isLoading={true} message="Hello, World!" />
        <MyComponentWithLoading isLoading={false} message="Hello, World!" />
      </div>
    ),
  },
  {
    path: "with-sidebar-hoc",
    element: (
      <div>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <MainWithSideBarComponent />
            </Grid>
          </Grid>
        </Container>
      </div>
    ),
  },
  {
    path: "create-contact-drawer",
    element: <CreateContactDrawer />,
  },
]);

export default router;
