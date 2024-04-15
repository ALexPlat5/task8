import { ChangeEvent, FormEvent } from "react";

export type InputEvent = ChangeEvent<HTMLInputElement>;
export type SubmitEvent = FormEvent<HTMLFormElement>;
export type User = {
    email: string
    password: string
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
    const regEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    event.preventDefault()
    if (regEx.test(user.email)) {
        resolve();
        console.log(JSON.stringify(user));
    } else {
        alert('Введите корректный адрес электронной почты');
    }
}
