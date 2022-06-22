import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Job from "./Job";
import InforPage from "./InforPage";
import JobDetail from "./JobDetail";
import SignIn from "./SignIn/SignIn";

export default function RouterPage(){
    return(
        <div>
            <Routes>          
                <Route path="/" exact element={<Home/>}/>
                <Route path="/job" exact element={<Job/>}/>
                <Route path="/info" exact element={<InforPage/>}/>
                <Route path="/jobDetail" exact element={<JobDetail/>}/>
                <Route path="/signin" exact element={<SignIn/>}/>
            </Routes>
        </div>
    )
}