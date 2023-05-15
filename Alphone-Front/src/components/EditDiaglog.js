import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Edit from '@mui/icons-material/Edit';
import { DialogContentText } from '@mui/material';

export default function EditDialog({ contact }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color='inherit' onClick={handleClickOpen}>
                <Edit />
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit team</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Team Name"
                        type="text"
                        fullWidth
                        defaultValue={contact.teamName}
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="mainSystem"
                        label='Main System'
                        type="text"
                        fullWidth
                        defaultValue={contact.system}
                        variant="standard"
                        />
                    <DialogContentText>
                        Main System
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Complete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}