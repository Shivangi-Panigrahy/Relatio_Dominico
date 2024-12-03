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
  const handleGoBack = () => {
    navigate(-1); // Most recommended method
  };
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
            onClick={handleGoBack}
          //   window.location.href.includes("/vendite")
          //     ? navigate("/vendite/preventivi")
          //     : navigate("/dashboard/profitti")
          // }
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
          ) :
            window.location.href.includes("/gantt") ? (
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
              window.location.href.includes("/dashboard/profitti") ?
                <>
                  <Typography variant="h2">Dashboard</Typography>
                  <IconButton edge="start" color="inherit">
                    <ArrowForwardIcon />
                  </IconButton>
                  <Typography variant="h2">Profitti</Typography>
                </>
                :
                window.location.href.includes("/dashboard/acquisti") ?
                  <>
                    <Typography variant="h2">Dashboard</Typography>
                    <IconButton edge="start" color="inherit">
                      <ArrowForwardIcon />
                    </IconButton>
                    <Typography variant="h2">Acquisti</Typography>
                  </>
                  :
                  window.location.href.includes("/dashboard/asset") ?
                    <>
                      <Typography variant="h2">Dashboard</Typography>
                      <IconButton edge="start" color="inherit">
                        <ArrowForwardIcon />
                      </IconButton>
                      <Typography variant="h2">Asset</Typography>
                    </>
                    :
                    window.location.href.includes("/dashboard/imposte") ?
                      <>
                        <Typography variant="h2">Dashboard</Typography>
                        <IconButton edge="start" color="inherit">
                          <ArrowForwardIcon />
                        </IconButton>
                        <Typography variant="h2">Imposte</Typography>
                      </>
                      :
                      window.location.href.includes("/dashboard/produzione") ?
                        <>
                          <Typography variant="h2">Dashboard</Typography>
                          <IconButton edge="start" color="inherit">
                            <ArrowForwardIcon />
                          </IconButton>
                          <Typography variant="h2">Produzione</Typography>
                        </>
                        :
                        window.location.href.includes("/dashboard/vendite") ?
                          <>
                            <Typography variant="h2">Dashboard</Typography>
                            <IconButton edge="start" color="inherit">
                              <ArrowForwardIcon />
                            </IconButton>
                            <Typography variant="h2">Vendite</Typography>
                          </>
                          :
                          window.location.href.includes("/dashboard/personale") ?
                            <>
                              <Typography variant="h2">Dashboard</Typography>
                              <IconButton edge="start" color="inherit">
                                <ArrowForwardIcon />
                              </IconButton>
                              <Typography variant="h2">Personale</Typography>
                            </>
                            :
                            window.location.href.includes("/dashboard/attivita") ?
                              <>
                                <Typography variant="h2">Dashboard</Typography>
                                <IconButton edge="start" color="inherit">
                                  <ArrowForwardIcon />
                                </IconButton>
                                <Typography variant="h2">Attivita</Typography>
                              </>
                              :
                              window.location.href.includes("/cataloghi/servizi/Scheda") ?
                                <>
                                  <Typography variant="h2">Cataloghi</Typography>
                                  <IconButton edge="start" color="inherit">
                                    <ArrowForwardIcon />
                                  </IconButton>
                                  <Typography variant="h2">Servizi</Typography>
                                  <IconButton edge="start" color="inherit">
                                    <ArrowForwardIcon />
                                  </IconButton>
                                  <Typography variant="h2">Nome del servizio</Typography>
                                </> :
                                window.location.href.includes("/cataloghi/servizi/Allegati") ?
                                  <>
                                    <Typography variant="h2">Cataloghi</Typography>
                                    <IconButton edge="start" color="inherit">
                                      <ArrowForwardIcon />
                                    </IconButton>
                                    <Typography variant="h2">Servizi</Typography>
                                    <IconButton edge="start" color="inherit">
                                      <ArrowForwardIcon />
                                    </IconButton>
                                    <Typography variant="h2">Nome del servizio</Typography>
                                  </> :
                                  window.location.href.includes("/cataloghi/servizi") ?
                                    <>
                                      <Typography variant="h2">Cataloghi</Typography>
                                      <IconButton edge="start" color="inherit">
                                        <ArrowForwardIcon />
                                      </IconButton>
                                      <Typography variant="h2">Servizi</Typography>
                                    </> :
                                    window.location.href.includes("/cataloghi/prodotti/Scheda") ?
                                      <>
                                        <Typography variant="h2">Cataloghi</Typography>
                                        <IconButton edge="start" color="inherit">
                                          <ArrowForwardIcon />
                                        </IconButton>
                                        <Typography variant="h2">Prodotti</Typography>
                                        <IconButton edge="start" color="inherit">
                                          <ArrowForwardIcon />
                                        </IconButton>
                                        <Typography variant="h2">Nome del prodotto</Typography>
                                      </> :
                                      window.location.href.includes("/cataloghi/prodotti/Distinta") ?
                                        <>
                                          <Typography variant="h2">Cataloghi</Typography>
                                          <IconButton edge="start" color="inherit">
                                            <ArrowForwardIcon />
                                          </IconButton>
                                          <Typography variant="h2">Prodotti</Typography>
                                          <IconButton edge="start" color="inherit">
                                            <ArrowForwardIcon />
                                          </IconButton>
                                          <Typography variant="h2">Nome del prodotto</Typography>
                                        </> :

                                        window.location.href.includes("/cataloghi/prodotti/Scheda") ?
                                          <>
                                            <Typography variant="h2">Cataloghi</Typography>
                                            <IconButton edge="start" color="inherit">
                                              <ArrowForwardIcon />
                                            </IconButton>
                                            <Typography variant="h2">Prodotti</Typography>
                                            <IconButton edge="start" color="inherit">
                                              <ArrowForwardIcon />
                                            </IconButton>
                                            <Typography variant="h2">Nome del prodotto</Typography>
                                          </> :
                                          window.location.href.includes("/cataloghi/prodotti/Distinta") ?
                                            <>
                                              <Typography variant="h2">Cataloghi</Typography>
                                              <IconButton edge="start" color="inherit">
                                                <ArrowForwardIcon />
                                              </IconButton>
                                              <Typography variant="h2">Prodotti</Typography>
                                              <IconButton edge="start" color="inherit">
                                                <ArrowForwardIcon />
                                              </IconButton>
                                              <Typography variant="h2">Nome del prodotto</Typography>
                                            </> :
                                            window.location.href.includes("/cataloghi/prodotti/Opzioni") ?
                                              <>
                                                <Typography variant="h2">Cataloghi</Typography>
                                                <IconButton edge="start" color="inherit">
                                                  <ArrowForwardIcon />
                                                </IconButton>
                                                <Typography variant="h2">Prodotti</Typography>
                                                <IconButton edge="start" color="inherit">
                                                  <ArrowForwardIcon />
                                                </IconButton>
                                                <Typography variant="h2">Nome del prodotto</Typography>
                                              </> :
                                              window.location.href.includes("/cataloghi/prodotti/Giacenze") ?
                                                <>
                                                  <Typography variant="h2">Cataloghi</Typography>
                                                  <IconButton edge="start" color="inherit">
                                                    <ArrowForwardIcon />
                                                  </IconButton>
                                                  <Typography variant="h2">Prodotti</Typography>
                                                  <IconButton edge="start" color="inherit">
                                                    <ArrowForwardIcon />
                                                  </IconButton>
                                                  <Typography variant="h2">Nome del prodotto</Typography>
                                                </> :
                                                window.location.href.includes("/cataloghi/prodotti/Allegati") ?
                                                  <>
                                                    <Typography variant="h2">Cataloghi</Typography>
                                                    <IconButton edge="start" color="inherit">
                                                      <ArrowForwardIcon />
                                                    </IconButton>
                                                    <Typography variant="h2">Prodotti</Typography>
                                                    <IconButton edge="start" color="inherit">
                                                      <ArrowForwardIcon />
                                                    </IconButton>
                                                    <Typography variant="h2">Nome del prodotto</Typography>
                                                  </> :
                                                  window.location.href.includes("/cataloghi/prodotti") ?
                                                    <>
                                                      <Typography variant="h2">Cataloghi</Typography>
                                                      <IconButton edge="start" color="inherit">
                                                        <ArrowForwardIcon />
                                                      </IconButton>
                                                      <Typography variant="h2">Prodotti</Typography>
                                                    </> :

                                                    window.location.href.includes("/cataloghi/configuratore/Configurazione") ?
                                                      <>
                                                        <Typography variant="h2">Cataloghi</Typography>
                                                        <IconButton edge="start" color="inherit">
                                                          <ArrowForwardIcon />
                                                        </IconButton>
                                                        <Typography variant="h2">Configuratore</Typography>
                                                      </> :
                                                      window.location.href.includes("/cataloghi/configuratore/Prodotti") ?
                                                        <>
                                                          <Typography variant="h2">Cataloghi</Typography>
                                                          <IconButton edge="start" color="inherit">
                                                            <ArrowForwardIcon />
                                                          </IconButton>
                                                          <Typography variant="h2">Configuratore</Typography>
                                                        </> :
                                                        window.location.href.includes("/cataloghi/listini/Gruppi") ?
                                                          <>
                                                            <Typography variant="h2">Cataloghi</Typography>
                                                            <IconButton edge="start" color="inherit">
                                                              <ArrowForwardIcon />
                                                            </IconButton>
                                                            <Typography variant="h2">Listini</Typography>
                                                            <IconButton edge="start" color="inherit">
                                                              <ArrowForwardIcon />
                                                            </IconButton>
                                                            <Typography variant="h2">Nome del listino</Typography>
                                                          </> :
                                                          window.location.href.includes("/cataloghi/listini/Prodotti") ?
                                                            <>
                                                              <Typography variant="h2">Cataloghi</Typography>
                                                              <IconButton edge="start" color="inherit">
                                                                <ArrowForwardIcon />
                                                              </IconButton>
                                                              <Typography variant="h2">Listini</Typography>
                                                              <IconButton edge="start" color="inherit">
                                                                <ArrowForwardIcon />
                                                              </IconButton>
                                                              <Typography variant="h2">Nome del listino</Typography>
                                                            </>
                                                            :
                                                            window.location.href.includes("/cataloghi/listini") ?
                                                              <>
                                                                <Typography variant="h2">Cataloghi</Typography>
                                                                <IconButton edge="start" color="inherit">
                                                                  <ArrowForwardIcon />
                                                                </IconButton>
                                                                <Typography variant="h2">Listini</Typography>
                                                              </> :
                                                              // Hr section

                                                              window.location.href.includes("/hr/sub-colaboratory/Contatti") ?
                                                                <>
                                                                  <Typography variant="h2">HR</Typography>
                                                                  <IconButton edge="start" color="inherit">
                                                                    <ArrowForwardIcon />
                                                                  </IconButton>
                                                                  <Typography variant="h2">Collaboratori</Typography>
                                                                  <IconButton edge="start" color="inherit">
                                                                    <ArrowForwardIcon />
                                                                  </IconButton>
                                                                  <Typography variant="h2">Nome del collaboratore</Typography>
                                                                </> :
                                                                window.location.href.includes("/hr/sub-colaboratory/Qualificazione") ?
                                                                  <>
                                                                    <Typography variant="h2">HR</Typography>
                                                                    <IconButton edge="start" color="inherit">
                                                                      <ArrowForwardIcon />
                                                                    </IconButton>
                                                                    <Typography variant="h2">Collaboratori</Typography>
                                                                    <IconButton edge="start" color="inherit">
                                                                      <ArrowForwardIcon />
                                                                    </IconButton>
                                                                    <Typography variant="h2">Nome del collaboratore</Typography>
                                                                  </> :
                                                                  window.location.href.includes("/hr/sub-colaboratory/Documenti") ?
                                                                    <>
                                                                      <Typography variant="h2">HR</Typography>
                                                                      <IconButton edge="start" color="inherit">
                                                                        <ArrowForwardIcon />
                                                                      </IconButton>
                                                                      <Typography variant="h2">Collaboratori</Typography>
                                                                      <IconButton edge="start" color="inherit">
                                                                        <ArrowForwardIcon />
                                                                      </IconButton>
                                                                      <Typography variant="h2">Nome del collaboratore</Typography>
                                                                    </> :
                                                                    window.location.href.includes("/hr/sub-colaboratory/Contratto") ?
                                                                      <>
                                                                        <Typography variant="h2">HR</Typography>
                                                                        <IconButton edge="start" color="inherit">
                                                                          <ArrowForwardIcon />
                                                                        </IconButton>
                                                                        <Typography variant="h2">Collaboratori</Typography>
                                                                        <IconButton edge="start" color="inherit">
                                                                          <ArrowForwardIcon />
                                                                        </IconButton>
                                                                        <Typography variant="h2">Nome del collaboratore</Typography>
                                                                      </> :
                                                                      window.location.href.includes("/hr/sub-colaboratory/Equipagiamento") ?
                                                                        <>
                                                                          <Typography variant="h2">HR</Typography>
                                                                          <IconButton edge="start" color="inherit">
                                                                            <ArrowForwardIcon />
                                                                          </IconButton>
                                                                          <Typography variant="h2">Collaboratori</Typography>
                                                                          <IconButton edge="start" color="inherit">
                                                                            <ArrowForwardIcon />
                                                                          </IconButton>
                                                                          <Typography variant="h2">Nome del collaboratore</Typography>
                                                                        </> :
                                                                        window.location.href.includes("/hr/sub-colaboratory/Turni") ?
                                                                          <>
                                                                            <Typography variant="h2">HR</Typography>
                                                                            <IconButton edge="start" color="inherit">
                                                                              <ArrowForwardIcon />
                                                                            </IconButton>
                                                                            <Typography variant="h2">Collaboratori</Typography>
                                                                            <IconButton edge="start" color="inherit">
                                                                              <ArrowForwardIcon />
                                                                            </IconButton>
                                                                            <Typography variant="h2">Nome del collaboratore</Typography>
                                                                          </> :
                                                                          window.location.href.includes("/hr/sub-colaboratory/Progetti") ?
                                                                            <>
                                                                              <Typography variant="h2">HR</Typography>
                                                                              <IconButton edge="start" color="inherit">
                                                                                <ArrowForwardIcon />
                                                                              </IconButton>
                                                                              <Typography variant="h2">Collaboratori</Typography>
                                                                              <IconButton edge="start" color="inherit">
                                                                                <ArrowForwardIcon />
                                                                              </IconButton>
                                                                              <Typography variant="h2">Nome del collaboratore</Typography>
                                                                            </> :
                                                                            window.location.href.includes("/hr/sub-colaboratory/Agenda") ?
                                                                              <>
                                                                                <Typography variant="h2">HR</Typography>
                                                                                <IconButton edge="start" color="inherit">
                                                                                  <ArrowForwardIcon />
                                                                                </IconButton>
                                                                                <Typography variant="h2">Collaboratori</Typography>
                                                                                <IconButton edge="start" color="inherit">
                                                                                  <ArrowForwardIcon />
                                                                                </IconButton>
                                                                                <Typography variant="h2">Nome del collaboratore</Typography>
                                                                              </> :
                                                                              window.location.href.includes("/hr/sub-colaboratory/Allegati") ?
                                                                                <>
                                                                                  <Typography variant="h2">HR</Typography>
                                                                                  <IconButton edge="start" color="inherit">
                                                                                    <ArrowForwardIcon />
                                                                                  </IconButton>
                                                                                  <Typography variant="h2">Collaboratori</Typography>
                                                                                  <IconButton edge="start" color="inherit">
                                                                                    <ArrowForwardIcon />
                                                                                  </IconButton>
                                                                                  <Typography variant="h2">Nome del collaboratore</Typography>
                                                                                </> :
                                                                                window.location.href.includes("/hr/colaboratory") ?
                                                                                  <>
                                                                                    <Typography variant="h2">HR</Typography>
                                                                                    <IconButton edge="start" color="inherit">
                                                                                      <ArrowForwardIcon />
                                                                                    </IconButton>
                                                                                    <Typography variant="h2">Collaboratori</Typography>
                                                                                  </> :
                                                                                  window.location.href.includes("/hr/calendario") ?
                                                                                    <>
                                                                                      <Typography variant="h2">HR</Typography>
                                                                                      <IconButton edge="start" color="inherit">
                                                                                        <ArrowForwardIcon />
                                                                                      </IconButton>
                                                                                      <Typography variant="h2">Turni</Typography>
                                                                                    </> :
                                                                                    window.location.href.includes("/hr/organizza") ?
                                                                                      <>
                                                                                        <Typography variant="h2">HR</Typography>
                                                                                        <IconButton edge="start" color="inherit">
                                                                                          <ArrowForwardIcon />
                                                                                        </IconButton>
                                                                                        <Typography variant="h2">Turni</Typography>
                                                                                      </> :
                                                                                      window.location.href.includes("/hr/ferie-e-permisse/evento") ?
                                                                                        <>
                                                                                          <Typography variant="h2">HR</Typography>
                                                                                          <IconButton edge="start" color="inherit">
                                                                                            <ArrowForwardIcon />
                                                                                          </IconButton>
                                                                                          <Typography variant="h2">Eventi</Typography>
                                                                                          <IconButton edge="start" color="inherit">
                                                                                            <ArrowForwardIcon />
                                                                                          </IconButton>
                                                                                          <Typography variant="h2">Nome evento</Typography>
                                                                                        </> :
                                                                                        window.location.href.includes("/hr/ferie-e-permisse") ?
                                                                                          <>
                                                                                            <Typography variant="h2">HR</Typography>
                                                                                            <IconButton edge="start" color="inherit">
                                                                                              <ArrowForwardIcon />
                                                                                            </IconButton>
                                                                                            <Typography variant="h2">Eventi</Typography>
                                                                                          </> :
                                                                                          window.location.href.includes("/hr/buste-page/busta") ?
                                                                                            <>
                                                                                              <Typography variant="h2">HR</Typography>
                                                                                              <IconButton edge="start" color="inherit">
                                                                                                <ArrowForwardIcon />
                                                                                              </IconButton>
                                                                                              <Typography variant="h2">Busta paga</Typography>
                                                                                              <IconButton edge="start" color="inherit">
                                                                                                <ArrowForwardIcon />
                                                                                              </IconButton>
                                                                                              <Typography variant="h2">Nome della busta paga</Typography>
                                                                                            </> :
                                                                                            window.location.href.includes("/hr/buste-page") ?
                                                                                              <>
                                                                                                <Typography variant="h2">HR</Typography>
                                                                                                <IconButton edge="start" color="inherit">
                                                                                                  <ArrowForwardIcon />
                                                                                                </IconButton>
                                                                                                <Typography variant="h2">Busta paga</Typography>
                                                                                              </> :
                                                                                              window.location.href.includes("/hr/candidati/candidato/Contatti") ?
                                                                                                <>
                                                                                                  <Typography variant="h2">HR</Typography>
                                                                                                  <IconButton edge="start" color="inherit">
                                                                                                    <ArrowForwardIcon />
                                                                                                  </IconButton>
                                                                                                  <Typography variant="h2">Candidati</Typography>
                                                                                                  <IconButton edge="start" color="inherit">
                                                                                                    <ArrowForwardIcon />
                                                                                                  </IconButton>
                                                                                                  <Typography variant="h2">Candidato</Typography>
                                                                                                </> :
                                                                                                window.location.href.includes("/hr/candidati/candidato/Qualificazione") ?
                                                                                                  <>
                                                                                                    <Typography variant="h2">HR</Typography>
                                                                                                    <IconButton edge="start" color="inherit">
                                                                                                      <ArrowForwardIcon />
                                                                                                    </IconButton>
                                                                                                    <Typography variant="h2">Candidati</Typography>
                                                                                                    <IconButton edge="start" color="inherit">
                                                                                                      <ArrowForwardIcon />
                                                                                                    </IconButton>
                                                                                                    <Typography variant="h2">Candidato</Typography>
                                                                                                  </> :
                                                                                                  window.location.href.includes("/hr/candidati/candidato/Agenda") ?
                                                                                                    <>
                                                                                                      <Typography variant="h2">HR</Typography>
                                                                                                      <IconButton edge="start" color="inherit">
                                                                                                        <ArrowForwardIcon />
                                                                                                      </IconButton>
                                                                                                      <Typography variant="h2">Candidati</Typography>
                                                                                                      <IconButton edge="start" color="inherit">
                                                                                                        <ArrowForwardIcon />
                                                                                                      </IconButton>
                                                                                                      <Typography variant="h2">Candidato</Typography>
                                                                                                    </> :
                                                                                                    window.location.href.includes("/hr/candidati/candidato/Allegati") ?
                                                                                                      <>
                                                                                                        <Typography variant="h2">HR</Typography>
                                                                                                        <IconButton edge="start" color="inherit">
                                                                                                          <ArrowForwardIcon />
                                                                                                        </IconButton>
                                                                                                        <Typography variant="h2">Candidati</Typography>
                                                                                                        <IconButton edge="start" color="inherit">
                                                                                                          <ArrowForwardIcon />
                                                                                                        </IconButton>
                                                                                                        <Typography variant="h2">Candidato</Typography>
                                                                                                      </> :
                                                                                                      window.location.href.includes("/hr/candidati") ?
                                                                                                        <>
                                                                                                          <Typography variant="h2">HR</Typography>
                                                                                                          <IconButton edge="start" color="inherit">
                                                                                                            <ArrowForwardIcon />
                                                                                                          </IconButton>
                                                                                                          <Typography variant="h2">Candidati</Typography>
                                                                                                        </> :
                                                                                                        // amministrazione part start
                                                                                                        window.location.href.includes("/amministrazione/imposte/Reteizzazione") ?
                                                                                                          <>
                                                                                                            <Typography variant="h2">Amministrazione</Typography>
                                                                                                            <IconButton edge="start" color="inherit">
                                                                                                              <ArrowForwardIcon />
                                                                                                            </IconButton>
                                                                                                            <Typography variant="h2">Imposte</Typography>
                                                                                                            <IconButton edge="start" color="inherit">
                                                                                                              <ArrowForwardIcon />
                                                                                                            </IconButton>
                                                                                                            <Typography variant="h2">Nome dell’imposta</Typography>
                                                                                                          </> :
                                                                                                          window.location.href.includes("/amministrazione/imposte/Allegati") ?
                                                                                                            <>
                                                                                                              <Typography variant="h2">Amministrazione</Typography>
                                                                                                              <IconButton edge="start" color="inherit">
                                                                                                                <ArrowForwardIcon />
                                                                                                              </IconButton>
                                                                                                              <Typography variant="h2">Imposte</Typography>
                                                                                                              <IconButton edge="start" color="inherit">
                                                                                                                <ArrowForwardIcon />
                                                                                                              </IconButton>
                                                                                                              <Typography variant="h2">Nome dell’imposta</Typography>
                                                                                                            </> :
                                                                                                            window.location.href.includes("/amministrazione/imposte") ?
                                                                                                              <>
                                                                                                                <Typography variant="h2">Amministrazione</Typography>
                                                                                                                <IconButton edge="start" color="inherit">
                                                                                                                  <ArrowForwardIcon />
                                                                                                                </IconButton>
                                                                                                                <Typography variant="h2">Imposte</Typography>
                                                                                                              </>
                                                                                                              :
                                                                                                              window.location.href.includes("/amministrazione/documenti/fattura") ?
                                                                                                                <>
                                                                                                                  <Typography variant="h2">Amministrazione</Typography>
                                                                                                                  <IconButton edge="start" color="inherit">
                                                                                                                    <ArrowForwardIcon />
                                                                                                                  </IconButton>
                                                                                                                  <Typography variant="h2">Documenti</Typography>
                                                                                                                  <IconButton edge="start" color="inherit">
                                                                                                                    <ArrowForwardIcon />
                                                                                                                  </IconButton>
                                                                                                                  <Typography variant="h2">Fattura</Typography>
                                                                                                                </> :
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
                                                                                                                      window.location.href.includes("/amministrazione/asset/Rate") ?
                                                                                                                        <>
                                                                                                                          <Typography variant="h2">Amministrazione</Typography>
                                                                                                                          <IconButton edge="start" color="inherit">
                                                                                                                            <ArrowForwardIcon />
                                                                                                                          </IconButton>
                                                                                                                          <Typography variant="h2">Asset</Typography>
                                                                                                                          <IconButton edge="start" color="inherit">
                                                                                                                            <ArrowForwardIcon />
                                                                                                                          </IconButton>
                                                                                                                          <Typography variant="h2">Nome asset</Typography>
                                                                                                                        </>
                                                                                                                        :
                                                                                                                        window.location.href.includes("/amministrazione/asset/Allegati") ?
                                                                                                                          <>
                                                                                                                            <Typography variant="h2">Amministrazione</Typography>
                                                                                                                            <IconButton edge="start" color="inherit">
                                                                                                                              <ArrowForwardIcon />
                                                                                                                            </IconButton>
                                                                                                                            <Typography variant="h2">Asset</Typography>
                                                                                                                            <IconButton edge="start" color="inherit">
                                                                                                                              <ArrowForwardIcon />
                                                                                                                            </IconButton>
                                                                                                                            <Typography variant="h2">Nome asset</Typography>
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
                                                                                                                                  window.location.href.includes("/production/plan") ?
                                                                                                                                    <>
                                                                                                                                      <Typography variant="h2">Produzione</Typography>
                                                                                                                                      <IconButton edge="start" color="inherit">
                                                                                                                                        <ArrowForwardIcon />
                                                                                                                                      </IconButton>
                                                                                                                                      <Typography variant="h2">Pianifica</Typography>
                                                                                                                                    </> :
                                                                                                                                    window.location.href.includes("/production/list/details") ?
                                                                                                                                      <>
                                                                                                                                        <Typography variant="h2">HR</Typography>
                                                                                                                                        <IconButton edge="start" color="inherit">
                                                                                                                                          <ArrowForwardIcon />
                                                                                                                                        </IconButton>
                                                                                                                                        <Typography variant="h2">Collaboratori</Typography>
                                                                                                                                        <IconButton edge="start" color="inherit">
                                                                                                                                          <ArrowForwardIcon />
                                                                                                                                        </IconButton>
                                                                                                                                        <Typography variant="h2">Nome del collaboratore</Typography>
                                                                                                                                      </> :
                                                                                                                                      window.location.href.includes("/production/list") ?
                                                                                                                                        <>
                                                                                                                                          <Typography variant="h2">Produzione</Typography>
                                                                                                                                          <IconButton edge="start" color="inherit">
                                                                                                                                            <ArrowForwardIcon />
                                                                                                                                          </IconButton>
                                                                                                                                          <Typography variant="h2">Produzioni</Typography>
                                                                                                                                        </> :
                                                                                                                                        window.location.href.includes("/production/processes/details") ?
                                                                                                                                          <>
                                                                                                                                            <Typography variant="h2">Produzione</Typography>
                                                                                                                                            <IconButton edge="start" color="inherit">
                                                                                                                                              <ArrowForwardIcon />
                                                                                                                                            </IconButton>
                                                                                                                                            <Typography variant="h2">Processo</Typography>
                                                                                                                                            <IconButton edge="start" color="inherit">
                                                                                                                                              <ArrowForwardIcon />
                                                                                                                                            </IconButton>
                                                                                                                                            <Typography variant="h2">Nome del processo.</Typography>
                                                                                                                                          </> :
                                                                                                                                          window.location.href.includes("/production/processes") ?
                                                                                                                                            <>
                                                                                                                                              <Typography variant="h2">Produzione</Typography>
                                                                                                                                              <IconButton edge="start" color="inherit">
                                                                                                                                                <ArrowForwardIcon />
                                                                                                                                              </IconButton>
                                                                                                                                              <Typography variant="h2">Processi</Typography>
                                                                                                                                            </> :
                                                                                                                                            (
                                                                                                                                              <Typography variant="h2">Titolo della Pagina</Typography>
                                                                                                                                            )}
        </Box>
        {!location.pathname.includes("/vendite/preventivi/sub-preventivi") &&
          !location.pathname.includes("/vendite/ordini/sub-ordini") &&
          !location.pathname.includes("/acquisti/preventivi/sub-preventivi") &&
          !location.pathname.includes("/acquisti/budget/sub-budget") &&
          !location.pathname.includes("/dashboard/profitti") &&
          !location.pathname.includes("/dashboard/vendite") &&
          !location.pathname.includes("/dashboard/acquisti") &&
          !location.pathname.includes("/dashboard/personale") &&
          !location.pathname.includes("/dashboard/imposte") &&
          !location.pathname.includes("/dashboard/asset") &&
          !location.pathname.includes("/dashboard/attivita") &&
          !location.pathname.includes("/acquisti/ordini/sub-ordini") &&
          !location.pathname.includes("/amministrazione/documenti/fattura") &&
          !location.pathname.includes("/production/plan") &&
          !location.pathname.includes("/production/list/details") &&
          !location.pathname.includes("/production/processes/details") && (
            <AddButton title="Aggiungi" onClick={() => setOpen(true)} />
          )}

        {open && <AddDocument onClose={handleOpenDialog} open={open} />}
      </Toolbar>
    </div>
  );
};
export default HeaderBelow;
