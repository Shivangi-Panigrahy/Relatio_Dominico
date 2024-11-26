import React from "react";
import { useLocation } from "react-router-dom";
import Allroutes from "./routes/AppRouter";
import Sidebar from "./component/sideBar/Sidebar";

const App = () => {
  const location = useLocation();

  return (
    <div>
    {!["/", "/password-success","/verification",'/mail-verification', "/password-reset", "/forgot-password"].includes(location.pathname) && <Sidebar />}

      <div className={!["/", "/password-success","/verification",'/mail-verification', "/password-reset", "/forgot-password"].includes(location.pathname) ? "DashboardContainer" : ""}>
        <div className="DashboardInner">
          <Allroutes />
        </div>
      </div>
    </div>
  );
};

export default App;
