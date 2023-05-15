import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Edit from '@mui/icons-material/Edit';
import NumbersListInput from './NumbersListInput';
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
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Team name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="mainSystem"
                        label="Main system"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <DialogContentText>
                        Numbers:
                    </DialogContentText>  
                    <NumbersListInput numbers={contact.numbers}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Complete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}