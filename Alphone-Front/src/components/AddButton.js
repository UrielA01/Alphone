import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NumbersListInput from './NumbersListInput';
import { addContact } from '../API manager/api';
import GeneralDialog from './GeneralDialog';

export default function AddButton() {
    const [open, setOpen] = useState(false);
    const [numbers, setNumbers] = useState(["0987230594", "23432412", "3242342"]);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const send = (teamName, system, numbers) => {
        addContact(teamName, system, numbers).then((data) => {
            console.log(data);
            handleClose();
            window.location.reload()
        });
    };
    
    return (
        <div>
            <Stack direction="row" spacing={2} margin='1%'>
                <Button variant="contained" size="large" onClick={handleClickOpen} startIcon={<AddIcon />} disableElevation>
                    Add
                </Button>
                <GeneralDialog 
                handleClose={handleClose} 
                open={open} 
                send={send} 
                contact={false}
                />
            </Stack>
        </div>
    );
}