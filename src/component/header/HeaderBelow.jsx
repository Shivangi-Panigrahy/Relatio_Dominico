import { Toolbar, Typography, IconButton, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AddButton } from "../button/AddButton";
import { useNavigate } from "react-router-dom";
import AddDocument from "../Modal/AddDocument";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HeaderBelow = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpenDialog = (value) => {
    setOpen(value); // Open dialog when AddButton is clicked
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
            onClick={() => navigate("/dashboard")}
          >
            <ArrowBackIcon />
          </IconButton>
          {window.location.href.includes("/invoice") ? (
            <>
              <Typography variant="h2">Categoria </Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard")}
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
                onClick={() => navigate("/dashboard")}
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
                onClick={() => navigate("/dashboard")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Timesheet</Typography>
            </>
          ) : window.location.href.includes("/dashboard/profitti") ? (
            <>
              <Typography variant="h2">Dashboard</Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Profitti</Typography>
            </>
          ) : window.location.href.includes("/dashboard/acquisti") ? (
            <>
              <Typography variant="h2">Dashboard</Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Acquisti</Typography>
            </>
          ) : window.location.href.includes("/dashboard/imposte") ? (
            <>
              <Typography variant="h2">Dashboard</Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Imposte</Typography>
            </>
          ) : window.location.href.includes("/dashboard/vendite") ? (
            <>
              <Typography variant="h2">Dashboard</Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Vendite</Typography>
            </>
          ) : window.location.href.includes("/dashboard/asset") ? (
            <>
              <Typography variant="h2">Dashboard</Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Asset</Typography>
            </>
          ) : window.location.href.includes("/dashboard/attivita") ? (
            <>
              <Typography variant="h2">Dashboard</Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Attivita</Typography>
            </>
          ) : window.location.href.includes("/dashboard/produzione") ? (
            <>
              <Typography variant="h2">Dashboard</Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="h2">Produzione</Typography>
            </>
          ) : (
            <Typography variant="h2">Titolo della Pagina</Typography>
          )}
        </Box>
        {window.location.href.includes("/dashboard") && (
          <AddButton title="Aggiungi" onClick={() => setOpen(true)} />
        )}
        {open && <AddDocument onClose={handleOpenDialog} open={open} />}
      </Toolbar>
    </div>
  );
};

export default HeaderBelow;
