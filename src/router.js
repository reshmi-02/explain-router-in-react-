import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Routeone from "./component/routeone.js"
const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Routeone/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router