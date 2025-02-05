import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useState, useContext } from "react";
import viFlag  from '../assets/vietnam.png'
import enFlag  from '../assets/united-kingdom.png'
import { SelectChoiceContext } from "../hooks";
const MultiChoice = () => {
    const lstCountry = [
        {key: 1, value: "Vi", content: "See the documentation below for a complete reference to all of the props and classes available to the components mentioned here."}, 
        {key: 2, value: "ABC", content: "These are just a few examples of how you can define and use types in TypeScript. If you have a specific use case or need more details, feel free to ask"},
        {key: 3, value: "XYZ", content: "See the documentation below for a complete reference to all of the props and classes available to the components mentioned here."}, 
        {key: 4, value: "ASDF", content: "These are just a few examples of how you can define and use types in TypeScript. If you have a specific use case or need more details, feel free to ask"},
        {key: 5, value: "SADFASDFASDF", content: "See the documentation below for a complete reference to all of the props and classes available to the components mentioned here."}, 
        {key: 6, value: "ASDFASFA SDF ASDF", content: "These are just a few examples of how you can define and use types in TypeScript. If you have a specific use case or need more details, feel free to ask"},
        {key: 7, value: "ASDFA FASD F ASDF", content: "See the documentation below for a complete reference to all of the props and classes available to the components mentioned here."}, 
        {key: 8, value: "EASDFASDF ASD FASD F ", content: "These are just a few examples of how you can define and use types in TypeScript. If you have a specific use case or need more details, feel free to ask"}

    ]
        
    const ctx = useContext(SelectChoiceContext);
    if (!ctx) throw new Error('SelectChoiceContextProvider is missing');
    const { setState } = ctx;
    // const [selectedChoice, setSelectedChoice] = useState(lstCountry[0])
    function changeItem(e: any, key: number){
        // setSelectedChoice(lstCountry[parseInt(key.toString())])
        setState(lstCountry[parseInt((key-1).toString())])
    }
    return (
        <>
            <Box sx={{p:2, border: '1px solid lightgray'}}>
                <List component="ul">
                    {
                        lstCountry.map((item)=>(
                            <ListItem component="li" key={item.key} onClick={(e) =>changeItem(e, item.key)}>
                                <ListItemAvatar >
                                    <Avatar >
                                        <img width={25}  className="" src={ item.key  == 1? viFlag: enFlag} alt={item.value ?? ''}  />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.value} secondary={item.content}>
                                </ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        
        </>    
    )
}

export default MultiChoice;