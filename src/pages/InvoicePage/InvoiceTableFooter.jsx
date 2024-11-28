import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";
import "./InvoicePage.scss";
import { ReactComponent as ArrowUp } from "../../assets/ArrowUp.svg";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { Hexagon, MoreVert } from "@mui/icons-material";
import "./InvoiceTableFooter.scss";

const InvoiceTableFooter = ({ dummyData, setFilteredData }) => {
  const sampleData = [
    {
      id: "1",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "2",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "3",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "4",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "5",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "6",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuService, setMenuService] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleAll = () => {
    setSelectedServices((prev) =>
      prev.length === sampleData.length
        ? []
        : sampleData.map((service) => service.id)
    );
  };

  const handleMenuOpen = (event, serviceId) => {
    setAnchorEl(event.currentTarget);
    setMenuService(serviceId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuService(null);
  };

  useEffect(() => {
    console.log(dummyData, "Filterrrr Data");
  }, [dummyData]);

  const handleAddLastElement = () => {
    if (dummyData?.length > 0) {
      const lastElement = dummyData[dummyData.length - 1];
      const newElement = {
        ...lastElement,
        id: `custom-${Date.now()}`, // Create a unique ID using timestamp
      };

      const updatedData = [...dummyData, newElement];
      setFilteredData(updatedData);
    }
  };

  console.log(dummyData, "dummyData--");
  return (
    <Box className="invoiceLayout">
      <Box className="invoiceLayout__topBar">
        <Button onClick={() => setOpen(true)}>
          <ArrowUp /> Inserisci servizi
        </Button>
        <Button onClick={() => setOpen(true)}>
          <ArrowUp /> Inserisci prodotto
        </Button>
        <Button onClick={handleAddLastElement}>
          <ArrowUp /> Inserisci riga personalizzata
        </Button>
        <Button>
          <ArrowUp /> Piano rate
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        className="invoicePopupContainer"
      >
        <DialogTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "24px" }}
            >
              Selezione un o più servizio
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#57C700",
                color: "white",
                boxShadow: "none",
                lineHeight: "1",
                padding: "10px 16px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                  fill="white"
                />
              </svg>
              <span style={{ paddingTop: "2px" }}>Inserisci</span>
            </Button>
          </div>
          <Typography variant="subtitle2" color="#100919" fontSize={"14px"}>
            SELEZIONA IL DOCUMENTO CHE VUOI CREARE
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TableContainer className="insearchTable" component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedServices.length === sampleData.length}
                      onChange={toggleAll}
                    />
                  </TableCell>
                  <TableCell>Cod.</TableCell>
                  <TableCell>Nome del prodotto</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>U/M</TableCell>
                  <TableCell>Q.tà</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleData.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedServices.includes(service.id)}
                        onChange={() => toggleService(service.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Hexagon
                          style={{
                            color: "#e91e63",
                            width: "42px",
                            height: "42px",
                          }}
                        />
                        <span>{service.code}</span>
                      </div>
                    </TableCell>
                    <TableCell>{service.name}</TableCell>
                    <TableCell>{service.category}</TableCell>
                    <TableCell>{service.unit}</TableCell>
                    <TableCell>{service.quantity}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={(event) => handleMenuOpen(event, service.id)}
                      >
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
            <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
          </Menu>
        </DialogContent>
      </Dialog>

      <Box className="invoiceLayout__row">
        <Box className="invoiceLayout__col">
          <Typography className="invoiceLayout__col-title">TOTALE</Typography>
        </Box>
        <Box className="invoiceLayout__col">
          <Typography>Imponibile</Typography>
          <Typography variant="h6">5.000,00€</Typography>
        </Box>
        <Box className="invoiceLayout__col">
          <Typography>Sconto</Typography>
          <Typography variant="h6">5.000,00€</Typography>
        </Box>
        <Box className="invoiceLayout__col">
          <Typography>IVA</Typography>
          <Typography variant="h6">5.000,00€</Typography>
        </Box>
        <Box className="invoiceLayout__col">
          <Typography>Totale</Typography>
          <Typography variant="h6" className="total-value">
            5.000,00€
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceTableFooter;
