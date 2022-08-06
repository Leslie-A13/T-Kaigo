import React from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import { EntretenimientoScreen } from '../Components/Entretenimiento/EntretenimientoScreen'
import { GastronomiaScreen } from '../Components/Gastronomia/GastronomiaScreen'
import { HomeScreen } from '../Components/Home/HomeScreen'
import { TurismoScreen } from '../Components/Turismo/TurismoScreen'
import { EntretenimientoContent } from './../Components/Entretenimiento/EntretenimientoContent';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* <header class="tk_header">
                <div class="text-center tk_header_logo">
                    <img src="img/logo/logo.svg" alt="" class="tk_logo" />
                </div>
            </header> */}
            <Routes>
                <Route exact path="/turismo" element={<TurismoScreen />}> </Route>
                <Route exact path="/gastronomia" element={<GastronomiaScreen />}></Route>
                <Route exact path="/entretenimiento" element={<EntretenimientoScreen />}></Route>
                <Route exact path="/entretenimiento/:tipo" element={<EntretenimientoContent />}> </Route>
                <Route path='/' element={<HomeScreen />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
