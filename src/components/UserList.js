import React, { useEffect, useState } from "react";
import { Card, CircularProgress, Grid, Stack, Typography } from "@mui/material";

import yodlrAPI from "../api/api";

function UserList() {

    const [ users, setUsers ] = useState(true);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function getUsers() {
            let usersRes = await yodlrAPI.getUsers();
            console.log(usersRes)
            setUsers(usersRes);
            setLoading(false);
        } 
        getUsers();
    }, [])

    return(
        <>
            {loading === true && 
                <CircularProgress color="secondary" sx={{marginTop: 2}} />
            }
            {!loading && users && 
            <Stack flexDirection="column" alignItems="center" m={2}>
                {/* If user is logged in, display user data here */}
                {users && 
                <Card component="form"
                raised 
                sx={{
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start", 
                width: {
                    xs: "96vw", 
                    sm: "90vw", 
                    md: "90vw", 
                    lg: "70vw", 
                    xl: "60vw"
                }, 
                m: 2, 
                pt: 1,
                pb: 1, 
                pl: 2, 
                pr: 2,  
                border: "solid", 
                borderColor: "primary.main",
                borderRadius: "3px", 
                borderWidth: "2px",   
                }}>           
                    <Typography variant="h4" color="primary" sx={{alignSelf: "center"}}>
                        User List
                    </Typography>       
                    <Grid container>
                            <Grid item xs={1}>
                                <Typography color="primary">ID</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography color="primary">First Name</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography color="primary">Last Name</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography color="primary">Email</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography color="primary">Status</Typography>
                            </Grid>                        
                        </Grid>                      
                    {Array.isArray(users) && users.map(user => 
                        <Grid container key={user.id}>
                            <Grid item xs={1}>
                                <Typography>{user.id}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>{user.firstName}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>{user.lastName}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>{user.email}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography>{user.state}</Typography>
                            </Grid>                        
                        </Grid>
                    )}
                </Card>}
        </Stack>}
    </>
    )
}

export default UserList;