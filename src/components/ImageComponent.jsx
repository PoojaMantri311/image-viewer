import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";

const ImageComponent = (props) => {
    const history = useNavigate()
    const onClickChange = () => {
        history(`/${props.content.id}`)
    }
    return (
        <div onClick={onClickChange}>
            <Divider variant="inset" component="li" />
            <ListItem key ={props.content.id} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="No Data" src={props.content.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                    classes={{
                        primary:{
                            margin:"11px"
                        }
                    }}
                    primary={props.content.title}
                />
            </ListItem>
        </div>
    )
}
export default ImageComponent