import React from "react";
import { Page } from "./Counter/style";
import { User } from "../features/logInFunctions";

export default function Profile({email, password}:User) {
    return (
        <Page>
            <div>
                <p>Почта: {email}</p>
                <p>Пароль: {password}</p>
            </div>
        </Page>
    )
}
