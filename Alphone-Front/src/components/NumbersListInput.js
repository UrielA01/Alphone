import { List, ListItem, TextField } from "@mui/material";
import { useState } from "react";
import React from "react";
import AddIcon from '@mui/icons-material/Add';

function NumbersListInput({ numbers }) {
    const [numbersList, setNumbers] = useState(numbers)

    function addNumber() {
        setNumbers([...numbersList, ''])
    }

    return (
        <List>
            {numbers.map((number) => (
                <ListItem>
                    <TextField
                        key={number}
                        margin="dense"
                        id={number}
                        label={number}
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </ListItem>
            ))
            }
            <ListItem>
                <AddIcon onClick={addNumber}/>
            </ListItem>
        </List>
    );
}

export default NumbersListInput;