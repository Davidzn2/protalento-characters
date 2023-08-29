import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Frutas from './Components/Frutas'
import Verduras from './Components/Verduras'
import Home from './Components/Home'
import Character from './Components/Character'

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/character/:id" element={<Character />} />
                <Route path="/frutas" element={<Frutas />} />
                <Route path="/verduras" element={<Verduras />} />
            </Routes>
        </BrowserRouter>
    )

}

export default MyRoutes