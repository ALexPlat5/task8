import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({theme})=>({
    backgroundColor: '#fff',
    //...theme.typography.body2,
    display:'flex',
    position:'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height:'50%',
    margin: 'auto',
    fontSize: 20,
}))

const CounterItem = styled(Paper)(({theme})=>({
    display: 'flex-inline',
    alignItems: 'stretch',
    width: 200,

    height: '140px',
    margin: '10px 10px'
}))

const CountersContainer = styled(Paper)(({theme})=>({
    backgroundColor:'aqua',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    margin: '5px 0'
}))

const ButtonsContainer = styled(Paper)(({theme})=>({
    backgroundColor: '#1A2027',
    display: 'flex',
    height: '50%',
    justifyContent:'flex-start',
    alignContent: 'center',
}))

// const CounterItem 

export  { Item, CounterItem, ButtonsContainer, CountersContainer }
