import React, {useState} from "react";
import CounterContainer from "../containers/CounterContainer";
import { ButtonsContainer, CountersContainerClass } from '../views/Counter/style';
import Button from '@mui/material/Button';
import { Page } from "../views/Counter/style";

export default function Counters() {
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
        <Page>
            <ButtonsContainer>
                <Button onClick={addCounter}>Add Counter</Button>
                <Button onClick={deleteCounter} disabled={lastCounter}>Remove Last Counter</Button>
                <Button onClick={resetCounter} disabled={lastCounter}>reset</Button>
            </ButtonsContainer>
            <CountersContainerClass>
                {counters.map((elem, index)=>(<CounterContainer enum={elem} action={action}/>))}
            </CountersContainerClass>
        </Page> 
    )
}
