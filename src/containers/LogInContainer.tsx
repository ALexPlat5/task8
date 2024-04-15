import React, {useState} from "react";
import LogIn from "../views/Counter/LogIn";
import { changeHandler, submitHandler } from "../features/logInFunctions";
import type { User } from "../features/logInFunctions";

export default function LogInContainer () {
    const [ inputsValue, setInputsValue ] = useState<User>({email:'', password:''});

    return (
    <LogIn 
        state={inputsValue}
        changeHandler={(event)=>changeHandler(
            event,
            ()=>setInputsValue((prev)=>({...prev, email:event.target.value})),
            ()=>setInputsValue((prev)=>({...prev, password:event.target.value}))
        )}
        submitHandler={(event)=>submitHandler(
            event,
            inputsValue,
            ()=>
                {alert(JSON.stringify(inputsValue))
                setInputsValue({email:'', password:''})}
        )}
    />)
}
