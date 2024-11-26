import React from 'react';
import { TableBody, TableRow, TableCell, Checkbox, IconButton, styled } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomCheckbox from '../Checkbox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: '12px 16px',
    fontSize: '0.875rem',
    borderBottom: '1px solid #e0e0e0',
    color: theme.palette.text.secondary,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: '#ffffff',
    },
    '&:nth-of-type(odd)': {
        backgroundColor: '#fafafa',
    },
    '&:hover': {
        backgroundColor: '#f0f0f0',
    }

}));

const TableRows = ({ data, selectedRows, handleRowClick }) => (
    <TableBody>
        {data.map((row) => {
            const isSelected = selectedRows.includes(row.id);

            return (
                <StyledTableRow
                    hover
                    key={row.id}
                    selected={isSelected}
                    onClick={(event) => handleRowClick(event, row.id)}
                >
                    <StyledTableCell padding="checkbox">
                        <CustomCheckbox
                            checked={isSelected}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(event) => handleRowClick(event, row.id)}
                        />
                    </StyledTableCell>
                    <StyledTableCell>{row.anagrafica}</StyledTableCell>
                    <StyledTableCell>{row.relationType}</StyledTableCell>
                    <StyledTableCell>{row.anagraficaName}</StyledTableCell>
                    <StyledTableCell>{row.fromDate}</StyledTableCell>
                    <StyledTableCell>{row.toDate}</StyledTableCell>

                    <StyledTableCell>
                        <IconButton
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Handle menu open
                            }}
                            aria-label="More actions"
                        >
                            <MoreVertIcon />
                        </IconButton>

                    </StyledTableCell>
                </StyledTableRow>
            );
        })}
    </TableBody>
);

export default TableRows;