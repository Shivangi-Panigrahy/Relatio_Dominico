import React, { useState, useCallback, useEffect } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import "./MenuLink.scss";

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
  // default: [
  //   { label: "Profitti", icon: TabIcon },
  //   { label: "Vendite", icon: TabIcon },
  //   { label: "Aquisti", icon: TabIcon },
  //   { label: "Personale", icon: TabIcon },
  //   { label: "Imposte", icon: TabIcon },
  //   { label: "Assett", icon: TabIcon },
  // ],
  statsDashboard: [
    { label: "profitti", icon: ProfitiIcon },
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
  listini: [
    { label: "Gruppi", icon: Contatti },
    // { label: "Prodotti", icon: Qualificazione },
  ],
  CatalogConfig: [
    { label: "Configurazione", icon: Contatti },
    { label: "Prodotti", icon: Qualificazione },
  ],
  subImposte: [
    { label: "Reteizzazione", icon: Contatti },
    { label: "Allegati", icon: Qualificazione },
  ],
  subAsset: [
    { label: "Rate", icon: Contatti },
    { label: "Allegati", icon: Qualificazione },
  ]

};


const getNavigationPath = (label, isLead, isFornitori, isaminiImposte, isImposte, isAsset) => {

  // console.log(label, isLead, isFornitori, isaminiImposte, 'isaminiImposte');

  if (isLead) return `/vendite/sub-lead/${label}`;

  if (isFornitori) return `/acquisti/fornitori/${label}`;

  if (isImposte) return `/amministrazione/imposte/${label}`;

  if (isImposte) return `/amministrazione/imposte/${label}`;

  if (isAsset) return `/amministrazione/asset/${label}`;

  if (isAsset) return `/amministrazione/asset/${label}`;

  if (label==="Gruppi") return `/cataloghi/listini/${label}`;

  if (label==="Prodotti") return `/cataloghi/listini/${label}`;
  if (label==="Configurazione") return `/cataloghi/configuratore/${label}`;

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
  subImposte = false,
  subAsset = false,
  listini=false,
  CatalogConfig=false
}) => {
  const [selectedTabs, setSelectedTabs] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine which configuration to use based on props
  const getActiveConfig = useCallback(() => {
    if (gantt) return TAB_CONFIGURATIONS.gantt;
    if (dashboardForm) return TAB_CONFIGURATIONS.dashboardForm;
    if (statsDashboard) return TAB_CONFIGURATIONS.statsDashboard;
    if (dettaglioForm) return TAB_CONFIGURATIONS.dettaglioForm;
    if (lead) return TAB_CONFIGURATIONS.lead;
    if (listini) return TAB_CONFIGURATIONS.listini;
    if (subImposte) return TAB_CONFIGURATIONS.subImposte;
    if (subAsset) return TAB_CONFIGURATIONS.subAsset;
    if (CatalogConfig) return TAB_CONFIGURATIONS.CatalogConfig;
    return TAB_CONFIGURATIONS.default;
  }, [gantt, dashboardForm, statsDashboard, dettaglioForm, lead, subImposte, subAsset,listini]);

  const tabsConfig = getActiveConfig();

  // Sync selectedTabs with the current route
  useEffect(() => {
    const activeIndex = tabsConfig?.findIndex((tab) =>
      location.pathname.includes(tab.label.toLowerCase())
    );
    if (activeIndex !== -1) {
      setSelectedTabs(activeIndex);
    }
  }, [location, tabsConfig]);

  const handleTabClick = useCallback(
    (index, label) => {
      setSelectedTabs(index); // Update the selected tab immediately

      // Handle navigation
      const path = getNavigationPath(label, lead, fornitori, vendite, subImposte, subAsset);
      navigate(path);

      // Invoke parent callback
      if (onTabChange) {
        onTabChange(`tab${index + 1}`);
      }
    },
    [lead, fornitori, navigate, onTabChange]
  );

  return (
    <Box className="tabBox">
      <CustomTabs
        className={customClassName}
        value={selectedTabs} // Ensure controlled state for Tabs
        onChange={(event, newValue) => setSelectedTabs(newValue)}
      >
        {getActiveConfig()?.map((tab, index) => {
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
                       : tab.label === "profitti"
                          ? "Profitti"
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
                                    : tab.label === "Reteizzazione" ?
                                      "Reteizzazione" :
                                      tab.label === "Allegati" ?
                                        "Allegati"
                                        :
                                        tab.label === "Gruppi" ?
                                        "Gruppi":
                                        tab.label ==="Prodotti" ?"Prodotti":
                                        tab.label === "Configurazione" ?
                                        "Configurazione" :
                                        tab.label ===  "" ?"":

                                        tab.label}
                </span>
              }
              icon={<IconComponent />}
              onClick={() => handleTabClick(index, tab.label)}
              className={selectedTabs === index ? "Mui-selected" : ""}
            />
          );
        })}
      </CustomTabs>
    </Box>
  );
};

export default MenuTab;