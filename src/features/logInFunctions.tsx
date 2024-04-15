import { ChangeEvent, FormEvent } from "react";

export type InputEvent = ChangeEvent<HTMLInputElement>;
export type SubmitEvent = FormEvent<HTMLFormElement>;
export type User = {
    email: string
    password: string
}

export function validateEmail(
    email:string, 
){
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    return regEx.test(email);
}

export function changeHandler (
    event:InputEvent,
    mailUpdate:(email:string)=>void,
    passwordUpdate: (password:string)=>void
) {
    event.preventDefault()
    if(event.target.id==='mailInput') {
        mailUpdate(event.target.value)
    } else {
        passwordUpdate(event.target.value)
    }
}

export const submitHandler = (
    event:SubmitEvent,
    user:User, 
    resolve:()=>void, 
) => {
    event.preventDefault()
    if (validateEmail(user.email)) {
        resolve();
        console.log(JSON.stringify(user, null, 2));
    } else {
        alert('Введите корректный адрес электронной почты');
    }
}
