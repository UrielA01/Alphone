import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

function NumbersList({ numbers }) {
    return (
        <List dense={true}>
            {numbers.map((number, index) => (
                <ListItem key={index + number + "list"}>
                    <ListItemText
                        primary={number}
                    />
                </ListItem>
            ))
            }
        </List>
    );
}

export default NumbersList;