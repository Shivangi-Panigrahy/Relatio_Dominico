import React from "react"; // Import React library
import { Tabs, Tab, Divider } from "@mui/material"; // Import MUI components for tabs and divider
import { makeStyles } from "@mui/styles"; // Import makeStyles for custom styling
import "./MenuLink.scss"; // Import custom styles for MenuLink component

// Define custom styles using makeStyles
const useStyles = makeStyles({
  root: {
    backgroundColor: "#f9f9f9", // Background color for the tab container
    borderRadius: "10px", // Rounded corners for the tab container
  },
  tab: {
    fontSize: "14px", // Font size for the tab labels
    color: "#ff4081", // Color of the default tab text
    textTransform: "none", // Prevents text from being transformed to uppercase
    fontWeight: "bold", // Makes the tab text bold
  },
  tabIndicator: {
    backgroundColor: "transparent", // Removes the default underline indicator for tabs
  },
});

// MenuLink component definition
const MenuLink = ({ subData, setSubActiveTab, value, setValue }) => {
  // Array of tabs with properties for label, value, and colors
  const tabs = [
    {
      label: "Testo",
      value: subData[0],
      color: "#FFFFFF",
      bg: "#000",
    },
    {
      label: "Testo",
      value: subData[1],
      color: "#57C700",
      bg: "#57C70033",
    },
    {
      label: "Testo",
      value: subData[2],
      color: "#FFA903",
      bg: "#FFA90333",
    },
    {
      label: "Testo",
      value: subData[3],
      color: "#DB0000",
      bg: "#DB000033",
    },
  ];

  // Function to transform the tabs array into a format usable by the Tab component
  const getTabList = (tabs) => {
    return tabs.map((tab) => ({
      label: (
        <div className="CurrentTab">
          {" "}
          {/* Container for the tab label and value */}
          <span>{tab.label}</span>
          <span
            className="tabValue" // Class for styling the tab value
            style={{ color: tab.color, background: tab?.bg }} // Inline styles for color and background
          >
            {tab.value}
          </span>
        </div>
      ),
      value: tab.value, // Use value for filtering and identifying the tab
    }));
  };

  const classes = useStyles(); // Apply custom styles

  // Function to handle tab changes
  const handleChange = (event, newValue) => {
    if (newValue !== value) {
      // Check if the new value is different from the current value
      setValue(newValue); // Update the current value
      // Update the active sub-tab based on the new value
      switch (newValue) {
        case 0:
          setSubActiveTab("tab1");
          break;
        case 1:
          setSubActiveTab("tab2");
          break;
        case 2:
          setSubActiveTab("tab3");
          break;
        case 3:
          setSubActiveTab("tab4");
          break;
        default:
          setSubActiveTab(""); // Reset active sub-tab if no match
      }
    }
  };

  return (
    <Tabs value={value} onChange={handleChange} className="CustomTabbing">
      {" "}
      {/* Render the tabs with value and change handler */}
      {tabs.length > 0 && // Check if there are tabs to render
        getTabList(tabs).map(
          (
            tab,
            index // Map through the tab list
          ) => (
            <Tab
              key={index} // Unique key for each tab
              label={tab.label} // Set the label for the tab
              style={{ color: tab.color }} // Set custom color for each tab
            />
          )
        )}
      <Divider // Render a divider to separate content
        orientation="horizontal"
        flexItem
        style={{ position: "absolute", right: "10px", height: "100%" }} // Inline styles for positioning
      />
    </Tabs>
  );
};

export default MenuLink; // Export the MenuLink component
