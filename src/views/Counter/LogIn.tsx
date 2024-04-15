import React from 'react';
import { Page } from './style';
import { FormControl } from '@mui/material';
import { InputEvent, SubmitEvent, User } from '../../features/logInFunctions';

type LogInProps = {
    state: User,
    changeHandler: (event:InputEvent)=>void,
    submitHandler: (event:SubmitEvent)=>void
}

const LogIn = ({state, changeHandler, submitHandler }: LogInProps) => {
    return (
        <Page>
            <form onSubmit={submitHandler} >
                <FormControl>
                    <label htmlFor='mailInput' >Mail</label>
                    <input onChange={changeHandler} id='mailInput' type="text" value={state.email}/>
                    <label htmlFor='passwordInput'>Пароль</label>
                    <input 
                        onChange={changeHandler}
                        id='passwordInput' 
                        type='password' 
                        value={state.password}
                        minLength={6}
                        required
                    />
                    <button type='submit'>Отправить</button>
                    <p>Почта: {state.email}</p>
                    <p>Пароль: {state.password}</p>
                </FormControl>
            </form>
        </Page>
    )
}

export default LogIn
