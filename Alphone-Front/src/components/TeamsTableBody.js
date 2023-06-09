import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import NumbersList from './NumbersList';
import DeleteDialog from './DeleteDialog';
import EditDialog from './EditDiaglog';
import { contacts } from '../API manager/api';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function TeamsTableBody() {
    const [contactsList, setContactsList] = useState([]);

    useEffect(() => {
        contacts().then(list => setContactsList(list.data))
    }, []);



    return (
        <TableBody>
            {
                contactsList.map((contact) => (
                    <TableRow key={contact._id}>
                        <StyledTableCell component="th" scope="row">
                            {contact.teamName}
                        </StyledTableCell>
                        <StyledTableCell>{contact.system}</StyledTableCell>
                        <StyledTableCell><NumbersList numbers={contact.numbers} /></StyledTableCell>
                        <StyledTableCell><DeleteDialog contact={contact} /> <EditDialog contact={contact} /> </StyledTableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    );
}