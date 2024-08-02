import MainComponent from "./MainComponent";
import SideComponent from "./SideComponent";
import withSideComponent from "./withSideComponent";

const MainWithSideBarComponent = withSideComponent({
  MainComponent,
  SideComponent,
});

export default MainWithSideBarComponent;
