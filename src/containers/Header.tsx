import React from "react";
import { NavBar } from "../views/Counter/style";
import { NavButton } from "../views/Counter/style";
import { selectIsLogged } from "../features/logIn/logInSlice";
import { useSelector } from "react-redux";
import { logOut } from "../features/logIn/logInSlice";
import { useAppDispatc } from "../app/hooks";

export default function Header() {
    const isLogged = useSelector(selectIsLogged);
    const dispatch = useAppDispatc();

    const handleLogout = () => {
        dispatch(logOut())
  }

    return (
        <NavBar>
            <NavButton to='/about'>О нас</NavButton>
            <NavButton to='/counter'>Счетчики</NavButton>
            <NavButton to='/error' >404</NavButton>
            {
                isLogged?
                <>
                    <NavButton to='/profile'>Профиль</NavButton>
                    <NavButton onClick={handleLogout} to='/login-redux' style={{justifySelf: 'end', marginLeft: 'auto'}}>Выйти</NavButton>
                </>:
                <>
                    <NavButton to='/login-redux' style={{justifySelf: 'end', marginLeft: 'auto'}}>Войти Redux</NavButton>
                </>
            }
            <NavButton to='/login' style={{justifySelf: 'end', marginLeft: '10px'}}>Войти</NavButton>
        </NavBar>
    )
}