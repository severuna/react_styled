import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const Main = () => {
    return (
        <Routes>
            <Route path='/react_styled/register' element={<Register />} />
            <Route path='/react_styled/' element={<Login />} />
        </Routes>
    );
};

export default Main;