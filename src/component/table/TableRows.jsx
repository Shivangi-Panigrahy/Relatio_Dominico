import React from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  Box,
  IconButton,
  Avatar,
  styled,
} from "@mui/material";
import CustomCheckbox from "./Checkbox";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MenuWithOptions from "../filter/MenuWithOptions";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Avatar1 } from "../../assets/Avatar1.svg";
import { ReactComponent as BlackProfile } from "../../assets/blackProfile.svg";
import { ReactComponent as Files } from "../../assets/files.svg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: "12px 16px",
  fontSize: "0.875rem",
  borderBottom: "1px solid #e0e0e0",
  color: theme.palette.text.secondary,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#fafafa",
  },
  cursor: "pointer",
}));

// const getStatusColor = (stato) => {
//   console.log(stato,"statogetcolor")
//   switch (stato) {
//     case "Approvato":
//       return { backgroundColor: "#E3F2FD", color: "#2196F3" };
//     case "Completato":
//       return { backgroundColor: "#E8F5E9", color: "#4CAF50" };
//     case "In Attesa":
//       return { backgroundColor: "#FFF8E1", color: "#FFB300" };
//     case "Rifiutato":
//       return { backgroundColor: "#FFEBEE", color: "#F44336" };
//     default:
//       return { backgroundColor: "#F5F5F5", color: "#9E9E9E" };
//   }

// };
const getStatusColor = (stato) => {
  switch (stato) {
    case "Approvato":
      return {
        backgroundColor: "#E3F2FD",
        color: "#2196F3",
        className: "approvatoStato",
      };
    case "Completato":
      return {
        backgroundColor: "#57C70033",
        color: "#57C700",
        className: "completatoStato",
      };
    case "In Attesa":
      return {
        backgroundColor: "#FFF8E1",
        color: "#FFB300",
        className: "in-attesaStato",
      };
    case "Rifiutato":
      return {
        backgroundColor: "#FFEBEE",
        color: "#F44336",
        className: "rifiutatoStato",
      };
    default:
      return {
        backgroundColor: "#F5F5F5",
        color: "#9E9E9E",
        className: "defaultStato",
      };
  }
};

const StatusChip = styled(Box)(({ stato }) => {
  const { backgroundColor, color } = getStatusColor(stato);

  return {
    padding: "2px 8px",
    borderRadius: "6px",
    fontSize: "12px",
    lineHeight: "20px",
    display: "inline-block",
    fontWeight: "bold",
    backgroundColor,
    color,
    transition: "all 0.3s ease",
  };
});

const TableRows = ({
  data,
  page,
  rowsPerPage,
  isSelected,
  handleRowClick,
  handleStatusClick,
  currentStatuses,
  searchFilters,
  option,
  form,
  navData,
}) => {
  const navigate = useNavigate();
  const calculateTotal = (month) => {
    const total = data
      .reduce((sum, row) => sum + parseFloat(row[month] || 0), 0)
      .toFixed(2);
    return `${total}€`;
  };
  const dataRender = (navData) => {
    switch (navData) {
      case "personale":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow key={index} selected={isSelected(row.id)}>
                    <StyledTableCell>{row.nome}</StyledTableCell>
                    <StyledTableCell>{row.gennaio}</StyledTableCell>
                    <StyledTableCell>{row.febbraio}</StyledTableCell>
                    <StyledTableCell>{row.marzo}</StyledTableCell>
                    <StyledTableCell>{row.aprile}</StyledTableCell>
                    <StyledTableCell>{row.maggio}</StyledTableCell>
                    <StyledTableCell>{row.giugno}</StyledTableCell>
                    <StyledTableCell>{row.luglio}</StyledTableCell>
                    <StyledTableCell>{row.agosto}</StyledTableCell>
                    <StyledTableCell>{row.settembre}</StyledTableCell>
                    <StyledTableCell>{row.ottobre}</StyledTableCell>
                    <StyledTableCell>{row.novembre}</StyledTableCell>
                    <StyledTableCell>{row.dicembre}</StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
            <StyledTableRow style={{ backgroundColor: "red", color: "white" }}>
              <StyledTableCell style={{ fontWeight: "bold" }}>
                Totale
              </StyledTableCell>
              <StyledTableCell>{calculateTotal("gennaio")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("febbraio")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("marzo")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("aprile")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("maggio")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("giugno")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("luglio")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("agosto")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("settembre")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("ottobre")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("novembre")}</StyledTableCell>
              <StyledTableCell>{calculateTotal("dicembre")}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        );
      case "ordini":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      window.location.href.includes("/vendite/ordini") ||
                      window.location.href.includes(
                        "/vendite/sub-lead/Documenti"
                      )
                        ? navigate("/vendite/ordini/sub-ordini")
                        : navigate("/acquisti/ordini/sub-ordini")
                    }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.doc}</StyledTableCell>
                    <StyledTableCell>{row.creatoIl}</StyledTableCell>
                    <StyledTableCell>{row.numero}</StyledTableCell>
                    <StyledTableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                        whiteSpace={"nowrap"}
                      >
                        <IconButton
                          size="small"
                          sx={{
                            mr: 1,
                            color: "action.active",
                            fontSize: "15px",
                            "&:hover": { backgroundColor: "transparent" },
                          }}
                        >
                          <VisibilityOutlinedIcon
                            sx={{ "&:hover": { color: "" } }}
                            fontSize="small"
                          />
                        </IconButton>
                        {row.fornitori}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>{row.dataModifica}</StyledTableCell>
                    <StyledTableCell>{row.valore}</StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={
                          getStatusColor(
                            searchFilters?.stato
                              ? row.stato
                              : currentStatuses[index]
                          ).className
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleStatusClick(index);
                          // classActice(row.stato);
                        }}
                      >
                        {searchFilters?.stato
                          ? row.stato
                          : currentStatuses[index]}
                      </StatusChip>
                    </StyledTableCell>

                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case ("allegati", "eventoAllegati"):
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}

                    // onClick={() => navigate("/acquisti/sub-ordini")}
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Files />
                    </StyledTableCell>
                    <StyledTableCell>{row.nome}</StyledTableCell>
                    <StyledTableCell>{row.categoria}</StyledTableCell>
                    <StyledTableCell>{row.tipologia}</StyledTableCell>
                    <StyledTableCell>{row.peso}</StyledTableCell>
                    <StyledTableCell>{row.creatoIl}</StyledTableCell>
                    <StyledTableCell>{row.ultimaMod}</StyledTableCell>
                    {/* <StyledTableCell>{row.caricatoDa}</StyledTableCell> */}

                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>

                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case "leed":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => navigate("/vendite/sub-lead/Contatti")}
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.creatoIl}</StyledTableCell>
                    <StyledTableCell>
                      <div>
                        <span className="bulltePoint"></span>
                        {row.ragioneSociale}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={
                          getStatusColor(
                            searchFilters?.stato
                              ? row.stato
                              : currentStatuses[index]
                          ).className
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleStatusClick(index);
                          // classActice(row.stato);
                        }}
                      >
                        {searchFilters?.stato
                          ? row.stato
                          : currentStatuses[index]}
                      </StatusChip>
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case "fornitori":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => navigate("/acquisti/fornitori/Contatti")}
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.Creato_il}</StyledTableCell>
                    <StyledTableCell>
                      <div>
                        <span className="bulltePoint"></span>
                        {row.Ragione_sociale}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell>{row.P_IVA}</StyledTableCell>
                    <StyledTableCell>{row.Tipo}</StyledTableCell>
                    <StyledTableCell>{row.Gruppo}</StyledTableCell>
                    <StyledTableCell>{row.Regione}</StyledTableCell>
                    <StyledTableCell>{row.Stato_name}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <BlackProfile />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={
                          getStatusColor(
                            searchFilters?.stato
                              ? row.stato
                              : currentStatuses[index]
                          ).className
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleStatusClick(index);
                          // classActice(row.stato);
                        }}
                      >
                        {searchFilters?.stato
                          ? row.stato
                          : currentStatuses[index]}
                      </StatusChip>
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case "budget":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      window.location.href.includes("/vendite/budget") ||
                      window.location.href.includes(
                        "/vendite/sub-lead/Documenti"
                      )
                        ? navigate("/vendite/budget/sub-budget")
                        : navigate("/acquisti/budget/sub-budget")
                    }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.doc}</StyledTableCell>
                    <StyledTableCell>{row.creatoil}</StyledTableCell>
                    <StyledTableCell>{row.numero}</StyledTableCell>
                    <StyledTableCell>{row.titolo}</StyledTableCell>
                    <StyledTableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                        whiteSpace={"nowrap"}
                      >
                        <IconButton
                          size="small"
                          sx={{
                            mr: 1,
                            color: "action.active",
                            fontSize: "15px",
                            "&:hover": { backgroundColor: "transparent" },
                          }}
                        >
                          <VisibilityOutlinedIcon
                            sx={{ "&:hover": { color: "#57C700" } }}
                            fontSize="small"
                          />
                        </IconButton>
                        {row.fornitori}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>{row.dataModifica}</StyledTableCell>
                    <StyledTableCell>{row.valore}</StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={
                          getStatusColor(
                            searchFilters?.stato
                              ? row.stato
                              : currentStatuses[index]
                          ).className
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleStatusClick(index);
                          // classActice(row.stato);
                        }}
                      >
                        {searchFilters?.stato
                          ? row.stato
                          : currentStatuses[index]}
                      </StatusChip>
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case "preventivi":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      window.location.href.includes("/vendite/preventivi") ||
                      window.location.href.includes(
                        "/vendite/sub-lead/Documenti"
                      )
                        ? navigate("/vendite/preventivi/sub-preventivi")
                        : navigate("/acquisti/preventivi/sub-preventivi")
                    }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.doc}</StyledTableCell>
                    <StyledTableCell>{row.creatoil}</StyledTableCell>
                    <StyledTableCell>{row.numero}</StyledTableCell>
                    <StyledTableCell>{row.titolo}</StyledTableCell>
                    <StyledTableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                        whiteSpace={"nowrap"}
                      >
                        <IconButton
                          size="small"
                          sx={{
                            mr: 1,
                            color: "action.active",
                            fontSize: "15px",
                            "&:hover": { backgroundColor: "transparent" },
                          }}
                        >
                          <VisibilityOutlinedIcon
                            sx={{ "&:hover": { color: "#57C700" } }}
                            fontSize="small"
                          />
                        </IconButton>
                        {row.cliente}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>{row.dataModifica}</StyledTableCell>
                    <StyledTableCell>{row.valore}</StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={
                          getStatusColor(
                            searchFilters?.stato
                              ? row.stato
                              : currentStatuses[index]
                          ).className
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleStatusClick(index);
                          // classActice(row.stato);
                        }}
                      >
                        {searchFilters?.stato
                          ? row.stato
                          : currentStatuses[index]}
                      </StatusChip>
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case "colaboratory":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      window.location.href.includes("/hr/colaboratory")
                        ? navigate("/hr/colaboratory/sub-colaboratory")
                        : navigate("/acquisti/ordini/sub-ordini")
                    }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.colaboratore}</StyledTableCell>
                    <StyledTableCell>{row.ruolo}</StyledTableCell>
                    <StyledTableCell>{row.livello}</StyledTableCell>
                    <StyledTableCell>{row.trattamento}</StyledTableCell>
                    <StyledTableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                        whiteSpace={"nowrap"}
                      >
                        <IconButton
                          className="colaboratory-tag"
                          size="small"
                          sx={{
                            mr: 1,
                            color: "action.active",
                            fontSize: "15px",
                            "&:hover": { backgroundColor: "transparent" },
                          }}
                        >
                          {/* <VisibilityOutlinedIcon
                            sx={{ "&:hover": { color: "" } }}
                            fontSize="small"
                          /> */}
                          si
                        </IconButton>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell>{row.inixio}</StyledTableCell>
                    <StyledTableCell>{row.fine}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case "turni":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    // onClick={() =>
                    //   window.location.href.includes("/hr/colaboratory")
                    //     ? navigate("/hr/colaboratory/sub-colaboratory")
                    //     : navigate("/acquisti/ordini/sub-ordini")
                    // }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.data}</StyledTableCell>
                    <StyledTableCell>{row.turno}</StyledTableCell>
                    <StyledTableCell>{row.ore}</StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case "progetti":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    // onClick={() =>
                    //   window.location.href.includes("/hr/colaboratory")
                    //     ? navigate("/hr/colaboratory/sub-colaboratory")
                    //     : navigate("/acquisti/ordini/sub-ordini")
                    // }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.nomeProgetto}</StyledTableCell>
                    <StyledTableCell>{row.totaleOreLavorate}</StyledTableCell>
                    <StyledTableCell>{row.dal}</StyledTableCell>
                    <StyledTableCell>{row.al}</StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case "feriePermisse":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      window.location.href.includes("/hr/ferie-e-permisse")
                        ? navigate("/hr/ferie-e-permisse/evento")
                        : navigate("/hr/ferie-e-permisse")
                    }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.colaboratore}</StyledTableCell>
                    <StyledTableCell>{row.evento}</StyledTableCell>
                    <StyledTableCell>{row.da}</StyledTableCell>
                    <StyledTableCell>{row.a}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>{row.modDa}</StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={
                          getStatusColor(
                            searchFilters?.stato
                              ? row.stato
                              : currentStatuses[index]
                          ).className
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleStatusClick(index);
                          // classActice(row.stato);
                        }}
                      >
                        {searchFilters?.stato
                          ? row.stato
                          : currentStatuses[index]}
                      </StatusChip>
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );

      case "busta":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      window.location.href.includes("/hr/buste-page")
                        ? navigate("/hr/buste-page/busta")
                        : navigate("/hr/buste-page")
                    }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.numero}</StyledTableCell>
                    <StyledTableCell>{row.mese}</StyledTableCell>
                    <StyledTableCell>{row.data}</StyledTableCell>
                    <StyledTableCell>{row.colaboratore}</StyledTableCell>
                    <StyledTableCell>{row.totale}</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#FFEBEE" }}>
                      {row.daSaladare}
                    </StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#57C70033" }}>
                      {row.saldato}
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>{row.modDa}</StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      case "candidati":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      window.location.href.includes("/hr/candidati")
                        ? navigate("/hr/candidati/candidato")
                        : navigate("/hr/candidati")
                    }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.canditato}</StyledTableCell>
                    <StyledTableCell>{row.ruolo}</StyledTableCell>
                    <StyledTableCell>{row.livello}</StyledTableCell>
                    <StyledTableCell>{row.trattIndividual}</StyledTableCell>
                    <StyledTableCell>{row.disponibile}</StyledTableCell>
                    <StyledTableCell>{row.ultimoColloquio}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ textAlign: "center" }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
      default:
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    // onClick={() =>
                    //   window.location.href.includes("/vendite/preventivi")
                    //     ? navigate("/vendite/preventivi/sub-preventivi")
                    //     : navigate("/acquisti/preventivi/sub-preventivi")
                    // }
                  >
                    <StyledTableCell align="center">
                      <CustomCheckbox
                        className="customChechbox"
                        color="primary"
                        checked={isSelected(row.id)}
                        onChange={(event) => handleRowClick(event, row.id)}
                        onClick={(event) => event.stopPropagation()}
                        inputProps={{ "aria-labelledby": row.id }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{row.docType}</StyledTableCell>
                    <StyledTableCell>{row.numero}</StyledTableCell>
                    <StyledTableCell>{row.creatoIl}</StyledTableCell>
                    {form === "form2" || form === "form1" ? (
                      ""
                    ) : (
                      <StyledTableCell>{row.titolo}</StyledTableCell>
                    )}
                    {form === "form1" ? (
                      ""
                    ) : (
                      <StyledTableCell>
                        <Box
                          display="flex"
                          alignItems="center"
                          whiteSpace={"nowrap"}
                        >
                          <IconButton
                            size="small"
                            sx={{
                              mr: 1,
                              color: "action.active",
                              fontSize: "15px",
                              "&:hover": { backgroundColor: "transparent" },
                            }}
                          >
                            <VisibilityOutlinedIcon
                              sx={{ "&:hover": { color: "#57C700" } }}
                              fontSize="small"
                            />
                          </IconButton>
                          {row.clienti}
                        </Box>
                      </StyledTableCell>
                    )}
                    {form === "form2" || form === "form1" ? (
                      ""
                    ) : (
                      <StyledTableCell>
                        <Box
                          display="flex"
                          alignItems="center"
                          whiteSpace={"nowrap"}
                        >
                          <IconButton
                            size="small"
                            sx={{
                              mr: 1,
                              color: "action.active",
                              fontSize: "15px",
                              "&:hover": { backgroundColor: "transparent" },
                            }}
                          >
                            <VisibilityOutlinedIcon
                              sx={{ "&:hover": { color: "#57C700" } }}
                              fontSize="small"
                            />
                          </IconButton>
                          {row.fornitori}
                        </Box>
                      </StyledTableCell>
                    )}
                    <StyledTableCell>{row.data}</StyledTableCell>
                    <StyledTableCell>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>{row.valore}</StyledTableCell>
                    <StyledTableCell>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        sx={{ cursor: "pointer" }}
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleStatusClick(index);
                        }}
                      >
                        {searchFilters?.stato
                          ? row.stato
                          : currentStatuses[index]}
                      </StatusChip>
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MenuWithOptions options={option} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">
                  Data not found
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        );
    }
  };

  return (
    <>
      {dataRender(navData)} {/* Calling the function */}
    </>
  );
};

export default TableRows;
