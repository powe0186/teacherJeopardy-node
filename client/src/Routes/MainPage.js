import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
  } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>This is the Main page.... page.</h1>
            <Outlet />
        </div>
        
    );
}

export default MainPage;