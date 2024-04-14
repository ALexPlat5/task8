import React, {useState, ChangeEvent, FormEvent} from "react";
import LogIn from "../views/Counter/LogIn";


type inputsData = {
    email: string
    password: string
}

type InputEvent = ChangeEvent<HTMLInputElement>;
type SubmitEvent = FormEvent<HTMLFormElement>;

export default function LogInContainer () {
    const [ inputsValue, setInputsValue ] = useState<inputsData>({email:'', password:''});

    const changeHandler = (event:InputEvent) => {
        event.preventDefault()
        
        if(event.target.id==='mailInput') {
            setInputsValue((prev)=>({...prev, email:event.target.value}))
        } else {
            setInputsValue((prev)=>({...prev, password:event.target.value}))
        }
    }

    const submitHandler = (event:SubmitEvent) => {
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        event.preventDefault()
        if (regEx.test(inputsValue.email)) {
            setInputsValue({email:'', password:''});
            console.log(JSON.stringify(inputsValue));
        } else {
            alert('Введите корректный адрес электронной почты');
        }
    }

    return (
    <LogIn 
        state={inputsValue}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
    />)
}
