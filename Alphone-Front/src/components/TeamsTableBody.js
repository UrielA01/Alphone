import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
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

export default function TeamsTableBody({ contacts }) {
    return (
        <TableBody>
            {
                contacts.map((contact) => (
                    <TableRow key={contact.teamName}>
                        <StyledTableCell component="th" scope="row">
                            {contact.teamName}
                        </StyledTableCell>
                        <StyledTableCell>{contact.system}</StyledTableCell>
                        <StyledTableCell><NumbersList numbers={contact.numbers} /></StyledTableCell>
                        <StyledTableCell><DeleteDialog /> <EditDialog contact={contact} /> </StyledTableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    );
}