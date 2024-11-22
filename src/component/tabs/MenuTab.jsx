import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as TabIcon } from "../../assets/TabIcon.svg"; // Import your icon
import { ReactComponent as EconomiaIcon } from "../../assets/EconomiaIcon.svg";
import { ReactComponent as DashIcon } from "../../assets/DashIcon.svg";
import { ReactComponent as LinkIcon } from "../../assets/LinkIcon.svg";
import { ReactComponent as TaskIcon } from "../../assets/TaskIcon.svg";
import { ReactComponent as DocumentiIcon } from "../../assets/DocumentiIcon.svg";
import { ReactComponent as ProfitiIcon } from "../../assets/ProfitiIcon.svg";
import { ReactComponent as AquistiIcon } from "../../assets/AquistiIcon.svg";
import { ReactComponent as Personale } from "../../assets/Personale.svg";
import { ReactComponent as Imposte } from "../../assets/Imposte.svg";
import { ReactComponent as AsseIcon } from "../../assets/AsseIcon.svg";
import { ReactComponent as VenditeIcon } from "../../assets/VenditeIcon.svg";
import { ReactComponent as TimeSheet } from "../../assets/timesheet.svg";
import { ReactComponent as Gantt } from "../../assets/gantt.svg";

const CustomTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: 700,
    color: "#999",
    minWidth: 100,
    padding: "10px 15px",
    flexDirection: "row",
    fontSize: "14px",
    lineHeight: "16px",
    "&.Mui-selected": {
      color: "#FF4081", // Selected tab color
      fontWeight: "bold",
      backgroundColor: "#fff",
    },
    "&:not(.Mui-selected)": {
      color: "#999", // Inactive tab color
    },
  })
);

const MenuTab = ({
  onTabChange,
  customClassName = "customTab",
  dashboardForm = false,
  statsDashboard = false,
  gantt,
}) => {
  const [selectedTabs, setSelectedTabs] = useState(0);

  // Define an array of tab labels and icons
  const ganttTab = [
    { label: "Time Sheet", icon: <TimeSheet /> },
    { label: "Gantt", icon: <Gantt /> },
  ];
  const menuTab = [
    { label: "Profitti", icon: <TabIcon /> },
    { label: "Vendite", icon: <TabIcon /> },
    { label: "Aquisti", icon: <TabIcon /> },
    { label: "Personale", icon: <TabIcon /> },
    { label: "Imposte", icon: <TabIcon /> },
    { label: "Assett", icon: <TabIcon /> },
  ];

  const statsDashboardTab = [
    { label: "Profitti", icon: <ProfitiIcon /> },
    { label: "Vendite", icon: <VenditeIcon /> },
    { label: "Aquisti", icon: <AquistiIcon /> },
    { label: "Personale", icon: <Personale /> },
    { label: "Imposte", icon: <Imposte /> },
    { label: "Assett", icon: <TabIcon /> },
    { label: "Assett", icon: <AsseIcon /> },
  ];

  const menuTabDashboardForm = [
    { label: "Task", icon: <TaskIcon /> },
    { label: "Asset", icon: <TabIcon /> },
    { label: "Link", icon: <LinkIcon /> },
    { label: "Documenti", icon: <DocumentiIcon /> },
    { label: "Economia", icon: <EconomiaIcon /> },
    { label: "Dashboard", icon: <DashIcon /> },
  ];

  const handleTabClick = (index) => {
    setSelectedTabs(index);

    // Reset filters when changing tabs
    if (window.searchTableReset?.current) {
      window.searchTableReset.current();
    }

    onTabChange(`tab${index + 1}`);
  };

  return (
    <Box className="tabBox">
      <CustomTabs className={customClassName}>
        {(gantt
          ? ganttTab
          : dashboardForm
          ? menuTabDashboardForm
          : statsDashboard
          ? statsDashboardTab
          : menuTab
        ).map((tab, index) => (
          <CustomTab
            key={index}
            label={<span>{tab.label}</span>}
            icon={tab.icon}
            onClick={() => handleTabClick(index)}
            className={selectedTabs === index ? "Mui-selected" : ""}
          />
        ))}
      </CustomTabs>
    </Box>
  );
};

export default MenuTab;
