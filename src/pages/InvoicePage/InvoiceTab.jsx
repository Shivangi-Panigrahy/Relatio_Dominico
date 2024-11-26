import React from "react";
import {
  CheckCircle,
  Transform,
  ContentCopy,
  Send,
  Comment,
  Person,
  Edit,
  PictureAsPdf,
  Code,
  Info,
  Add,
} from "@mui/icons-material";
import { Avatar, IconButton, Stack, Typography, Button } from "@mui/material";
import "./InvoicePage.scss";
import { ReactComponent as InfoIcon } from "../../assets/ErrorOutlineOutlined.svg";
import { AddButton } from "../../component/button/AddButton";
import { ReactComponent as Avatar1 } from "../../assets/Avatar1.svg";
import { ReactComponent as Commentsicon } from "../../assets/Commentsicon.svg";
import { ReactComponent as InviteIcon } from "../../assets/InviteIcon.svg";
import { ReactComponent as Duplica } from "../../assets/Duplica.svg";
import { ReactComponent as Converti } from "../../assets/Converti.svg";
import { ReactComponent as Conferma } from "../../assets/Commentsicon.svg";
import { ReactComponent as Delete } from "../../assets/Delete.svg";
import { ReactComponent as Scarica } from "../../assets/Scarica.svg";
import { ReactComponent as Xml } from "../../assets/Xml.svg";

const toolbarItems = [
  { icon: Delete, title: "Elimina", caption: "Elimina" },
  { icon: Conferma, title: "Conferma", caption: "Conferma" },
  { icon: Converti, title: "Converti", caption: "Converti" },
  { icon: Duplica, title: "Duplica", caption: "Duplica" },
  { icon: InviteIcon, title: "Invia", caption: "Invia" },
  { icon: Commentsicon, title: "Commenta", caption: "Commenta" },
  { icon: Avatar1, title: "Creato da", caption: "Creato da", isUser: true },
  {
    icon: Avatar1,
    title: "Modifica da",
    caption: "Modifica da",
    isUser: true,
  },
  { icon: Scarica, title: "Scarica PDF", caption: "Scarica PDF" },
  { icon: Xml, title: "XML", caption: "XML" },
];

export default function InvoiceTab() {
  return (
    <div className="toolbarContainer">
      <div className="toolbarContainer__approvatoBlock">
        <div className="toolbarContainer__approvatoBlock__Box">
          <h4 className="toolbarContainer__approvatoBlock__text">Approvato</h4>
        </div>
      </div>
      <div className="toolbarContainer__list">
        {toolbarItems.map((item, index) => (
          <div key={index} className="toolbarContainer__items">
            {item.isUser ? (
              <div className="user-info">
                <IconButton className="user-button">
                  <Avatar sx={{ width: 24, height: 24 }}>
                    <item.icon />
                  </Avatar>
                  <Typography variant="caption">{item.caption}</Typography>
                </IconButton>
              </div>
            ) : (
              <IconButton className="tool-button" title={item.title}>
                <item.icon />
                <Typography variant="caption">{item.caption}</Typography>
              </IconButton>
            )}
          </div>
        ))}
      </div>

      <div className="toolbarContainer__infotext">
        <InfoIcon fontSize="small" className="info-icon" />
        <div>
          <h6>ULTIMA MODIFICA</h6>
          <p>30/10/2024 18:37</p>
        </div>
      </div>
      <div className="toolbarContainer__btn">
        <AddButton title="Crea documento" />
      </div>
    </div>
  );
}
