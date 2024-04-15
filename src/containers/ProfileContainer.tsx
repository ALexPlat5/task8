import React from "react";
import { useSelector } from "react-redux";
import { selectUser, selectIsLogged } from "../features/logIn/logInSlice";
import { Navigate } from "react-router-dom";
import Profile from "../views/Profile";

export default function ProfileContainer() {
    const user = useSelector(selectUser);
    const isLogged = useSelector(selectIsLogged);

    if(!isLogged) {
        return <Navigate to={'/'} />
    }

    return (
        <Profile email={user.email} password={user.password} />
    )
}
