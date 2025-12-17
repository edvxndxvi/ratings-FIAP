import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import Game from "./Pages/Game"
import Layout from "./Pages/Layout"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout/> }>
                    <Route index element={<Home/>}/>
                    <Route path="/game/:id" element={<Game/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Route>
            </Routes> 
        </BrowserRouter>
    )
}