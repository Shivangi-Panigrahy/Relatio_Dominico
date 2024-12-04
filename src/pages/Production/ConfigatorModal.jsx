import React, { useState } from "react";
import {
    Modal,
    Backdrop,
    Fade,
    Paper,
    Box,
    Typography,
    Tabs,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    TextField,
    IconButton,
    styled,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { ReactComponent as Right } from "../../assets/right.svg";
import "./ConfigatorModal.scss";

const tableData = {
    personale: [
        {
            id: 1,
            ruolo: "Operaio specializzato",
            quantita: 5,
        },
        {
            id: 2,
            ruolo: "Operaio specializzato",
            quantita: 5,
        },
        {
            id: 3,
            ruolo: "Operaio specializzato",
            quantita: 5,
        },
    ],
    attrezzature: [
        {
            id: 1,
            ruolo: "Rastrello tipo y",
            quantita: 5,
        },
        {
            id: 2,
            ruolo: "Rastrello tipo y",
            quantita: 5,
        },
        {
            id: 3,
            ruolo: "Rastrello tipo y",
            quantita: 5,
        }
    ],
    mezzi: [
        {
            id: 1,
            ruolo: "Trattore tipo x",
            quantita: 12,
        },
        {
            id: 2,
            ruolo: "Trattore tipo x",
            quantita: 12,
        },
        {
            id: 3,
            ruolo: "Trattore tipo x",
            quantita: 12,
        },
    ],
    prodotti: [
        {
            id: 1,
            ruolo: "CD490823",
            prodotto: "Zafferano",
            tipo: "prodotto finito",
            um: "kg",
        },
        {
            id: 2,
            ruolo: "CD490823",
            prodotto: "Zafferano",
            tipo: "prodotto finito",
            um: "kg",
        },
        {
            id: 3,
            ruolo: "CD490823",
            prodotto: "Zafferano",
            tipo: "prodotto finito",
            um: "kg",
        },
    ],
    // Add more data for other tabs as needed
};


export default function ConfiguraModal({ open, close }) {
    const [selectedTab, setSelectedTab] = useState(0);

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
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>Ruolo</TableCell>
                                <TableCell>Q.tà</TableCell>
                                <TableCell>Azioni</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData?.personale.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>{row.ruolo}</TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            defaultValue={row.quantita}
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <MoreVert />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                );
            case 1:
                return (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>Rastrezzature</TableCell>
                                <TableCell>Q.tà</TableCell>
                                <TableCell>Azioni</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.attrezzature.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>{row.ruolo}</TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            defaultValue={row.quantita}
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <MoreVert />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                );
            case 2:
                return (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>Mezzi</TableCell>
                                <TableCell>Q.tà</TableCell>
                                <TableCell>Azioni</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.mezzi.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>{row.ruolo}</TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            defaultValue={row.quantita}
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <MoreVert />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                );
            case 3:
                return (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>Codice prodotto</TableCell>
                                <TableCell>Prodotto</TableCell>
                                <TableCell>Tipo</TableCell>
                                <TableCell>Um</TableCell>
                                <TableCell>Azioni</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.prodotti.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>{row.ruolo}</TableCell>
                                    <TableCell>{row.prodotto}</TableCell>
                                    <TableCell>{row.tipo}</TableCell>
                                    <TableCell>{row.um}</TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <MoreVert />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
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
                        padding: "20px",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Configura
                    </Typography>

                    {/* Tabs */}
                    <Box className="tabBox">
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
                            <CustomTab label="Fornitori" icon={<Right />} />
                            <CustomTab label="Clienti" icon={<Right />} />
                        </CustomTabs>
                    </Box>

                    {/* Conditional Table Rendering */}
                    <TableContainer>
                        {renderTableContent()}
                    </TableContainer>
                </Paper>
            </Fade>
        </Modal>
    );
}
