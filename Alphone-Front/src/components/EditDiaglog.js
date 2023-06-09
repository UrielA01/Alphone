import { useState } from 'react';
import Button from '@mui/material/Button';
import Edit from '@mui/icons-material/Edit';
import GeneralDialog from './GeneralDialog';
import { updateContact } from '../API manager/api';

export default function EditDialog({ contact }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sendForm = (teamName, system, numbers) => {
        const contactId = contact._id;
        updateContact(contactId, teamName, system, numbers).then((data) => {
            handleClose();
            window.location.reload()
        });
    }

    return (
        <div>
            <Button color='inherit' onClick={handleClickOpen}>
                <Edit />
            </Button>
            <GeneralDialog 
                title={"Edit team"}
                contact={contact}
                handleClose={handleClose}
                open={open} 
                sendForm={sendForm} 
            />
        </div>
    );
}