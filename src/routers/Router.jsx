import {Routes, Route } from 'react-router-dom';
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Layout } from '../components/Layout';

export const Routers = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element ={<Login />} />
                <Route path='/home' element ={<Home />} />
                <Route path='/login' element ={<Login />} />
            </Route>
        </Routes>
    )

}