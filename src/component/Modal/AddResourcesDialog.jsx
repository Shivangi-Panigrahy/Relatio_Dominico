import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
} from "@mui/material";
import "./AddResourcesDialog.scss";
import CustomCheckbox from "../table/Checkbox";
const AddResourcesDialog = ({ handleClose }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const users = Array(10).fill({
    name: "Matteo Vellone",
    avatar: "https://via.placeholder.com/40",
  });

  const handleToggle = (index) => {
    setSelectedUsers((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Dialog className="AggiungiRisorseModel" open>
      <h2 className="AggiungiRisorseModel__title">Aggiungi risorse</h2>
      <DialogContent>
        <List>
          {users.map((user, index) => (
            <ListItem key={index}>
              {/* <Checkbox
                onChange={() => handleToggle(index)}
                checked={selectedUsers.includes(index)}
              /> */}
              <CustomCheckbox
                className="customChechbox"
                color="primary"
                checked={selectedUsers.includes(index)}
                onChange={() => handleToggle(index)}
                onClick={(event) => event.stopPropagation()}
                inputProps={{ "aria-labelledby": index }}
              />
              <ListItemAvatar>
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  height={28}
                  width={28}
                />
              </ListItemAvatar>
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions className="AggiungiRisorseModel__footer">
        <Button className="greenButton " variant="contained" color="success">
          Aggiungi
        </Button>
        <Button
          className="cancelButton"
          variant="outlined"
          color="error"
          onClick={handleClose}
        >
          Cancella
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddResourcesDialog;
