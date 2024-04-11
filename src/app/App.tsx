import React, {useState, useEffect} from "react";
import CounterContainer from "../containers/CounterContainer";
import Button from '@mui/material/Button'
import { ButtonsContainer, CountersContainer } from '../views/Counter/style'

function App() {
    const [counters, setCounters] = useState([false]);
    const [action, setAction] = useState('reset');

    const addCounter  = () =>{
        setCounters((prev)=>[...prev, !prev[prev.length-1]]);
        setAction('add')
    }
    const deleteCounter = () => {
        setCounters((prev)=>prev.slice(0,prev.length-1));
        setAction('delete');
    };
    const resetCounter = () => {
        setCounters([false]);
        setAction('reset');
    }
    const lastCounter = counters.length===1;
    

    return (
        <div> 
            <ButtonsContainer>
                <Button onClick={addCounter}>Add Counter</Button>
                <Button onClick={deleteCounter} disabled={lastCounter}>Remove Last Counter</Button>
                <Button onClick={resetCounter} disabled={lastCounter}>reset</Button>
            </ButtonsContainer>
            <CountersContainer>
                {counters.map((elem)=>(<CounterContainer enum={elem} action={action}/>))}
            </CountersContainer>
        </div>  
    )
}

export default App
