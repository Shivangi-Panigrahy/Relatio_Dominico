import { Close, Description } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import "./AddDocument.scss";
import React from "react";
import { ReactComponent as DocIcon } from "../../assets/DocIcon.svg";
import { useNavigate } from "react-router-dom";

export default function Component({ open, onClose }) {
  const navigate = useNavigate();
  const salesDocuments = [
    "Fattura",
    "Fattura proforma",
    "Fattura accompagnatoria",
    "Fattura su doc. di trasporto",
    "Nota di credito",
    "Parcella",
    "Ricevuta",
  ];

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  const purchaseDocuments = ["Fattura", "Ritenuta d'acconto", "Ricevuta"];

  return (
    <Dialog
      open={open}
      onClose={() => onClose(false)}
      TransitionComponent={Transition}
      aria-labelledby="document-dialog-title"
      classes={{ paper: "document-modal__paper" }}
      className="docDialog"
    >
      <div className="docDialog__head">
        <div>
          <Typography
            variant="h6"
            component="h2"
            className="docDialog__head-title"
          >
            Crea un nuovo documento
          </Typography>
          <Typography variant="subtitle1" className="docDialog__head-subtitle">
            SELEZIONA IL DOCUMENTO CHE VUOI CREARE
          </Typography>
        </div>
        <IconButton
          aria-label="close"
          onClick={() => onClose(false)}
          className="docDialog__closeButton"
        >
          <Close />
        </IconButton>
      </div>
      <DialogContent className="docDialog__content">
        {/* Sales Column */}
        <Box className="docDialog__column">
          <Typography className="docDialog__column-header docDialog__column-header--sales">
            Vendita
          </Typography>
          <List className="docDialog__list">
            {salesDocuments.map((doc, index) => (
              <ListItem
                key={index}
                className="docDialog__list-item"
                disablePadding
                onClick={() => navigate("/invoice/fattura")}
              >
                <ListItemButton className="docDialog__list-item-button">
                  <ListItemIcon className="docDialog__list-item-icon">
                    <DocIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={doc}
                    primaryTypographyProps={{
                      className: "docDialog__list-item-text",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Purchase Column */}
        <Box className="docDialog__column">
          <Typography className="docDialog__column-header docDialog__column-header--purchases">
            Acquisti
          </Typography>
          <List className="docDialog__list">
            {purchaseDocuments.map((doc, index) => (
              <ListItem
                key={index}
                className="docDialog__list-item"
                disablePadding
              >
                <ListItemButton className="docDialog__list-item-button">
                  <ListItemIcon className="docDialog__list-item-icon">
                    <DocIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={doc}
                    primaryTypographyProps={{
                      className: "docDialog__list-item-text",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
