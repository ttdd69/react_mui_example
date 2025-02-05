import React, { useContext } from 'react'
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { SelectChoiceContext } from '../hooks';
const ChoiceResult : React.FC = () => {
    const ctx = useContext(SelectChoiceContext)
    if (!ctx) throw new Error('SelectChoiceContextProvider is missing');
    const { state } = ctx;
    return (
        <Box sx={{p:2,mt:3, border: '1px solid lightgray'}} >
           <List>
                <ListItem>
                    <ListItemText primary={state.value} secondary={state.content}>
                    </ListItemText>
                </ListItem>
           </List>
        </Box>
    )
}

export default ChoiceResult;