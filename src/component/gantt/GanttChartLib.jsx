import React, { useEffect, useRef } from "react";
import Gantt from "frappe-gantt";

const GanttChartLib = ({ tasks, selected }) => {
  const ganttRef = useRef(null);

  // Map selected values to Gantt view modes
  const getViewMode = (selected) => {
    switch (selected) {
      case "Mese":
        return "Month"; // Map Mese to Month view
      case "Settimana":
        return "Day"; // Map Settimana to Day view
      case "Giorno":
        return "Year"; // Map Giorno to Year view
      default:
        return "Day"; // Default view
    }
  };

  useEffect(() => {
    if (ganttRef.current && tasks.length > 0) {
      // Initialize Gantt chart
      const gantt = new Gantt(ganttRef.current, tasks, {
        header_height: 50,
        column_width: 30,
        view_modes: ["Day", "Month", "Year"], // Include all modes
        bar_height: 20,
        bar_corner_radius: 3,
        arrow_curve: 5,
        padding: 18,
        date_format: "YYYY-MM-DD", // Adjust as needed
        language: "en", // Set language to Italian
        custom_popup_html: null, // Disable popup if unnecessary
      });

      // Change the view mode based on `selected`
      gantt.change_view_mode(getViewMode(selected));
    }
  }, [tasks, selected]); // Listen for changes in tasks and selected

  return <div ref={ganttRef} />;
};

export default GanttChartLib;
