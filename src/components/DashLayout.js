import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="horizontal-line"></div>
      <div className="dash-container">
        <Outlet />
      </div>
      <div className="horizontal-line"></div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
