import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NumbersListInput from './NumbersListInput';

export default function GeneralDialog({ contact, open, send, handleClose }) {
    const [teamName, setTeamName] = useState(contact.teamName || '');
    const [system, setSystem] = useState(contact.system || '');
    const [numbers, setNumbers] = useState(contact.numbers || []);

    return (
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
                <NumbersListInput numbers={numbers} setNumbers={setNumbers} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => { send(teamName, system, numbers) }}>Complete</Button>
            </DialogActions>
        </Dialog>
    );
}