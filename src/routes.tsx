import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Game from "./Pages/Game/Game"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes> 
        </BrowserRouter>
    )
}