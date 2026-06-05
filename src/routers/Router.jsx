import {Routes, Route } from 'react-router-dom';
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Routers = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element ={<Home />} />
                <Route path='/home' element ={<Home />} />
                <Route path='/login' element ={<Login />} />
            </Route>
        </Routes>
    )

}