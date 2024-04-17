import React from "react";
import storeMSTC from "../app/mst-store";

export default function MstcProfile() {
    const user = storeMSTC.getUser()

    return (
        <div>
            <p>Почта: {user.email}</p>
            <p>Пароль: {user.password}</p>
        </div>
    )
}
