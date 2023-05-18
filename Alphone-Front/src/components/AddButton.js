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
import { contacts, addContact } from '../API manager/api';

export default function AddButton() {
    const [open, setOpen] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [system, setSystem] = useState('');
    const [numbers, setNumbers] = useState(["0987230594", "23432412", "3242342"]);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const send = (teamName, system, numbers) => {
        addContact(teamName, system, numbers);
        handleClose();
    };
    
    return (
        <div>
            <Stack direction="row" spacing={2} margin='1%'>
                <Button variant="contained" size="large" onClick={handleClickOpen} startIcon={<AddIcon />} disableElevation>
                    Add
                </Button>
            </Stack>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit team</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Team Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="mainSystem"
                        label='Main System'
                        type="text"
                        fullWidth
                        variant="standard"
                        value={system}
                        onChange={(e) => setSystem(e.target.value)}
                    />
                    <NumbersListInput numbers={numbers} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { send(teamName, system, numbers)}}>Complete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}