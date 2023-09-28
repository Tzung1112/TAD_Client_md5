import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutePage from "./RoutePage";

export default function RouteSetup(){
    return(
        <BrowserRouter>
            <Routes>
                {RoutePage}
            </Routes>
        </BrowserRouter>
    )
}