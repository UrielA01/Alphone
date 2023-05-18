import { useState } from 'react';
import Button from '@mui/material/Button';
import Edit from '@mui/icons-material/Edit';
import GeneralDialog from './GeneralDialog';

export default function EditDialog({ contact }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const send = () => {
        return;
    }

    return (
        <div>
            <Button color='inherit' onClick={handleClickOpen}>
                <Edit />
            </Button>
            <GeneralDialog 
            contact={contact}
            handleClose={handleClose}
            open={open} 
            send={send} 
            />
        </div>
    );
}