import React from "react";
// import {Switch,Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./Pages/Home"

export default function App(){
    return(
        <div className="text-center">
            <Header/>
            <Home/>
        </div>
    )
}