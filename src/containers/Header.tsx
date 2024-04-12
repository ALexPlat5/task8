import React from "react";
import { NavBar } from "../views/Counter/style";
import { NavButton } from "../views/Counter/style";

export default function Header() {
    return (
        <NavBar>
            <NavButton to='/about'>О нас</NavButton>
            <NavButton to='/counter'>Счетчики</NavButton>
            <NavButton to='/error'>404</NavButton>
        </NavBar>
    )
}