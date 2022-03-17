import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions/UserActions";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import {List} from "@material-ui/core";

export default function UserPage() {
    const dispatch = useDispatch();

    const [dense] = React.useState(false);
    const users = useSelector((store) => store.userReducer.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const displayListItems = user => {
        return <React.Fragment key={user.id}>
            {`User ID = ${user.id}, 
            First Name = ${user.firstName},
            Last Name = ${user.lastName}, 
            Age = ${user.age}`}
        </React.Fragment>;
    };

    return (
        <div>
            <Grid container spacing={0} justifyContent="center" style={{marginTop: 150}}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" align="center">User List</Typography>
                    <div>
                        <List dense={dense}>
                            <Card variant="outlined">
                                {users.map(user => (
                                    <ListItem key={user.id}>
                                        <ListItemText primary={displayListItems(user)}/>
                                        <ListItemSecondaryAction>
                                            <CrudButton style={{color: "green"}} >
                                                Edit
                                            </CrudButton>
                                            <CrudButton style={{color: "red"}}>
                                                Delete
                                            </CrudButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </Card>
                        </List>
                    </div>
                    <CrudButton
                        style={{background: "#d50000", width: "100%", color: "white"}}
                        size="large"
                    >
                        Add user
                    </CrudButton>
                </Grid>
            </Grid>
            <br/>
        </div>
    );
};

function CrudButton(props) {
    return (
        <Button style={props.style}>
            {props.children}
        </Button>
    );
}