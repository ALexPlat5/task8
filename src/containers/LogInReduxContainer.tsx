import LogIn from "../views/Counter/LogIn";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser, selectIsLogged, emailUpdate, passwordUpdate, logIn } from "../features/logIn/logInSlice";
import { useAppDispatch } from "../app/hooks";
import { changeHandler, submitHandler } from "../features/logInFunctions";

export default function LogInReduxContainer() {
    const dispatch = useAppDispatch()
    const user = useSelector(selectUser)
    const isLogged = useSelector(selectIsLogged)

    if (isLogged) {
        return <Navigate to={'/login-redux/profile'} />
    }

    return (
        <>
            <LogIn state={user} changeHandler={(event)=>
                changeHandler( 
                    event, 
                    (str)=>dispatch(emailUpdate(str)),
                    (str)=>dispatch(passwordUpdate(str))
                )}
                submitHandler={(event)=>submitHandler(event, user, ()=>dispatch(logIn()))}
            />
        </>        
    )
}
