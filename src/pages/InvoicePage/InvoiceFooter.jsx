import React, { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Typography,
  Button,
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
          <Box className="infoBlock__list-column">
            <Select
              className="formSelect"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="" selected >Ritenuta</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="">Bollo</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="">Rivalza</MenuItem>
            </Select>
          </Box>
          <Box className="infoBlock__list-column">
            <Select
              className="formSelect"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="">Condizioni di pagamento</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="">Esigibilità IVA</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="">Tipo di pagamento</MenuItem>
            </Select>
          </Box>
          <Box className="infoBlock__list-column">
            <Select
              className="formSelect"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="">Metodo di pagamento</MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="">Modalità di pagamento </MenuItem>
            </Select>
            <Select
              className="formSelect"
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="">Canale di pagamento</MenuItem>
            </Select>
          </Box>
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
              <AddButton title=""  onClick={addDocumentCard}/>
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default InvoiceFooter;
