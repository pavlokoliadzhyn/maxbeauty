//import {AppFooter, AppHeader} from "../../containers";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};
