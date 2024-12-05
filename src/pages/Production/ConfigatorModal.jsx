import React, { useState } from "react";
import { Modal, Backdrop, Fade, Paper, Box, Typography, Tabs, Tab, TableContainer, styled, Button, } from "@mui/material";
import { ReactComponent as Right } from "../../assets/right.svg";
import AddIcon from "@mui/icons-material/Add"; // Importing the Add icon from Material-UI icons
import tableData from "../../utils/configuraModal.json";
import Table from "../../component/table/Table";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import "./ConfigatorModal.scss";

export default function ConfiguraModal({ open, close }) {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabMessages = {
        attrezzature: "Attenzione le attrezzature selezionate saranno rese indisponibili nel magazzino fino alla data di fine attività.",
        mezzi: "Attenzione i mezzi selezionati saranno rese indisponibili nel magazzino fino alla data di fine attività.",
        prodotti: "Attenzione i prodotti selezionati saranno resi indisponibili nel magazzino fino alla data di fine attività.",
        semilavorati: "Attenzione le attrezzature selezionate saranno rese indisponibili nel magazzino fino alla data di fine attività.",
        scarti: "Attenzione i prodotti selezionati saranno prelevati dalle giacenze di magazzino o dal prodotto risultato della fase precedente."
    };

    const buttonNames = {
        personale: "Aggiungi Personale",
        attrezzature: "Aggiungi Attrezzatura",
        mezzi: "Aggiungi Mezzo",
        prodotti: "Aggiungi Prodotto",
        semilavorati: "Aggiungi Semilavorato",
        scarti: "Aggiungi Scarto",
    };
    const columns = {
        personale: [
          { field: "ruolo", headerName: "Ruolo", width: 855 },
          { field: "quantita", headerName: "Quantità", width: 170 },
          { field: "azioni", headerName: "Azioni", width: 93 },
        ],
        attrezzature: [
          { field: "ruolo", headerName: "Ruolo", width: 855 },
          { field: "quantita", headerName: "Quantità", width: 170 },
          { field: "azioni", headerName: "Azioni", width: 93 },
        ],
        mezzi: [
          { field: "ruolo", headerName: "Ruolo", width: 855 },
          { field: "quantita", headerName: "Quantità", width: 170 },
          { field: "azioni", headerName: "Azioni", width: 93 },
        ],
        prodotti: [
          { field: "ruolo", headerName: "Ruolo", width: 148 },
          { field: "prodotto", headerName: "Prodotto", width: 340 },
          { field: "tipo", headerName: "Tipo", width: 185 },
          { field: "um", headerName: "UM", width: 180 },
          { field: "quantita", headerName: "Quantità", width: 170 },
          { field: "azioni", headerName: "Azioni", width: 93 },
        ],
        semilavorati: [
          { field: "ruolo", headerName: "Ruolo", width: 148 },
          { field: "prodotto", headerName: "Prodotto", width: 340 },
          { field: "tipo", headerName: "Tipo", width: 185 },
          { field: "um", headerName: "UM", width: 180 },
          { field: "quantita", headerName: "Quantità", width: 170 },
          { field: "azioni", headerName: "Azioni", width: 93 },
        ],
        scarti: [
          { field: "ruolo", headerName: "Ruolo", width: 148 },
          { field: "prodotto", headerName: "Prodotto", width: 340 },
          { field: "tipo", headerName: "Tipo", width: 185 },
          { field: "um", headerName: "UM", width: 180 },
          { field: "quantita", headerName: "Quantità", width: 170 },
          { field: "azioni", headerName: "Azioni", width: 93 },
        ],
      };
    
    // Map tab index to keys in the tabMessages object
    const tabKeys = ["personale", "attrezzature", "mezzi", "prodotti", "semilavorati", "scarti"];
    const currentTabKey = tabKeys[selectedTab];
    const message = tabMessages[currentTabKey] || "";

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

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

    const renderTableContent = () => {
        switch (selectedTab) {
            case 0:
                return (
                    <Table
                        data={tableData[currentTabKey]}
                        columns={columns?.personale}
                        navData={"ConfigatorModalPersonale"}
                    />
                );
            case 1:
                return (
                    <Table
                        data={tableData[currentTabKey]}
                        columns={columns?.attrezzature}
                        navData={"ConfigatorModalAttrezzature"}
                    />
                );
            case 2:
                return (
                    <Table
                        data={tableData[currentTabKey]}
                        columns={columns?.mezzi}
                        navData={"ConfigatorModalMezzi"}
                    />
                );
            case 3:
                return (
                    <Table
                        data={tableData[currentTabKey]}
                        columns={columns?.prodotti}
                        navData={"ConfigatorModalProdotti"}
                    />
                );
            case 4:
                return (
                    <Table
                        data={tableData[currentTabKey]}
                        columns={columns?.semilavorati}
                        navData={"ConfigatorModalSemilavorati"}
                    />
                );
            case 5:
                return (
                    <Table
                        data={tableData[currentTabKey]}
                        columns={columns?.scarti}
                        navData={"ConfigatorModalScarti"}
                    />
                );
            default:
                return <Typography>No Table Data</Typography>;
        }
    };

    return (
        <Modal
            open={open}
            onClose={close}
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
                    <Typography  className="modalTitle" variant="h6" gutterBottom>
                        Configura
                    </Typography>

                    {/* Tabs */}
                    <Box className="tabBox">
                    <Box className='tabBoxFlex'>
                        <CustomTabs
                            value={selectedTab}
                            onChange={(event, newValue) => setSelectedTab(newValue)}
                        >
                            <CustomTab label="Personale" icon={<Right />} />
                            <CustomTab label="Attrezzature" icon={<Right />} />
                            <CustomTab label="Mezzi" icon={<Right />} />
                            <CustomTab label="Prodotti" icon={<Right />} />
                            <CustomTab label="Semilavorati" icon={<Right />} />
                            <CustomTab label="Scarti" icon={<Right />} />
                           
                        </CustomTabs>
                        <Button
                                variant="contained" // Setting the button variant to "contained" for a filled appearance
                                startIcon={<AddIcon />} // Adding an icon at the start of the button
                                className="greenButton"
                                sx={{ background: "57C700" }}
                            >
                                Aggiungi
                            </Button>
                            </Box>
                        

                    </Box>
                    {/* Dynamic Message */}
                    {message && (
                        <Box  className="modalNotifationBlock">
                             <ErrorOutlineIcon/>
                            <Typography
                                variant="body1"
                               className="notifactionText"
                            >
                                {message}
                            </Typography>
                            </Box>
                        )}

                    {/* Conditional Table Rendering */}
                    <TableContainer>
                        {renderTableContent()}
                    </TableContainer>

                </Paper>
            </Fade>
        </Modal>
    );
}