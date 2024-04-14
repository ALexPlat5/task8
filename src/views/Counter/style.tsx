import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import { FormControl } from '@mui/material';

const Item = styled(Paper)(({theme})=>({
    backgroundColor: '#fff',
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

const CountersContainerClass = styled(Paper)(({theme})=>({
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

const ErrorPageClass = styled(Paper)(({theme})=>({
    backgroundColor: '#1A2027',
    color: 'white',
    fontSize: 40,
    display: 'flex',
    position:'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
}))

const Page = styled(Paper)(({theme})=>({
    backgroundColor:'#fafaff',
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px 5px',
    position: 'relative',
    top: 70,
    display: 'block',
    flexWrap: 'wrap',
    margin: '5px 0'
}))

const NavBar = styled(Paper)(({theme})=>({
    position: 'fixed',
    left: 0,
    margin: 0,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    height: '60px',
    zIndex: 10
}))

const NavButton = styled(NavLink)({
    fontSize: 16,
    padding: '6px 12px',
    margin: '0 10px',
    border: '1px solid',
    borderColor: '#0063cc',
    textDecoration: "none",
    color: '#0062cc',
    borderRadius: '10%',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
    ].join(','),
    '&.active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
      color: '#fff'
    },
    
  });


export  { 
    Item, CounterItem, NavButton,
    ButtonsContainer, CountersContainerClass, 
    ErrorPageClass, NavBar, Page
 }
