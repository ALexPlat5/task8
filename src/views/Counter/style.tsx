import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

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

const NavBar = styled(Paper)(({theme})=>({
    position: 'fixed',
    top: 0,
    left: 0,
    padding: 0,
    display: 'flex-inline',
    justifyContent:'flex-start',
    alignContent: 'center',
    width: '100%',
    height: '60px',
    margin: '10px 10px',
    zIndex: 10
}))

const Page = styled(Paper)(({theme})=>({
    backgroundColor:'#fafaff',
    width: '100%',
    padding: '10px 5px',
    position: 'relative',
    top: 70,
    display: 'block',
    flexWrap: 'wrap',
    margin: '5px 0'
}))

const NavButton = styled(NavLink)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    margin: '0 10px',
    border: '1px solid',
    lineHeight: 1.5,
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
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
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
