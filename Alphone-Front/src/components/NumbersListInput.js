import { Button, List, ListItem, TextField } from "@mui/material";
import { useState } from "react";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function NumbersListInput({ numbers, setNumbers }) {

    function addNumber() {
        setNumbers([...numbers, '']);
    }

    function removeNumber(index) {
        const list = [...numbers];
        list.splice(index, 1);
        setNumbers([...list]);
    }

    function changeNumber(e, index) {
        const list = numbers;
        list[index] = e.target.value;
        setNumbers([...list]);
    }

    return (
        <List>
            {numbers.map((number, index) => (
                <ListItem key={index + "-number"}>
                    <TextField
                        margin="dense"
                        id={number}
                        // defaultValue={number}
                        type="number"
                        fullWidth
                        variant="standard"
                        value={number}
                        onChange={(e) => changeNumber(e, index)}
                    />
                    <Button color="inherit" onClick={() => removeNumber(index)} disableElevation>
                        <RemoveIcon />
                    </Button>
                </ListItem>
            ))
            }
            <ListItem>
                <Button variant="outlined" color="inherit" onClick={addNumber} disableElevation>
                    <AddIcon />
                </Button>
            </ListItem>
        </List>
    );
}

export default NumbersListInput;