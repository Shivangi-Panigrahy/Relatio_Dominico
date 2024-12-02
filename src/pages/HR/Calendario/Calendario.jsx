import React from "react";
import Header from "../../../component/header/Header";
import ReactBigCalendar from "../../../component/HrCalendar/HrCalendar";
import MenuTab from "../../../component/tabs/MenuTab";
import { ReactComponent as Mese } from "../../../assets/Mese.svg";

const Calendario = () => {
  const [selectedTab, setSelectedTab] = React.useState("Calendario");

  const handleTabChange = (newTab) => {
    const tabMap = {
      tab1: "Calendario",
      tab2: "Organizza",
    };
    setSelectedTab(tabMap[newTab] || "Calendario");
  };

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="calender">
          {/* Use the MenuTab component */}
          <MenuTab
            onTabChange={handleTabChange}
            hrcalendario={true}
            customClassName="calenderTabs"
          />
          <div className="calenderCard">
            {/* Calendar Component */}
            <ReactBigCalendar hr={true} hrView={selectedTab === "Organizza"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendario;


// import React from "react";
// import Header from "../../../component/header/Header";
// import ReactBigCalendar from '../../../component/HrCalendar/HrCalendar'
// import { ReactComponent as Mese } from "../../../assets/Mese.svg";
// import { Tab, Tabs } from "@mui/material";

// const Calendario = () => {
//   const [value, setValue] = React.useState("Calendario");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Header />
//       <div className="pageTemplate">
//         <div className="calender">
//           <Tabs value={value} onChange={handleChange} textColor="primary">
//             <Tab value="Calendario" label="Calendario" icon={<Mese />} />
//             <Tab value="Organizza" label="Organizza" icon={<Mese />} />
//           </Tabs>
//           <div className="calenderCard">
//             {/* Calendar Component */}
//             <ReactBigCalendar hr={true} hrView={value === "Organizza"} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Calendario;
