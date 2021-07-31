import React from 'react';
import NavBar from '../../components/NavBar/NavBar'


const MainPage=(props)=> {
    return <NavBar user={props.user}/>
}

export default MainPage;