import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Scan from './pages/Scan';
import { listOfRadios } from '../json/listOfRadios.mjs'
import Home from './pages/Home';

// Idée = Radio Random / Tout Selectionner / Tout décocher / Page d'une radio / Scan de la validité des radios /Favoris /ajouter une radio
const Rad_io = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home listOfRadios={listOfRadios}/>} />
                    <Route path='/scan' exact element={<Scan listOfRadios={listOfRadios}/>} />
                    <Route path='*' element={<Home listOfRadios={listOfRadios}/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Rad_io;
