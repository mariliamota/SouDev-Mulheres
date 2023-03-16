import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alunos from "../pages/Alunos";
import Home from "../pages/Home";

export default function Ways()
{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path="/alunos" element={<Alunos/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}