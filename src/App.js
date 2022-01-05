import 'swiper/swiper.min.css'

import './assets/boxicons/css/boxicons.min.css'

import './App.scss'
import React from 'react'
import Routes from './config/Routes'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props} />
                    <Routes />
                    <Footer />
                </>
            )} />
        </BrowserRouter>
    )
}

export default App
