import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import UserList from "./components/UserList";

function AppRoutes() {
    return(
        <Routes>
            <Route exact path="/users" element={<UserList />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/" element={<Home />} />
            <Route element={<p>Hmmm. I can't seem to find what you want.</p>} />
        </Routes>
    )
}

export default AppRoutes;