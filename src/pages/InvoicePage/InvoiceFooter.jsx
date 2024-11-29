import React, { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Typography,
  Button,
  Menu,
} from "@mui/material";
import "./InvoicePage.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AddButton } from "../../component/button/AddButton";
import { ReactComponent as InfoIcon } from "../../assets/InfoIcon.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const InvoiceFooter = () => {
  const [documentCards, setDocumentCards] = useState([
    {
      id: Date.now(),
      orderType: "",
      documentId: "",
      date: "",
      commessa: "",
      cup: "",
      cig: "",
    },
  ]);
  const [selectedValues, setSelectedValues] = useState({
    ritenuta: "",
    bollo: "",
    rivalza: "",
    condizioniPagamento: "",
    esigibilitaIVA: "",
    tipoPagamento: "",
    metodoPagamento: "",
    modalitaPagamento: "",
    canalePagamento: "",
  });
  const [clicked, setClicked] = useState({
    ritenuta: false,
    bollo: false,
    rivalza: false,
    condizioniPagamento: false,
    esigibilitaIVA: false,
    tipoPagamento: false,
    metodoPagamento: false,
    modalitaPagamento: false,
    canalePagamento: false,
  });
  const handleChange = (key) => (event) => {
    setSelectedValues({ ...selectedValues, [key]: event.target.value });
  };
  const handleFocus = (key) => () => {
    setClicked({ ...clicked, [key]: true });
  };
  const handleBlur = (key) => () => {
    if (!selectedValues[key]) {
      setClicked({ ...clicked, [key]: false });
    }
  };
  const addDocumentCard = () => {
    setDocumentCards([
      ...documentCards,
      {
        id: Date.now(),
        orderType: "",
        documentId: "",
        date: "",
        commessa: "",
        cup: "",
        cig: "",
      },
    ]);
  };
  const removeDocumentCard = (cardId) => {
    if (documentCards.length > 1) {
      setDocumentCards(documentCards.filter((card) => card.id !== cardId));
    }
  };
  const handleFieldChange = (cardId, field, value) => {
    setDocumentCards(
      documentCards.map((card) =>
        card.id === cardId ? { ...card, [field]: value } : card
      )
    );
  };
  return (
    <>
      <Box className="infoBlock">
        <Typography className="infoBlock__title">
          <InfoIcon /> INFORMAZIONI PER LA FATTURAZIONE ELETTRONICA
        </Typography>
        <Box className="infoBlock__list">
          {/* Column 1 */}
          <Box className="infoBlock__list-column">
            <Select
              className="formSelect"
              displayEmpty
              value={selectedValues.ritenuta}
              onFocus={handleFocus("ritenuta")}
              onBlur={handleBlur("ritenuta")}
              onChange={handleChange("ritenuta")}
              IconComponent={KeyboardArrowDownIcon}
            >
              {!clicked.ritenuta && (
                <MenuItem value="" disabled style={{ color: "#CCCCCC" }}>
                  <span style={{ color: '#CCCCCC' }}>Seleziona Ritenuta</span>
                </MenuItem>
              )}
              <MenuItem value="ritenuta1">Ritenuta 1</MenuItem>
              <MenuItem value="ritenuta2">Ritenuta 2</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              value={selectedValues.bollo}
              onFocus={handleFocus("bollo")}
              onBlur={handleBlur("bollo")}
              onChange={handleChange("bollo")}
              IconComponent={KeyboardArrowDownIcon}
            >
              {!clicked.bollo && (
                <MenuItem value="" disabled style={{ color: "#CCCCCC" }}>
                  <span style={{ color: '#CCCCCC' }}>Seleziona Bollo</span>
                </MenuItem>
              )}
              <MenuItem value="bollo1">Bollo 1</MenuItem>
              <MenuItem value="bollo2">Bollo 2</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              value={selectedValues.rivalza}
              onFocus={handleFocus("rivalza")}
              onBlur={handleBlur("rivalza")}
              onChange={handleChange("rivalza")}
              IconComponent={KeyboardArrowDownIcon}
              placeholder=" Seleziona Rivalza"
            >
              {!clicked.rivalza && (
                <MenuItem value="" disabled style={{ color: "#CCCCCC" }}>
                  {/* Seleziona Rivalza */}
                  <span style={{ color: '#CCCCCC' }}> Seleziona Rivalza</span>
                </MenuItem>
              )}
              <MenuItem value="rivalza1">Rivalza 1</MenuItem>
              <MenuItem value="rivalza2">Rivalza 2</MenuItem>
            </Select>
          </Box>
          {/* Column 2 */}
          <Box className="infoBlock__list-column">
            <Select
              className="formSelect"
              displayEmpty
              value={selectedValues.condizioniPagamento}
              onFocus={handleFocus("condizioniPagamento")}
              onBlur={handleBlur("condizioniPagamento")}
              onChange={handleChange("condizioniPagamento")}
              IconComponent={KeyboardArrowDownIcon}
            >
              {!clicked.condizioniPagamento && (
                <MenuItem value="" disabled>
                  <span style={{ color: '#CCCCCC' }}>Condizioni di Pagamento</span>
                </MenuItem>
              )}
              <MenuItem value="condizione1">Condizione 1</MenuItem>
              <MenuItem value="condizione2">Condizione 2</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              value={selectedValues.esigibilitaIVA}
              onFocus={handleFocus("esigibilitaIVA")}
              onBlur={handleBlur("esigibilitaIVA")}
              onChange={handleChange("esigibilitaIVA")}
              IconComponent={KeyboardArrowDownIcon}
            >
              {!clicked.esigibilitaIVA && (
                <MenuItem value="" disabled>
                  <span style={{ color: '#CCCCCC' }}>Esigibilità IVA</span>
                </MenuItem>
              )}
              <MenuItem value="iva1">IVA 1</MenuItem>
              <MenuItem value="iva2">IVA 2</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              value={selectedValues.tipoPagamento}
              onFocus={handleFocus("tipoPagamento")}
              onBlur={handleBlur("tipoPagamento")}
              onChange={handleChange("tipoPagamento")}
              IconComponent={KeyboardArrowDownIcon}
            >
              {!clicked.tipoPagamento && (
                <MenuItem value="" disabled>
                  <span style={{ color: '#CCCCCC' }}>Tipo di Pagamento</span>
                </MenuItem>
              )}
              <MenuItem value="tipo1">Tipo 1</MenuItem>
              <MenuItem value="tipo2">Tipo 2</MenuItem>
            </Select>
          </Box>
          {/* Column 3 */}
          <Box className="infoBlock__list-column">
            <Select
              className="formSelect"
              displayEmpty
              value={selectedValues.metodoPagamento}
              onFocus={handleFocus("metodoPagamento")}
              onBlur={handleBlur("metodoPagamento")}
              onChange={handleChange("metodoPagamento")}
              IconComponent={KeyboardArrowDownIcon}
            >
              {!clicked.metodoPagamento && (
                <MenuItem value="" disabled>
                  <span style={{ color: '#CCCCCC' }}>Metodo di Pagamento</span>
                </MenuItem>
              )}
              <MenuItem value="metodo1">Metodo 1</MenuItem>
              <MenuItem value="metodo2">Metodo 2</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              value={selectedValues.modalitaPagamento}
              onFocus={handleFocus("modalitaPagamento")}
              onBlur={handleBlur("modalitaPagamento")}
              onChange={handleChange("modalitaPagamento")}
              IconComponent={KeyboardArrowDownIcon}
            >
              {!clicked.modalitaPagamento && (
                <Menu value="" disabled>
                  <span style={{ color: '#CCCCCC' }}>Modalità di Pagamento</span>
                </Menu>
              )}
              <MenuItem value="modalita1">Modalità 1</MenuItem>
              <MenuItem value="modalita2">Modalità 2</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              value={selectedValues.canalePagamento}
              onFocus={handleFocus("canalePagamento")}
              onBlur={handleBlur("canalePagamento")}
              onChange={handleChange("canalePagamento")}
              IconComponent={KeyboardArrowDownIcon}
            >
              {!clicked.canalePagamento && (
                <MenuItem value="" disabled>
                  <span style={{ color: '#CCCCCC' }}>Canale di Pagamento</span>
                </MenuItem>
              )}
              <MenuItem value="canale1">Canale 1</MenuItem>
              <MenuItem value="canale2">Canale 2</MenuItem>
            </Select>
          </Box>
          {/* Column 4 */}
          <Box className="infoBlock__list-column">
            <TextField
              className="formTextField"
              multiline
              placeholder="Campo di testo"
              rows={6.5}
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>
      <Box className="infoBlock">
        <Typography className="infoBlock__title">
          <InfoIcon /> INFORMAZIONI PER LA FATTURAZIONE ELETTRONICA
        </Typography>
        {documentCards.map((card, index) => (
          <Box key={card.id} className="infoBlock__documentCard">
            <div className="infoBlock__documentCard-field">
              <Select
                className="document-select"
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
                value={card.orderType}
                onChange={(e) =>
                  handleFieldChange(card.id, "orderType", e.target.value)
                }
              >
                <MenuItem value=""  >Ordine di acquisto</MenuItem>
              </Select>
              <TextField
                className="document-field"
                placeholder="Id/Numero Documento"
                variant="outlined"
                value={card.documentId}
                onChange={(e) =>
                  handleFieldChange(card.id, "documentId", e.target.value)
                }
              />
              <TextField
                className="document-field"
                placeholder="Data"
                variant="outlined"
                value={card.date}
                onChange={(e) =>
                  handleFieldChange(card.id, "date", e.target.value)
                }
              />
              <TextField
                className="document-field"
                placeholder="Commessa"
                variant="outlined"
                value={card.commessa}
                onChange={(e) =>
                  handleFieldChange(card.id, "commessa", e.target.value)
                }
              />
              <TextField
                className="document-field"
                placeholder="CUP"
                variant="outlined"
                value={card.cup}
                onChange={(e) =>
                  handleFieldChange(card.id, "cup", e.target.value)
                }
              />
              <TextField
                className="document-field"
                placeholder="CIG"
                variant="outlined"
                value={card.cig}
                onChange={(e) =>
                  handleFieldChange(card.id, "cig", e.target.value)
                }
              />
              <IconButton
                className="deleteButton"
                onClick={() => removeDocumentCard(card.id)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </div>
            {index === documentCards.length - 1 && (
              <AddButton title="" onClick={addDocumentCard} />
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};
export default InvoiceFooter;
