import { Toolbar, Typography, IconButton, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AddButton } from "../button/AddButton";
import { useLocation, useNavigate } from "react-router-dom";
import AddDocument from "../Modal/AddDocument";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const HeaderBelow = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpenDialog = (value) => {
    setOpen(value);
  };
  const location = useLocation();
  return (
    <div>
      <Toolbar
        className="titleBlock"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box className="pageTitle" display="flex" alignItems="center">
          <IconButton
            edge="start"
            color="inherit"
            onClick={() =>
              window.location.href.includes("/vendite")
                ? navigate("/vendite/preventivi")
                : navigate("/dashboard/profitti")
            }
          >
            <ArrowBackIcon />
          </IconButton>
          {window.location.href.includes("/invoice") ? (
            <>
              <Typography variant="h2">Categoria</Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard/profitti")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">
                {" "}
                {window.location.href.includes("/preventivo")
                  ? "Preventivo"
                  : "Fattura"}{" "}
              </Typography>
            </>
          ) : window.location.href.includes("/gantt") ? (
            <>
              <Typography variant="h2">Attività </Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard/profitti")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Timesheet</Typography>
            </>
          ) : window.location.href.includes("/gantt/library") ? (
            <>
              <Typography variant="h2">Attività </Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard/profitti")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Timesheet</Typography>
            </>
          ) : window.location.href.includes("/vendite/calendario") ? (
            <>
              <Typography variant="h2">Vendite </Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Calendario</Typography>
              <IconButton edge="start" color="inherit"></IconButton>
            </>
          ) : window.location.href.includes(
            "/vendite/preventivi/sub-preventivi"
          ) ? (
            <>
              <Typography variant="h2">Vendite</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Preventivi</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del preventivo</Typography>
            </>
          ) : window.location.href.includes("/vendite/preventivi") ? (
            <>
              <Typography variant="h2">Vendite </Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Preventivi</Typography>
            </>
          ) : window.location.href.includes("/vendite/ordini/sub-ordini") ? (
            <>
              <Typography variant="h2">Vendite</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Ordini</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Numero dell'Ordine</Typography>
            </>
          ) : window.location.href.includes("/vendite/ordini") ? (
            <>
              <Typography variant="h2">Vendite</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Ordini</Typography>
            </>
          ) : window.location.href.includes("/vendite/budget/sub-budget") ? (
            <>
              <Typography variant="h2">Vendite</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Preventivi</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del budget</Typography>
            </>
          ) : window.location.href.includes("/vendite/budget") ? (
            <>
              <Typography variant="h2">Vendite</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Budget</Typography>
            </>
          ) : window.location.href.includes("/lead") ? (
            <>
              <Typography variant="h2">Vendite</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Lead</Typography>
            </>
          ) : window.location.href.includes("/sub-lead") ? (
            <>
              <Typography variant="h2">Vendite</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Lead</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del lead</Typography>
            </>
          ) : window.location.href.includes("/acquisti/fornitori/Allegati") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Fornitiori</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del Fornitore</Typography>
            </>
          ) : window.location.href.includes("/acquisti/fornitori/Relazioni") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Fornitiori</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del Fornitore</Typography>
            </>
          ) : window.location.href.includes("/acquisti/fornitori/Sedi") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Fornitiori</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del Fornitore</Typography>
            </>
          ) : window.location.href.includes("/acquisti/fornitori/Dati") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Fornitiori</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del Fornitore</Typography>
            </>
          ) : window.location.href.includes("/acquisti/fornitori/Agenda") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Fornitiori</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del Fornitore</Typography>
            </>
          ) : window.location.href.includes("/acquisti/fornitori/Documenti") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Fornitiori</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del Fornitore</Typography>
            </>
          ) : window.location.href.includes(
            "/acquisti/fornitori/Qualificazione"
          ) ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Fornitiori</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del Fornitore</Typography>
            </>
          ) : window.location.href.includes("/acquisti/fornitori/Contatti") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Fornitiori</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del Fornitore</Typography>
            </>
          ) : window.location.href.includes("/fornitori") ? (
            <>
              <Typography variant="h2">Acquisti </Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Fornitiori</Typography>
              <IconButton edge="start" color="inherit"></IconButton>
            </>
          ) : window.location.href.includes("/acquisti/calendario") ? (
            <>
              <Typography variant="h2">Acquisti </Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Calendario</Typography>
              <IconButton edge="start" color="inherit"></IconButton>
            </>
          ) : window.location.href.includes(
            "/acquisti/preventivi/sub-preventivi"
          ) ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Preventivi</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del preventivo</Typography>
            </>
          ) : window.location.href.includes("/acquisti/preventivi") ? (
            <>
              <Typography variant="h2">Acquisti </Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Preventivi</Typography>
              <IconButton edge="start" color="inherit"></IconButton>
            </>
          ) : window.location.href.includes("/acquisti/ordini/sub-ordini") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Ordini</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Numero dell'Ordine</Typography>
            </>
          ) : window.location.href.includes("/acquisti/ordini") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Ordini</Typography>
              <IconButton edge="start" color="inherit"></IconButton>
            </>
          ) : window.location.href.includes("/acquisti/ordini/sub-ordini") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Ordini</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Numero dell'Ordine</Typography>
            </>
          ) : window.location.href.includes("/acquisti/ordini") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Ordini</Typography>
              <IconButton edge="start" color="inherit"></IconButton>
            </>
          ) : window.location.href.includes("/acquisti/budget/sub-budget") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Budget</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Nome del budget</Typography>
            </>
          ) : window.location.href.includes("/acquisti/budget") ? (
            <>
              <Typography variant="h2">Acquisti</Typography>
              <IconButton edge="start" color="inherit">
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Budget</Typography>
              <IconButton edge="start" color="inherit"></IconButton>
            </>
          ) :
            // amministrazione part start
            window.location.href.includes("/amministrazione/imposte") ?
              <>
                <Typography variant="h2">Amministrazione</Typography>
                <IconButton edge="start" color="inherit">
                  <ArrowForwardIcon />
                </IconButton>
                <Typography variant="h2">Imposte</Typography>
              </>
              :
              window.location.href.includes("/amministrazione/documenti") ?
                <>
                  <Typography variant="h2">Amministrazione</Typography>
                  <IconButton edge="start" color="inherit">
                    <ArrowForwardIcon />
                  </IconButton>
                  <Typography variant="h2">Documenti</Typography>
                </>
                :
                window.location.href.includes("/amministrazione/bilancio") ?
                  <>
                    <Typography variant="h2">Amministrazione</Typography>
                    <IconButton edge="start" color="inherit">
                      <ArrowForwardIcon />
                    </IconButton>
                    <Typography variant="h2">Bilancio</Typography>
                  </>
                  :
                  window.location.href.includes("/amministrazione/scadenzario") ?
                    <>
                      <Typography variant="h2">Amministrazione</Typography>
                      <IconButton edge="start" color="inherit">
                        <ArrowForwardIcon />
                      </IconButton>
                      <Typography variant="h2">Scadenzario</Typography>
                    </>
                    :
                    window.location.href.includes("/amministrazione/asset") ?
                      <>
                        <Typography variant="h2">Amministrazione</Typography>
                        <IconButton edge="start" color="inherit">
                          <ArrowForwardIcon />
                        </IconButton>
                        <Typography variant="h2">Asset</Typography>
                      </>
                      :
                      window.location.href.includes("/amministrazione/flussi-di-cassa") ?
                        <>
                          <Typography variant="h2">Amministrazione</Typography>
                          <IconButton edge="start" color="inherit">
                            <ArrowForwardIcon />
                          </IconButton>
                          <Typography variant="h2">Flusso di cassa</Typography>
                        </> :
                        window.location.href.includes("/amministrazione/registri-iva") ?
                          <>
                            <Typography variant="h2">Amministrazione</Typography>
                            <IconButton edge="start" color="inherit">
                              <ArrowForwardIcon />
                            </IconButton>
                            <Typography variant="h2">Registri IVA</Typography>
                          </> :
                          window.location.href.includes("/amministrazione/prima-nota") ?
                            <>
                              <Typography variant="h2">Amministrazione</Typography>
                              <IconButton edge="start" color="inherit">
                                <ArrowForwardIcon />
                              </IconButton>
                              <Typography variant="h2">Prima nota</Typography>
                            </> :
                            // amministrazione part start
                            (
                              <Typography variant="h2">Titolo della Pagina</Typography>
                            )}
        </Box>
        {!location.pathname.includes("/vendite/preventivi/sub-preventivi") &&
          !location.pathname.includes("/vendite/ordini/sub-ordini") &&
          !location.pathname.includes("/acquisti/budget/sub-budget") &&
          !location.pathname.includes("/vendite/budget/sub-budget") &&
          !location.pathname.includes("/acquisti/ordini/sub-ordini") && (
            <AddButton title="Aggiungi" onClick={() => setOpen(true)} />
          )}

        {open && <AddDocument onClose={handleOpenDialog} open={open} />}
      </Toolbar>
    </div>
  );
};
export default HeaderBelow;
