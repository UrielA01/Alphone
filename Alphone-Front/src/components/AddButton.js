import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { addContact } from '../API manager/api';
import GeneralDialog from './GeneralDialog';

export default function AddButton() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sendForm = (teamName, system, numbers) => {
        addContact(teamName, system, numbers).then((data) => {
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
                    title={"Add team"}
                    handleClose={handleClose} 
                    open={open} 
                    sendForm={sendForm} 
                    contact={false}
                />
            </Stack>
        </div>
    );
}