import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions/UserActions";
import {green, red} from "@material-ui/core/colors";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import {List} from "@material-ui/core";

export default function UserPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const [dense] = React.useState(false);
    const users = useSelector((store) => store.userReducer.users);

    const listItems = user => {
        return <div key={user.id}>{`User ID = ${user.id}, First Name = ${user.firstName},
                            Last Name = ${user.lastName}, Age = ${user.age}`}</div>;
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
                                        <ListItemText primary={listItems(user)}/>
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="end"
                                                aria-label="edit"
                                                style={{color: green[800], paddingRight: "10px"}}
                                                size="small"
                                            >
                                                Edit
                                            </IconButton>
                                            <IconButton
                                                edge="end"
                                                aria-label="delete"
                                                style={{color: red[800], paddingLeft: "10px"}}
                                                size="small"
                                            >
                                                Delete
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </Card>
                        </List>
                    </div>
                    <Button
                        variant="text"
                        color="inherit"
                        style={{background: "#d50000", width: "100%", color: "white"}}
                        size="large"
                    >
                        Add user
                    </Button>
                </Grid>
            </Grid>
            <br/>
        </div>
    );
};

