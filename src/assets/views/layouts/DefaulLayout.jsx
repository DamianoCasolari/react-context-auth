import { Outlet } from "react-router-dom";
import { AppHeader } from "../../components/appHeader";
import { AppFooter } from "../../components/appFooter";

export function DefaulLayout() {
  return (
    <div>
      <AppHeader></AppHeader>
      <Outlet></Outlet>
      <AppFooter></AppFooter>
    </div>
  );
}
