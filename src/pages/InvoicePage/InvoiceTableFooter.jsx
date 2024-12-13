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
import { ReactComponent as ProductIcon } from "../../assets/ProductIcon.svg";
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
import { AddButton } from "../../component/button/AddButton";

const InvoiceTableFooter = ({ dummyData, setFilteredData }) => {
  const sampleData = [
    {
      id: "1",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "2",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "3",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "4",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "5",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
    },
    {
      id: "6",
      img: "",
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

  const handleAddSelectedRows = () => {
    const selectedRows = sampleData.filter((service) =>
      selectedServices.includes(service.id)
    );

    const transformedRows = selectedRows.map((row) => ({
      id: `selected-${row.id}-${Date.now()}`,
      prodotto: row.name,
      quantita: row.quantity.toString(),
      prezzo: "45",
      sconto: "20%,PZ",
      iva_type: row.unit,
      iva_percentage: "22%,PZ",
      esenzione: "esenzione",
      totale: "0",
      iva: "22%,es",
      pz: row.code,
      codice: row.code
    }));

    const updatedData = [...dummyData, ...transformedRows];

    setFilteredData(updatedData);

    setOpen(false);
    setSelectedServices([]);
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
              Selezione un o più servizios
            </Typography>
            <AddButton
              title="Inserisci"
              onClick={handleAddSelectedRows}
              disabled={selectedServices.length === 0}
            />
          </div>
          <Typography variant="subtitle2" color="#100919" fontSize={"14px"}>
            {`${selectedServices.length} servizi selezionati`}
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
                  <TableCell>Img</TableCell>
                  <TableCell>Cod.</TableCell>
                  <TableCell>Nome del prodotto</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>U/M</TableCell>
                  <TableCell>Q.tà</TableCell>
                  <TableCell>Azioni</TableCell>
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
                        <ProductIcon
                          style={{
                            width: "42px",
                            height: "42px",
                          }}
                        />
                      </div>
                    </TableCell>
                    <TableCell>{service.code}</TableCell>
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
