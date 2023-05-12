import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

function NumbersList({ numbers }) {
    return (
        <List dense={true}>
            {numbers.map((nubmer) => (
                <ListItem>
                    <ListItemText
                        primary={nubmer}
                    />
                </ListItem>
            ))
            }
        </List>
    );
}

export default NumbersList;