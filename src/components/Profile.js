import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Stack, Typography } from "@mui/material";

import UserContext from "../context/UserContext";

function Profile() {

    const navigate = useNavigate();

    const { user } = useContext(UserContext)

    useEffect(() => {
        if (!user) navigate("/login")
    });

    return(
        <Stack flexDirection="column" alignItems="center" m={2}>


            <Card component="form"
            raised 
            sx={{
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start", 
            width: {
                xs: "80vw", 
                sm: "70vw", 
                md: "50vw", 
                lg: "40vw", 
                xl: "30vw"
            }, 
            maxWidth: "600px", 
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
                    User Info
                </Typography>             
                <Typography>First Name: {user.firstName}</Typography>
                <Typography>Last Name: {user.lastName}</Typography>
                <Typography>Email: {user.email}</Typography>
            </Card>
    </Stack>

)
}

export default Profile;