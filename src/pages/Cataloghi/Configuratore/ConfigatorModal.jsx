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
import { ReactComponent as Right } from "../../../assets/right.svg";
import "./ConfigatorModal.scss";

export default function ConfiguraModal({open,close}) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  const [selectedTabs, setSelectedTabs] = useState(0);

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

  return (
    <div>
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

            <Box className="tabBox">
              {/* Tabs */}
              <CustomTabs
                value={selectedTabs} // Ensure controlled state for Tabs
                onChange={(event, newValue) => setSelectedTabs(newValue)}
              >
                <CustomTab
                  label="Demo"
                  icon={<Right />}
                  //   onClick={() => handleTabClick(index, tab.label)}
                />
                <CustomTab
                  label="Demo"
                  icon={<Right />}
                  //   onClick={() => handleTabClick(index, tab.label)}
                />
              </CustomTabs>
            </Box>
            {/* <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              style={{ marginBottom: "20px" }}
            >
              <Tab label="Dimensioni" />
              <Tab label="Colori" />
              <Tab label="Componenti" />
              <Tab label="Accessori" />
            </Tabs> */}
            {/* Table */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ width: "60px" }}>
                      <Checkbox />
                    </TableCell>
                    <TableCell style={{ width: "160px" }}>
                      Codice prodotto
                    </TableCell>
                    <TableCell>Prodotto</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>U.M.</TableCell>
                    <TableCell style={{ width: "150px" }}>Q.ta</TableCell>
                    <TableCell>Azioni</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4].map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>CD490823</TableCell>
                      <TableCell>Zafferano</TableCell>
                      <TableCell>Prodotto finito</TableCell>
                      <TableCell>Kg</TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          defaultValue="23094"
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
            </TableContainer>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
