import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Frutas from './Pages/Frutas'
import Verduras from './Pages/Verduras'
import Home from './Pages/Home'
import Character from './Pages/Character'

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