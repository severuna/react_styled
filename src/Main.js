import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const Main = () => {
    return (
        <div>
        <Routes>
            <Route path='/react_styled/register' element={<Register />} />
            <Route path='/react_styled/' element={<Login />} />
        </Routes>
        </div>
    );
};

export default Main;