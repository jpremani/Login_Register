import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Register from "./Register/Register";

export default function MainComponent(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register/>}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    )
}