import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import {Item, CounterItem, ButtonsContainer} from './style'

type CounterProps = {
    state: number,
    increment: () => void,
    decrement: () => void,
    reset: () => void
}

const Counter = ({state, increment, decrement, reset}: CounterProps) => {
    return (
        <CounterItem>
            <Item>{state}</Item>
            <ButtonsContainer>
                <Button onClick={increment}>+</Button>
                <Button onClick={decrement}>-</Button>
                <Button onClick={reset}>Reset</Button>
            </ButtonsContainer>
        </CounterItem>
    );
}

export default Counter;
