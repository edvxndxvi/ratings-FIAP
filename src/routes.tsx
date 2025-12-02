import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import Game from "./pages/Game/Game"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/game/:id" element={<Game/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes> 
        </BrowserRouter>
    )
}