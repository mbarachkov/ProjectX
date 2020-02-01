import React from 'react';
import Navbar from '../components/navBar/navBar';
import HomeInfo from '../components/home/HomeInfo';
import '../styles/style.css'


function Home() {
    return (
        <div>
            <Navbar />
            <HomeInfo />
        </div>
    )
}


export default Home;