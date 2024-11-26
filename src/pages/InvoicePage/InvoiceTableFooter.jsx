import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./InvoicePage.scss";
import {ReactComponent as ArrowUp} from "../../assets/ArrowUp.svg"

const InvoiceTableFooter = () => {
  return (
    <Box className="invoiceLayout">
      <Box className="invoiceLayout__topBar">
        <Button><ArrowUp /> Inserisci servizi</Button>
        <Button><ArrowUp /> Inserisci prodotto</Button>
        <Button><ArrowUp /> Inserisci riga personalizzata</Button>
        <Button><ArrowUp /> Piano rate</Button>
      </Box>

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
