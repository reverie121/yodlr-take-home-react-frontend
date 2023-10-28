import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Card, CircularProgress, Stack, TextField, Typography } from "@mui/material";

import yodlrAPI from "../api/api";
import UserContext from "../context/UserContext";

function Login() {

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate();

    const INITIAL_STATE = {
        id: ""
    }

    // Sets State for the form data and process message.
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [ loading, setLoading ] = useState(false);

    // Makes request to backend to log in a user.
    const logInUser = async () => {
        // If successful, put user data into state.        
        try {
            let userRes = await yodlrAPI.getUser(formData.id);
            if (userRes) setUser(userRes);
            setLoading(false);
        }
        catch(err) {
            console.error(err);
            setLoading(false);
        }
    }

    // Handles value changes (for inputs).
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    
    // Handles form submition.
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Log in the user. ***
        await logInUser();
        // Clear form.
        setFormData(INITIAL_STATE);
        // Redirect to user profile.
        navigate("/profile")
    }        

    const inputStyles = {mt: 2};

    return(
        <>
            {loading === true && 
                <CircularProgress color="secondary" sx={{marginTop: 2}} />
            }

            {loading === false && 
            <Stack sx={{alignItems: "center"}}>
                <Card component="form"
                raised 
                sx={{
                    display: "flex", 
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center", 
                    width: {
                        xs: "80vw", 
                        sm: "70vw", 
                        md: "50vw", 
                        lg: "40vw", 
                        xl: "30vw"
                    }, 
                    maxWidth: "500px", 
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

                    <Typography sx={{mt: 2, fontWeight: "bold", color: "primary.main"}}>Log In</Typography>

                    <TextField fullWidth variant="outlined" label="User ID #" name="id" value={formData["id"]} onChange={handleChange} sx={inputStyles} />

                    <Box sx={{mt: 1}}>
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </Box>

                </Card>
            </Stack>}
        </>
    );
};

export default Login;