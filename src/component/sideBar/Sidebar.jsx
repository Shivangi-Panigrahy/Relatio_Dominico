import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as DashboardLogo } from "../../../src/assets/SideBarIcons/Dashboard.svg";
import { ReactComponent as VenditeLogo } from "../../../src/assets/SideBarIcons/Vendite.svg";
import { ReactComponent as AcquistoLogo } from "../../../src/assets/SideBarIcons/Acquisti.svg";
import { ReactComponent as AmministrazioneLogo } from "../../../src/assets/SideBarIcons/Amministrazione.svg";
import { ReactComponent as HRLogo } from "../../../src/assets/SideBarIcons/HR.svg";
import { ReactComponent as AttivitàLogo } from "../../../src/assets/SideBarIcons/Attività.svg";
import { ReactComponent as LogisticaLogo } from "../../../src/assets/SideBarIcons/Logistica.svg";
import { ReactComponent as ProduzioneLogo } from "../../../src/assets/SideBarIcons/Produzione.svg";
import { ReactComponent as CataloghiLogo } from "../../../src/assets/SideBarIcons/Cataloghi.svg";
import { ReactComponent as AnagraficheLogo } from "../../../src/assets/SideBarIcons/Anagrafiche.svg";
import { ReactComponent as FormazioneLogo } from "../../../src/assets/SideBarIcons/Formazione.svg";
import { ReactComponent as SaluteLogo } from "../../../src/assets/SideBarIcons/Salute.svg";
import { ReactComponent as FileLogo } from "../../../src/assets/SideBarIcons/File.svg";
import "../../stylesheet/Global.css";
import deskLogo from "../../../src/assets/deskLogo.svg";
import mobileLogo from "../../../src/assets/mobileLogo.svg";
import { ExpandLess, ExpandMore, ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const drawerWidth = 284;
const collapsedDrawerWidth = 40;
const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? drawerWidth : collapsedDrawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  "& .MuiDrawer-paper": {
    width: open ? drawerWidth : collapsedDrawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    backgroundColor: "#1E1E2D",
    color: "#A3A3A3",
  },
}));
const StyledListItem = styled(ListItem)(
  ({ theme, active, open, textColor }) => ({
    padding: theme.spacing(open ? 1 : 2, 2),
    color: active ? textColor : "#FFFFFF",
    justifyContent: open ? "initial" : "center",
    "&:hover": {
      // backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: textColor,
      cursor: "pointer",
      "& .MuiListItemIcon-root": {
        color: textColor,
      },
    },
    "& .MuiListItemIcon-root": {
      color: active ? textColor : "#A3A3A3",
    },
  })
);
const StyledListItemIcon = styled(ListItemIcon)(({ active, color }) => ({
  minWidth: 36,
  color: active ? "#FF1CF7" : "#A3A3A3",
  justifyContent: "center",
  "& .MuiSvgIcon-root": {
    background: color,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));
const menuItems = [
  {
    name: "Dashboard",
    icon: DashboardLogo,
    textColor: "#F72585",
    subitems: [
      { name: "Profitti", route: "/dashboard/profitti" },
      { name: "Vendite", route: "/dashboard/vendite" },
      { name: "Acquisti", route: "/dashboard/acquisti" },
      { name: "Imposte", route: "/dashboard/imposte" },
      { name: "Asset", route: "/dashboard/asset" },
      { name: "Attività", route: "/dashboard/attivita" },
      { name: "Personale", route: "/dashboard/personale" },
    ],
  },
  {
    name: "Vendite",
    icon: VenditeLogo,
    textColor: "#B5179E",
    subitems: [
      { name: "Calendario", route: "/vendite/calendario" },
      { name: "Lead", route: "/vendite/lead" },
      { name: "Preventivi", route: "/vendite/preventivi" },
      { name: "Ordini", route: "/vendite/ordini" },
      { name: "Budget", route: "/vendite/budget" },
    ],
  },
  {
    name: "Acquisto",
    icon: AcquistoLogo,
    textColor: "#7209B7",
    subitems: [
      { name: "Calendario", route: "/acquisti/calendario" },
      { name: "Fornitori", route: "/acquisti/fornitori" },
      { name: "Preventivi", route: "/acquisti/preventivi" },
      { name: "Ordini", route: "/acquisti/ordini" },
      { name: "Budget", route: "/acquisti/budget" },
    ],
  },
  {
    name: "Amministrazione",
    icon: AmministrazioneLogo,
    textColor: "#560BAD",
    subitems: [
      { name: "Documenti", route: "/amministrazione/documenti" },
      { name: "Imposte", route: "/amministrazione/imposte" },
      { name: "Asset", route: "/amministrazione/asset" },
      { name: "Bilancio", route: "/amministrazione/bilancio" },
      { name: "Scadenzario", route: "/amministrazione/scadenzario" },
      { name: "Flussi di cassa", route: "/amministrazione/flussi-di-cassa" },
      { name: "Registri IVA", route: "/amministrazione/registri-iva" },
      { name: "Prima nota", route: "/amministrazione/prima-nota" },
    ],
  },
  {
    name: "HR",
    icon: HRLogo,
    textColor: "#3A0CA3",
    route: "/hr",
    subitems: [
      { name: "Calendario", route: "/hr/calendario" },
      { name: "Colaboratory", route: "/hr/colaboratory" },
      { name: "Ferie e permisse", route: "/hr/ferie-e-permisse" },
      { name: "Busta page", route: "/hr/buste-page" },
      { name: "Candidati", route: "/hr/candidati" },
    ],
  },
  {
    name: "Attività",
    icon: AttivitàLogo,
    textColor: "#3F37C9",
    route: "/attivita",
    subitems: [
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
    ],
  },
  {
    name: "Logistica",
    icon: LogisticaLogo,
    textColor: "#4361EE",
    route: "/logistica",
    subitems: [
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
    ],
  },
  {
    name: "Produzione",
    icon: ProduzioneLogo,
    textColor: "#4895EF",
    route: "/produzione",
    subitems: [
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
    ],
  },
  {
    name: "Cataloghi",
    icon: CataloghiLogo,
    textColor: "#4AAFF0",
    route: "/cataloghi",
    subitems: [
      { name: "Servizi", route: "/cataloghi/servizi" },
      { name: "Prodotti", route: "/cataloghi/prodotti" },
      { name: "Configuratore", route: "/cataloghi/configuratore/Configurazione" },
      { name: "Listini", route: "/cataloghi/listini" },
    ],
  },
  {
    name: "Anagrafiche",
    icon: AnagraficheLogo,
    textColor: "#4CC9F0",
    route: "/anagrafiche",
    subitems: [
      { name: "Lead", route: "/angrafiche/lead" },
      { name: "Clienti", route: "/angrafiche/clienti" },
      { name: "Fornitori", route: "/angrafiche/fornitori" },
      { name: "Collaboratori", route: "/angrafiche/colaboratory" },
      { name: "Candidati", route: "/angrafiche/candidati" },
    ],
  },
  {
    name: "Formazione",
    icon: FormazioneLogo,
    textColor: "#4AAFF0",
    route: "/formazione",
    subitems: [
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
    ],
  },
  {
    name: "Salute",
    icon: SaluteLogo,
    textColor: "#4895EF",
    route: "/salute",
    subitems: [
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
      "Sotto sezione",
    ],
  },
  {
    name: "File",
    icon: FileLogo,
    textColor: "#4361EE",
    route: "/file",
    subitems: [
      { name: "Repository", route: "/file/repository" },
      { name: "Archivio", route: "/file/archivio" },
    ],
  },
];
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState("");
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();
  const handleSubmenuClick = (name) => {
    setOpenSubmenu(openSubmenu === name ? "" : name);
  };
  // Initialize navigate
  const handleSubmenuItemClick = (route) => {
    navigate(route); // Navigate to the submenu route
  };
  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="sidebarMenu"
    >
      <Box
        className="logo"
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-start" : "center",
        }}
      >
        {open ? (
          <img src={deskLogo} height="33" width="auto" alt="#" />
        ) : (
          <img src={mobileLogo} height="33" width="auto" alt="#" />
        )}
      </Box>
      <List >
        {menuItems.map((item) => (
          <React.Fragment key={item.name}>
            <StyledListItem
              button
              onClick={() => {
                setActiveItem(item.name);
                if (item.subitems) handleSubmenuClick(item.name);
                else navigate(item.route); // Navigate to the main item route
              }}
              active={activeItem === item.name}
              open={open}
              textColor={item.textColor}
            >
              <div className="mainMenu">
                <StyledListItemIcon active={activeItem === item.name}>
                  <item.icon />
                </StyledListItemIcon>
                {open && <ListItemText primary={item.name} />}
                {open &&
                  item.subitems &&
                  (openSubmenu === item.name ? <ExpandLess /> : <ExpandMore />)}
              </div>
              {item.subitems && open && (
                <Collapse
                  in={openSubmenu === item.name}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding style={{ paddingBottom: '50px' }}>
                    {item.subitems.map((subitem) => (
                      <StyledListItem
                        key={subitem.name}
                        button
                        sx={{ pl: 4 }}
                        open={open}
                        onClick={() => handleSubmenuItemClick(subitem.route)} // Navigate on submenu click

                      >
                        <ListItemText primary={subitem.name} />
                      </StyledListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </StyledListItem>
          </React.Fragment>
        ))}
      </List>
    </StyledDrawer>
  );
};
export default Sidebar;
