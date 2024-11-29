import React, { useState, useCallback } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as TabIcon } from "../../assets/TabIcon.svg";
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
import { ReactComponent as Contatti } from "../../assets/Acquisti/Contatti.svg";
import { ReactComponent as Qualificazione } from "../../assets/Acquisti/Qualificazione.svg";
import { ReactComponent as Documenti } from "../../assets/Acquisti/Documenti.svg";
import { ReactComponent as Agenda } from "../../assets/Acquisti/Agenda.svg";
import { ReactComponent as Dati } from "../../assets/Acquisti/Dati finanziari.svg";
import { ReactComponent as Sedi } from "../../assets/Acquisti/Dati finanziari.svg";
import { ReactComponent as Relazioni } from "../../assets/Acquisti/Dati finanziari.svg";
import { ReactComponent as Allegati } from "../../assets/Acquisti/Dati finanziari.svg";
import { useNavigate } from "react-router-dom";
import "./MenuLink.scss";
import { AddButton } from "../button/AddButton";

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
    minWidth: 100,
    padding: "10px 15px",
    flexDirection: "row",
    fontSize: "14px",
    lineHeight: "16px",
    "&.Mui-selected": {
      color: "#FF4081",
      fontWeight: "bold",
      backgroundColor: "#fff",
    },
    "&:not(.Mui-selected)": {
      color: "#999",
    },
  })
);

// Icon mapping object
const ICON_COMPONENTS = {
  TabIcon,
  EconomiaIcon,
  DashIcon,
  LinkIcon,
  TaskIcon,
  DocumentiIcon,
  ProfitiIcon,
  AquistiIcon,
  Personale,
  Imposte,
  AsseIcon,
  VenditeIcon,
  TimeSheet,
  Gantt,
  Contatti,
  Qualificazione,
  Documenti,
  Agenda,
  Dati,
  Sedi,
  Relazioni,
  Allegati,
};

const TAB_CONFIGURATIONS = {
  gantt: [
    { label: "Time Sheet", icon: TimeSheet },
    { label: "Gantt", icon: Gantt },
  ],
  default: [
    { label: "Profitti", icon: TabIcon },
    { label: "Vendite", icon: TabIcon },
    { label: "Aquisti", icon: TabIcon },
    { label: "Personale", icon: TabIcon },
    { label: "Imposte", icon: TabIcon },
    { label: "Assett", icon: TabIcon },
  ],
  statsDashboard: [
    { label: "Profitti", icon: ProfitiIcon },
    { label: "vendite", icon: VenditeIcon },
    { label: "acquisti", icon: AquistiIcon },
    { label: "personale", icon: Personale },
    { label: "imposte", icon: Imposte },
    { label: "asset", icon: AsseIcon },
    { label: "attivita", icon: AsseIcon },
  ],
  dashboardForm: [
    { label: "Task", icon: TaskIcon },
    { label: "Asset", icon: TabIcon },
    { label: "Link", icon: LinkIcon },
    { label: "Documenti", icon: DocumentiIcon },
    { label: "Economia", icon: EconomiaIcon },
    { label: "Dashboard", icon: DashIcon },
  ],
  dettaglioForm: [
    { label: "Contatti", icon: Contatti },
    { label: "Qualificazione", icon: Qualificazione },
    { label: "Documenti", icon: Documenti },
    { label: "Agenda", icon: Agenda },
    { label: "Dati", icon: Dati },
    { label: "Sedi", icon: Sedi },
    { label: "Relazioni", icon: Relazioni },
    { label: "Allegati", icon: Allegati },
  ],
  lead: [
    { label: "Contatti", icon: Contatti },
    { label: "Qualificazione", icon: Qualificazione },
    { label: "Documenti", icon: Documenti },
    { label: "Agenda", icon: Agenda },
  ],
  hr: [
    { label: "Contatti", icon: Documenti },
    { label: "Qualificazione", icon: Qualificazione },
    { label: "Documenti", icon: Documenti },
    { label: "Agenda", icon: Agenda },
    { label: "Contratto", icon: Documenti },
    { label: "Equipagiamento", icon: Documenti },
    { label: "Turni", icon: Documenti },
    { label: "Progetti", icon: Documenti },
    { label: "Allegati", icon: Documenti },
  ],
  hrEvento: [{ label: "Allegati", icon: Documenti }],
  hrCandidato: [
    { label: "Contatti", icon: Contatti },
    { label: "Qualificazione", icon: Qualificazione },
    { label: "Agenda", icon: Agenda },
    { label: "Allegati", icon: Documenti },
  ],
};

const getNavigationPath = (
  label,
  isLead,
  isFornitori,
  isVendite,
  isHr,
  isHrEvento,
  isHrCandidato
) => {
  if (isLead) return `/vendite/sub-lead/${label}`;
  if (isFornitori) return `/acquisti/fornitori/${label}`;
  if (isHr) return `/hr/colaboratory/sub-colaboratory/${label}`;
  // if (isHrEvento) return `/hr/colaboratory/sub-colaboratory/${label}`;
  if (isHrCandidato) return `/hr/candidati/candidato/${label}`;
  return `/dashboard/${label}`;
};

const MenuTab = ({
  onTabChange,
  customClassName = "customTab",
  dashboardForm = false,
  statsDashboard = false,
  dettaglioForm = false,
  lead = false,
  fornitori = false,
  vendite = false,
  gantt = false,
  hr,
  hrEvento,
  hrCandidato,
}) => {
  const [selectedTabs, setSelectedTabs] = useState(0);
  const navigate = useNavigate();

  // Determine which configuration to use based on props
  const getActiveConfig = useCallback(() => {
    if (gantt) return TAB_CONFIGURATIONS.gantt;
    if (dashboardForm) return TAB_CONFIGURATIONS.dashboardForm;
    if (statsDashboard) return TAB_CONFIGURATIONS.statsDashboard;
    if (dettaglioForm) return TAB_CONFIGURATIONS.dettaglioForm;
    if (lead) return TAB_CONFIGURATIONS.lead;
    if (hr) return TAB_CONFIGURATIONS.hr;
    if (hrEvento) return TAB_CONFIGURATIONS.hrEvento;
    if (hrCandidato) return TAB_CONFIGURATIONS.hrCandidato;
    return TAB_CONFIGURATIONS.default;
  }, [
    gantt,
    dashboardForm,
    statsDashboard,
    dettaglioForm,
    lead,
    hr,
    hrEvento,
    hrCandidato,
  ]);

  const handleTabClick = useCallback(
    (index, label) => {
      setSelectedTabs(index);

      // Reset filters when changing tabs
      if (window.searchTableReset?.current) {
        window.searchTableReset.current();
      }

      // Handle navigation
      const path = getNavigationPath(
        label,
        lead,
        fornitori,
        vendite,
        hr,
        hrEvento,
        hrCandidato
      );
      navigate(path);

      // Callback for parent component
      onTabChange?.(`tab${index + 1}`);
    },
    [lead, fornitori, navigate, onTabChange, vendite, hr, hrEvento, hrCandidato]
  );

  return (
    <Box className="tabBox tabsWithButton">
      <CustomTabs className={customClassName}>
        {getActiveConfig().map((tab, index) => {
          const IconComponent = tab.icon;
          return (
            <CustomTab
              key={`${tab.label}-${index}`}
              label={
                <span>
                  {tab.label === "Dati"
                    ? "Dati finanziari"
                    : tab.label === "Sedi"
                    ? "Sedi operative"
                    : tab.label === "vendite"
                    ? "Vendite"
                    : tab.label === "acquisti"
                    ? "Acquisti"
                    : tab.label === "personale"
                    ? "Personale"
                    : tab.label === "profitti"
                    ? "Profitti"
                    : tab.label === "imposte"
                    ? "Imposte"
                    : tab.label === "asset"
                    ? "Asset"
                    : tab.label === "attivita"
                    ? "Attivita"
                    : tab.label}
                </span>
              }
              icon={<IconComponent />}
              onClick={() => handleTabClick(index, tab.label)}
              className={selectedTabs === index ? "Mui-selected" : ""}
            />
          );
        })}
      </CustomTabs>
      <AddButton title="Aggiungi" />
    </Box>
  );
};

export default MenuTab;
