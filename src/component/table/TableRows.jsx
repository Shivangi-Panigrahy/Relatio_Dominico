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
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Avatar1 } from "../../assets/Avatar1.svg";
import { ReactComponent as BlackProfile } from "../../assets/blackProfile.svg";
import { ReactComponent as Files } from "../../assets/files.svg";
import { ReactComponent as SIIcon } from "../../assets/SIIcon.svg";
import { ReactComponent as ProductIcon } from "../../assets/ProductIcon.svg";

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
        backgroundColor: "#57C70033",
        color: "#57C700",
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
    case "Da contattare":
      return {
        backgroundColor: "#57C70033",
        color: "#57C700",
        className: "completatoStato",
      };
    case "Contattati":
      return {
        backgroundColor: "orange",
        color: "white",
        className: "in-attesaStato",
      };
    case "In trattativa":
      return {
        backgroundColor: "red",
        color: "#fff",
        className: "rifiutatoStato",
      };
    case "Attivo":
      return {
        backgroundColor: "#57C70033",
        color: "#57C700",
        className: "Attivo",
      };
    case "Saldato":
      return {
        backgroundColor: "#57C70033",
        color: "#57C700",
        className: "Attivo",
      };
    case "Pagata":
      return {
        backgroundColor: "#57C70033",
        color: "#57C700",
        className: "Attivo",
      };
    case "Immediata":
      return {
        backgroundColor: "#57C70033",
        color: "#57C700",
        className: "Immediata",
      };
    case "Approvata":
      return {
        backgroundColor: "#57C70033",
        color: "#57C700",
        className: "Approvata",
      };
    case "Approvata":
      return {
        backgroundColor: "#57C70033",
        color: "#57C700",
        className: "Approvata",
      };
    case "Si":
      return {
        backgroundColor: "#57C70033",
        color: "#57C700",
        className: "Approvata",
      };
      case "In corso":
        return {
          backgroundColor: "#57C70033",
          color: "#57C700",
          className: "Approvata",
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
  const {
    backgroundColor,
    color,
  } = getStatusColor(stato);

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
  const location = useLocation();

  const isSubLeadDocumenti = location.pathname === "/vendite/sub-lead/Documenti";
  const isFornitoriDocumenti = location.pathname === "/acquisti/fornitori/Documenti";
  const isSubcolaboratoryDocumenti = location.pathname === "/hr/sub-colaboratory/Documenti";

  const calculateTotal = (month) => {
    const total = data
      .reduce((sum, row) => sum + parseFloat(row[month] || 0), 0)
      .toFixed(2);
    return `${total}€`;
  };
  const dataRender = (navData) => {
    switch (navData) {
      
      case "attivita_progetti":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(
                  page * rowsPerPage,
                  // Limit to 2 rows for specified paths
                  (isSubLeadDocumenti || isFornitoriDocumenti || isSubcolaboratoryDocumenti)
                    ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                    : page * rowsPerPage + rowsPerPage
                )
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      navigate("/attivita/progetti/Task") 
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
                    <StyledTableCell>{row.nomeProgetto}</StyledTableCell>
                    <StyledTableCell>{row.categoria}</StyledTableCell>
                   
                  
                      <StyledTableCell>

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
                          {row.commitente}
                        </IconButton>


                      </StyledTableCell>
                       <StyledTableCell>{row.teamLeader}</StyledTableCell>
                       <StyledTableCell>{row.creatoIl}</StyledTableCell>
                       <StyledTableCell>{row.fine}</StyledTableCell>
                       <StyledTableCell>{row.gUtilizzate}</StyledTableCell>
                    <StyledTableCell>{row.gResidue}</StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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

      case "personale":
        return (
          <TableBody className={"customTableChanges"}>
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
                .slice(
                  page * rowsPerPage,
                  // Limit to 2 rows for specified paths
                  (isSubLeadDocumenti || isFornitoriDocumenti || isSubcolaboratoryDocumenti)
                    ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                    : page * rowsPerPage + rowsPerPage
                )
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      window.location.href.includes("/vendite/ordini") ||
                        window.location.href.includes("/vendite/sub-lead/Documenti")
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
                    {!isSubLeadDocumenti && (
                      <StyledTableCell>

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
                          {row.fornitori}
                        </IconButton>


                      </StyledTableCell>
                    )}
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
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
      case "allegati":
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
                    </StyledTableCell >
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
      case "repository":
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
                    </StyledTableCell >
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
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
                .slice(
                  page * rowsPerPage,
                  (isSubLeadDocumenti || isFornitoriDocumenti || isSubcolaboratoryDocumenti)
                    ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                    : page * rowsPerPage + rowsPerPage
                )
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() =>
                      window.location.href.includes("/vendite/budget") ||
                        window.location.href.includes("/vendite/sub-lead/Documenti")
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

                    {!isSubLeadDocumenti && !isFornitoriDocumenti && (
                      <StyledTableCell>

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
                          {row.fornitori}
                        </IconButton>


                      </StyledTableCell>
                    )}

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
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
                .slice(
                  page * rowsPerPage,
                  // Limit to 2 rows for specified paths
                  (isSubLeadDocumenti || isFornitoriDocumenti || isSubcolaboratoryDocumenti)
                    ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                    : page * rowsPerPage + rowsPerPage
                )

                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => window.location.href.includes("/vendite/preventivi") ||
                      window.location.href.includes("/vendite/sub-lead/Documenti") ? navigate("/vendite/preventivi/sub-preventivi") : navigate("/acquisti/preventivi/sub-preventivi")}
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
                    {!isSubLeadDocumenti && (
                      <StyledTableCell>
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
                          {row.cliente}
                        </IconButton>
                      </StyledTableCell>
                    )}
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
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
      case "AmministragioneImposte":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => navigate("/amministrazione/imposte/Reteizzazione")}
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
                    <StyledTableCell>{row.anno}</StyledTableCell>
                    <StyledTableCell>{row.scadenza}</StyledTableCell>
                    <StyledTableCell>{row.nomeImposta}</StyledTableCell>
                    <StyledTableCell>{row.tipologia}</StyledTableCell>
                    <StyledTableCell>
                      <SIIcon />
                    </StyledTableCell>
                    <StyledTableCell>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      {row.totale}
                    </StyledTableCell>
                    <StyledTableCell>{row.saldato}</StyledTableCell>
                    <StyledTableCell className="customDasaldareGreen">
                      {row.daSaldare}
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
      case "AmministragionDocumenti":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => navigate("/amministrazione/documenti/fattura")}
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
                    <StyledTableCell>{row.numero}</StyledTableCell>
                    <StyledTableCell>{row.del}</StyledTableCell>
                    <StyledTableCell>
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
                        {row.clienti}
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell>
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
                        {row.fornitori}
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>
                      {" "}
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>{row.creatoIl}</StyledTableCell>
                    <StyledTableCell>{row.totale}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      {row.saldata}
                    </StyledTableCell>
                    <StyledTableCell className="customDasaldareGreen" >
                      {row.dasaldare}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
      case "AmministragionAsset":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => navigate("/amministrazione/asset/rate")}
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
                    <StyledTableCell>{row.scadenza}</StyledTableCell>
                    <StyledTableCell>{row.asset}</StyledTableCell>
                    <StyledTableCell>{row.tipologia}</StyledTableCell>
                    <StyledTableCell>{row.obiettivo}</StyledTableCell>
                    <StyledTableCell>{row.frequenza}</StyledTableCell>
                    <StyledTableCell>{row.importoTotale}</StyledTableCell>
                    <StyledTableCell>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    {/* <StyledTableCell style={{backgroundColor:'#57C70033'}}>{row.DaSaldare}</StyledTableCell> */}
                    {/* <StyledTableCell
                    >
                      {row.Stato}
                    </StyledTableCell> */}
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
      case "AmministragionFlussi":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                  // onClick={() => navigate("/acquisti/fornitori/Contatti")}
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
                    <StyledTableCell>{row.documento}</StyledTableCell>
                    <StyledTableCell>{row.clienti}</StyledTableCell>
                    <StyledTableCell className="customDasaldareGreen">
                      {row.entrata}
                    </StyledTableCell>
                    <StyledTableCell className="customDasaldareRed">
                      {row.uscita}
                    </StyledTableCell>
                    <StyledTableCell>{row.utileContabile}</StyledTableCell>
                    <StyledTableCell>{row.tipo}</StyledTableCell>
                    <StyledTableCell>{row.modalita}</StyledTableCell>
                    <StyledTableCell>{row.tipoRisorsa}</StyledTableCell>
                    <StyledTableCell>{row.nomeRisorsa}</StyledTableCell>
                    {/* <StyledTableCell style={{backgroundColor:'#57C70033'}}>{row.DaSaldare}</StyledTableCell> */}
                    {/* <StyledTableCell
                >
                  {row.Stato}
                </StyledTableCell> */}
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

      case "bilancio":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow key={index} selected={isSelected(row.id)}>
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
                    <StyledTableCell>{row.anno}</StyledTableCell>
                    <StyledTableCell>{row.bilancio}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>{row.fatturato}</StyledTableCell>
                    {/* <StyledTableCell>{row.valore}</StyledTableCell> */}
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
      case "AmministragionReteizione":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow key={index} selected={isSelected(row.id)}>
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
                    <StyledTableCell>{row.creatoil}</StyledTableCell>
                    <StyledTableCell>{row.dataPagamento}</StyledTableCell>
                    <StyledTableCell>{row.rata}</StyledTableCell>
                    <StyledTableCell>{row.importo}</StyledTableCell>
                    <StyledTableCell className="customDasaldareRed" >
                      {row.daSaldare}
                    </StyledTableCell>
                    <StyledTableCell className="customDasaldareGreen" >
                      {row.saldato}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
                    <StyledTableCell><Avatar1 /></StyledTableCell>
                    <StyledTableCell><Avatar1 /></StyledTableCell>
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
        )

      case "listini":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                // .slice(
                //   page * rowsPerPage,
                //   // Limit to 2 rows for specified paths
                //   (isSubLeadDocumenti || isFornitoriDocumenti)
                //     ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                //     : page * rowsPerPage + rowsPerPage
                // )
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => navigate("/cataloghi/listini/Gruppi")}
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
                    <StyledTableCell>{row.nomeListino}</StyledTableCell>
                    <StyledTableCell>{row.gruppiAssociati}</StyledTableCell>
                    <StyledTableCell>{row.nProdotti}</StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      {row.creatoIl}
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      {row.a}
                    </StyledTableCell>
                    <StyledTableCell>{row.priorita}</StyledTableCell>
                    <StyledTableCell><Avatar1 /></StyledTableCell>
                    <StyledTableCell align="center">
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

      case "servizi":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => navigate("/cataloghi/servizi/Scheda")}
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
                    <StyledTableCell>{row.cod}</StyledTableCell>
                    <StyledTableCell>{row.nomeServizio}</StyledTableCell>
                    <StyledTableCell>{row.categoria}</StyledTableCell>
                    <StyledTableCell>{row.um}</StyledTableCell>
                    <StyledTableCell>{row.pzVendita}</StyledTableCell>
                    <StyledTableCell>{row.costoServizio}</StyledTableCell>
                    <StyledTableCell>{row.ricavoUnitario}</StyledTableCell>
                    <StyledTableCell>{row.acquistato}</StyledTableCell>
                    <StyledTableCell>{row.venduto}</StyledTableCell>
                    <StyledTableCell>{row.ricavoTotale}</StyledTableCell>
                    <StyledTableCell>
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
      case "prodotti":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => navigate("/cataloghi/prodotti/Scheda")}
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
                    <StyledTableCell>{row.cod}</StyledTableCell>
                    <StyledTableCell>{row.nomeProdotto}</StyledTableCell>
                    <StyledTableCell>{row.categoria}</StyledTableCell>
                    <StyledTableCell>{row.um}</StyledTableCell>
                    <StyledTableCell>{row.pzVendita}</StyledTableCell>
                    <StyledTableCell>{row.costoServizio}</StyledTableCell>
                    <StyledTableCell>{row.ricavoU}</StyledTableCell>
                    <StyledTableCell>{row.acquistato}</StyledTableCell>
                    <StyledTableCell>{row.venduto}</StyledTableCell>
                    <StyledTableCell>{row.ricavoTot}</StyledTableCell>
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
      case "product":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                // .slice(
                //   page * rowsPerPage,
                //   // Limit to 2 rows for specified paths
                //   (isSubLeadDocumenti || isFornitoriDocumenti)
                //     ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                //     : page * rowsPerPage + rowsPerPage
                // )
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                  // onClick={() => navigate("/cataloghi/listini/Gruppi")}
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
                    <StyledTableCell>
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
                    </StyledTableCell>
                    <StyledTableCell>{row.code}</StyledTableCell>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.category}</StyledTableCell>
                    <StyledTableCell>{row.unit}</StyledTableCell>
                    <StyledTableCell>{row.quantity}</StyledTableCell>
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
      case "distinta":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                // .slice(
                //   page * rowsPerPage,
                //   // Limit to 2 rows for specified paths
                //   (isSubLeadDocumenti || isFornitoriDocumenti)
                //     ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                //     : page * rowsPerPage + rowsPerPage
                // )
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                  // onClick={() => navigate("/cataloghi/listini/Gruppi")}
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
                    <StyledTableCell>
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
                    </StyledTableCell>
                    <StyledTableCell>{row.cod}</StyledTableCell>
                    <StyledTableCell>{row.nome_del_prodotto}</StyledTableCell>
                    <StyledTableCell>{row.categoria}</StyledTableCell>
                    <StyledTableCell>{row.um}</StyledTableCell>
                    <StyledTableCell>{row.qta}</StyledTableCell>
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
      case "lis_prodotti":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                // .slice(
                //   page * rowsPerPage,
                //   // Limit to 2 rows for specified paths
                //   (isSubLeadDocumenti || isFornitoriDocumenti)
                //     ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                //     : page * rowsPerPage + rowsPerPage
                // )
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                  // onClick={() => navigate("/cataloghi/listini/Gruppi")}
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
                    <StyledTableCell>
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
                    </StyledTableCell>
                    <StyledTableCell>{row.cod}</StyledTableCell>
                    <StyledTableCell>{row.nome_del_prodotto}</StyledTableCell>
                    <StyledTableCell>{row.categoria}</StyledTableCell>
                    <StyledTableCell>{row.um}</StyledTableCell>
                    <StyledTableCell>{row.qta}</StyledTableCell>
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
      case "conf_prodotti":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                // .slice(
                //   page * rowsPerPage,
                //   // Limit to 2 rows for specified paths
                //   (isSubLeadDocumenti || isFornitoriDocumenti)
                //     ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                //     : page * rowsPerPage + rowsPerPage
                // )
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                  // onClick={() => navigate("/cataloghi/listini/Gruppi")}
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
                    <StyledTableCell>
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
                    </StyledTableCell>
                    <StyledTableCell>{row.cod}</StyledTableCell>
                    <StyledTableCell>{row.nome_del_prodotto}</StyledTableCell>
                    <StyledTableCell>{row.categoria}</StyledTableCell>
                    <StyledTableCell>{row.um}</StyledTableCell>
                    <StyledTableCell>{row.qta}</StyledTableCell>
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
      case "prodotti":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                // .slice(
                //   page * rowsPerPage,
                //   // Limit to 2 rows for specified paths
                //   (isSubLeadDocumenti || isFornitoriDocumenti)
                //     ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                //     : page * rowsPerPage + rowsPerPage
                // )
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                  // onClick={() => navigate("/cataloghi/listini/Gruppi")}
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
                    <StyledTableCell>
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
                    </StyledTableCell>
                    <StyledTableCell>{row.cod}</StyledTableCell>
                    <StyledTableCell>{row.nome_del_prodotto}</StyledTableCell>
                    <StyledTableCell>{row.categoria}</StyledTableCell>
                    <StyledTableCell>{row.um}</StyledTableCell>
                    <StyledTableCell>{row.qta}</StyledTableCell>
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
      case "Giacenze":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                // .slice(
                //   page * rowsPerPage,
                //   // Limit to 2 rows for specified paths
                //   (isSubLeadDocumenti || isFornitoriDocumenti)
                //     ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                //     : page * rowsPerPage + rowsPerPage
                // )
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                  // onClick={() => navigate("/cataloghi/listini/Gruppi")}
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
                    <StyledTableCell>{row.cod}</StyledTableCell>
                    <StyledTableCell>{row.lotto}</StyledTableCell>
                    <StyledTableCell>{row.scadenza}</StyledTableCell>
                    <StyledTableCell>{row.prodotto}</StyledTableCell>
                    <StyledTableCell>{row.marcaSerie}</StyledTableCell>
                    <StyledTableCell>{row.stabilimento}</StyledTableCell>
                    <StyledTableCell>{row.um}</StyledTableCell>
                    <StyledTableCell>{row.pzUnitario}</StyledTableCell>
                    <StyledTableCell>{row.qta}</StyledTableCell>
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
      case "Gruppi":
        return (
          <TableBody>
            {data?.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                // .slice(
                //   page * rowsPerPage,
                //   // Limit to 2 rows for specified paths
                //   (isSubLeadDocumenti || isFornitoriDocumenti)
                //     ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                //     : page * rowsPerPage + rowsPerPage
                // )
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                  // onClick={() => navigate("/cataloghi/listini/Gruppi")}
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
                    <StyledTableCell>{row.creatoil}</StyledTableCell>
                    <StyledTableCell>{row.nomedelgruppo}</StyledTableCell>
                    <StyledTableCell align="left">
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell>{row.validoda}</StyledTableCell>
                    <StyledTableCell>{row.validoA}</StyledTableCell>
                    <StyledTableCell>{row.um}</StyledTableCell>
                    {/* <StyledTableCell align="left">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
                    </StyledTableCell> */}
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
                    onClick={() => navigate("/hr/sub-colaboratory/Contatti")}
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
                    onClick={() => navigate("/hr/ferie-e-permisse/evento")}
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
                    <StyledTableCell>{row.creatoil}</StyledTableCell>
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
                .slice(
                  page * rowsPerPage,
                  // Limit to 2 rows for specified paths
                  (isSubcolaboratoryDocumenti)
                    ? Math.min(page * rowsPerPage + 2, page * rowsPerPage + rowsPerPage)
                    : page * rowsPerPage + rowsPerPage
                )
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                    selected={isSelected(row.id)}
                    onClick={() => navigate("/hr/buste-page/busta")}
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
                    <StyledTableCell>{row.creatoil}</StyledTableCell>
                    <StyledTableCell>{row.collaboratore}</StyledTableCell>
                    <StyledTableCell>{row.totale}</StyledTableCell>
                    <StyledTableCell className="customDasaldareRed">
                      {row.daSaldare}
                    </StyledTableCell>
                    <StyledTableCell className="customDasaldareGreen">
                      {row.saldo}
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <Avatar1 />
                    </StyledTableCell>
                    {/* <StyledTableCell>{row.modDa}</StyledTableCell> */}
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
                    onClick={() => navigate("/hr/candidati/candidato/Contatti")}
                  // onClick={() =>
                  //   window.location.href.includes("/hr/colaboratory")
                  //     ? navigate("/hr/colaboratory/sub-colaboratory/Contatti")
                  //     : navigate("/hr/candidati")
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
                    <StyledTableCell>{row.candidato}</StyledTableCell>
                    <StyledTableCell>{row.ruolo}</StyledTableCell>
                    <StyledTableCell>{row.livello}</StyledTableCell>
                    <StyledTableCell>{row.trattamento_individuato}</StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusChip
                        stato={
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        }
                        className={getStatusColor(
                          searchFilters?.stato
                            ? row.stato
                            : currentStatuses[index]
                        ).className}
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
                    <StyledTableCell>{row.creatoil}</StyledTableCell>
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
                    <StyledTableCell>{row.creatoIl}</StyledTableCell>
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
                    <StyledTableCell>{row.creatoIl}</StyledTableCell>
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
                          {row.clienti}
                        </IconButton>


                      </StyledTableCell>
                    )}
                    {form === "form2" || form === "form1" ? (
                      ""
                    ) : (
                      <StyledTableCell>

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
                          {row.fornitori}
                        </IconButton>


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
