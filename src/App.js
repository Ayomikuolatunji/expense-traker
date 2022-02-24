import React from "react";
// import {Switch,Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./Pages/Home"
import {Route,Switch} from "react-router-dom"

export default function App(){
    return(
        <div className="text-center">
            <Header/>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
            <Home/>
        </div>
    )
}