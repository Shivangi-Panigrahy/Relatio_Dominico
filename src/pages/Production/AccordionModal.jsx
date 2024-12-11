import React from "react";
import { Modal, Backdrop, Fade, Paper, Box, Typography, Button, } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // Importing the Add icon from Material-UI icons
import Table from "../../component/table/Table";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Add } from "@mui/icons-material";
import "./ConfigatorModal.scss";

const OrdiniData = [
    {
        status: "Totale Semilavorati prodotti",
        count: 5543,
        color: "#100919",
    },
    {
        status: "Totale Semilavorati scaricati",
        count: 5543,
        color: "#57C700",
    },
    {
        status: "Totale lotti",
        count: 4,
        color: "#FFA903",
    },
];

export default function AccordionModal({ open, onClose, label, message, json }) {

    const columns = label === "Attrezzature" ? [
        { field: "ndiserie", headerName: "N di serie", width: 100 },
        { field: "nome", headerName: "Nome", width: 100 },
        { field: "attrezzatura", headerName: "Attrezzatura", width: 90 },
    ] : label === "Collaboratori" ? [
        { field: "iDcollaboratore", headerName: "ID Collaboratore", width: 100 },
        { field: "nome", headerName: "Nome", width: 100 },
        { field: "ruolo", headerName: "Ruolo", width: 90 },
    ] : label === "Mezzi" ? [
        { field: "targaTrattore", headerName: "Targa trattore", width: 120 },
        { field: "rimorchio", headerName: "Rimorchio", width: 120 },
        { field: "nomeMezzo", headerName: "Nome Mezzo", width: 150 },
        { field: "categoria", headerName: "Categoria", width: 100 },
    ] : label === "Semilavorati" ? [
        { field: "codProdotto", headerName: "Cod. prod.", width: 100 },
        { field: "categoria", headerName: "Categoria", width: 100 },
        { field: "nome", headerName: "Nome", width: 100 },
        { field: "unitaDiMisura", headerName: "U.M.", width: 90 },
        { field: "dataCarico", headerName: "Data carico", width: 120 },
        { field: "dataCarico", headerName: "Data carico", width: 120 },
        { field: "quantita", headerName: "Q.tà", width: 90 },
        { field: "azione", headerName: "Azione", width: 90 },
    ] : label === "Scarti" ? [
        { field: "codProdotto", headerName: "Cod. prod.", width: 100 },
        { field: "categoria", headerName: "Categoria", width: 100 },
        { field: "nome", headerName: "Nome", width: 100 },
        { field: "unitaDiMisura", headerName: "U.M.", width: 90 },
        { field: "dataCarico", headerName: "Data carico", width: 120 },
        { field: "dataCarico", headerName: "Data carico", width: 120 },
        { field: "quantita", headerName: "Q.tà", width: 90 },
        { field: "azione", headerName: "Azione", width: 90 },
    ] : label === "Prodotto" ? [
        { field: "codProdotto", headerName: "Cod. prod.", width: 100 },
        { field: "categoria", headerName: "Categoria", width: 100 },
        { field: "nome", headerName: "Nome", width: 100 },
        { field: "unitaDiMisura", headerName: "U.M.", width: 90 },
        { field: "dataCarico", headerName: "Data carico", width: 120 },
        { field: "dataCarico", headerName: "Data carico", width: 120 },
        { field: "quantita", headerName: "Q.tà", width: 90 },
        { field: "azione", headerName: "Azione", width: 90 },
    ] : label === "Prodotto" ? [
        { field: "codProdotto", headerName: "Cod. prod.", width: 100 },
        { field: "categoria", headerName: "Categoria", width: 100 },
        { field: "nome", headerName: "Nome", width: 100 },
        { field: "unitaDiMisura", headerName: "U.M.", width: 90 },
        { field: "dataCarico", headerName: "Data carico", width: 120 },
        { field: "dataCarico", headerName: "Data carico", width: 120 },
        { field: "quantita", headerName: "Q.tà", width: 90 },
        { field: "azione", headerName: "Azione", width: 90 },
    ] 
    
    : []; // Default to empty array if no label matches
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            className="risultatiConfigatorModal"
        >
            <Fade in={open}>
                <Paper
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        maxWidth: "1200px",
                        padding: "40px",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <div className="risultatiConfigatorModal__heading">
                        <Typography className="modalTitle" variant="h6" gutterBottom>
                            {label}
                        </Typography>

                        {/* Tabs */}


                        {(label === "Attrezzature" || label === "Collaboratori" || label === "Mezzi") && (
                            <Box className="tabBox">
                                <Button
                                    variant="contained" // Setting the button variant to "contained" for a filled appearance
                                    startIcon={<AddIcon />} // Adding an icon at the start of the button
                                    className="greenButton"
                                    sx={{ background: "57C700" }}
                                >
                                    Utillizza
                                </Button>
                            </Box>
                        )}
                    </div>
                    {(label === "Semilavorati" || label === "Scarti" || label === "Prodotto") && (
                        <div className="countList">
                            {Array.isArray(OrdiniData) &&
                                OrdiniData.map((item, index) => (
                                    <div key={index} className="countList__item">
                                        <h3>{item.status}</h3>
                                        <p>{item.count}</p>
                                    </div>
                                ))}
                        </div>
                    )}
                    {/* Dynamic Message */}
                    {message && (
                        <Box className="modalNotifationBlock">
                            <ErrorOutlineIcon />
                            <Typography
                                variant="body1"
                                className="notifactionText"
                            >
                                {message}
                            </Typography>
                        </Box>
                    )}

                    {/* Conditional Table Rendering */}
                    <Table
                        data={json}
                        columns={columns}
                        navData={label}
                    />
                    {(label === "Semilavorati" || label === "Scarti" || label === "Prodotto") && (
                        <Button
                            startIcon={<Add />}
                            className="add-row-button"
                        // onClick={handleAddResults}
                        >
                            Aggiungi riga
                        </Button>
                    )}
                </Paper>

            </Fade>
        </Modal>
    );
}