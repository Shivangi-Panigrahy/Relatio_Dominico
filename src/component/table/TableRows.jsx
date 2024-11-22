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
import CustomCheckbox from "./Checkbox"; // Assuming CustomCheckbox is a separate component
// import StyledTableCell from './StyledTableCell'; // Assuming StyledTableCell is a separate component
// import StyledTableRow from './StyledTableRow'; // Assuming StyledTableRow is a separate component
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MenuWithOptions from "../filter/MenuWithOptions";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Avatar1 } from "../../assets/Avatar1.svg";

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

const getStatusColor = (stato) => {
  switch (stato) {
    case "Approvato":
      return { backgroundColor: "#E3F2FD", color: "#2196F3" }; // Blue
    case "Completato":
      return { backgroundColor: "#E8F5E9", color: "#4CAF50" }; // Green
    case "In Attesa":
      return { backgroundColor: "#FFF8E1", color: "#FFB300" }; // Yellow
    case "Rifiutato":
      return { backgroundColor: "#FFEBEE", color: "#F44336" }; // Red
    default:
      return { backgroundColor: "#F5F5F5", color: "#9E9E9E" }; // Default Gray
  }
};

const StatusChip = styled(Box)(({ theme, stato }) => ({
  padding: "2px 8px",
  borderRadius: "6px",
  fontSize: "12px",
  lineHeight: "20px",
  display: "inline-block",
  fontWeight: "bold",
  ...getStatusColor(stato), // Apply the colors based on the status
}));

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
}) => {
  const navigate = useNavigate();
  return (
    <TableBody>
      {data?.length > 0 ? (
        data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => (
            <StyledTableRow
              key={index}
              selected={isSelected(row.id)}
              onClick={
                () => navigate("/form2")
                // window.location.href.includes("/form")
                //                   ? navigate("/form2")
                //                   : navigate("/form")
              }
            >
              <StyledTableCell align="center">
                <CustomCheckbox
                  className="customChechbox"
                  color="primary"
                  checked={isSelected(row.id)}
                  onChange={(event) => handleRowClick(event, row.id)}
                  onClick={(event) => event.stopPropagation()} // Prevent row navigation
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
                  <Box display="flex" alignItems="center" whiteSpace={"nowrap"}>
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
              {/* <StyledTableCell>{row.creatoIl}</StyledTableCell> */}
              {form === "form2" || form === "form1" ? (
                ""
              ) : (
                <StyledTableCell>
                  <Box display="flex" alignItems="center" whiteSpace={"nowrap"}>
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
                {/* <Avatar className="profile" sx={{ bgcolor: "#bdbdbd" }}>
                  A
                </Avatar> */}
                <Avatar1 />
              </StyledTableCell>
              <StyledTableCell>{row.valore}</StyledTableCell>
              <StyledTableCell>
                {/* <Avatar className="profile" sx={{ bgcolor: "#bdbdbd" }}>
                  A
                </Avatar> */}
                <Avatar1 />
              </StyledTableCell>
              <StyledTableCell align="center">
                <StatusChip
                  sx={{ cursor: "pointer" }}
                  stato={
                    searchFilters?.stato ? row.stato : currentStatuses[index]
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleStatusClick(index);
                  }}
                >
                  {searchFilters?.stato ? row.stato : currentStatuses[index]}
                </StatusChip>
              </StyledTableCell>
              <StyledTableCell onClick={(event) => event.stopPropagation()}>
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
};

export default TableRows;
