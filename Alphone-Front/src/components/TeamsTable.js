import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NumbersList from './NumbersList';
import DeleteDialog from './DeleteDialog';
import EditDialog from './EditDiaglog';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function TeamsTable({ contacts }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Team name</StyledTableCell>
                        <StyledTableCell>Main system</StyledTableCell>
                        <StyledTableCell>Numbers</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact.teamName}>
                            <StyledTableCell component="th" scope="row">
                                {contact.teamName}
                            </StyledTableCell>
                            <StyledTableCell>{contact.system}</StyledTableCell>
                            <StyledTableCell><NumbersList numbers={contact.numbers} /></StyledTableCell>
                            <StyledTableCell><DeleteDialog /> <EditDialog contact={contact} /> </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}