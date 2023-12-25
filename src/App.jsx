import React from "react";
import { Routes, Route, } from "react-router-dom"
import  { AboutUs } from "./pages/aboutus"
import { SigNin } from "./pages/signin"
import { Home } from "./pages/home"
import "./App.css"
function App() {
    return(
        <div>
            <header className="header">
                <a  className="link-1" href="/">Home</a>
                <a  className="link-1" href="/about">AboutSuS</a>
                <a className="link-1" href="/signin">Signin</a>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/signin" element={<SigNin/>}/>
            </Routes>
        </div>
    )
}
export default App