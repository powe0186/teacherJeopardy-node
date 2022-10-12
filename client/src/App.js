import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav/MainNav';
import Categories from './Routes/Categories';
import MyGames from './Routes/MyGames';
import SignIn from './Routes/SignIn';
import Clues from './Routes/Clues';
import MainPage from './Routes/MainPage';

require('dotenv').config();


function App() {

  const [user, setUser] = useState({});

  async function handleCallbackResponse(response) {
    var userObject = await jwt_decode(response.credential);
    //convert the exp token to 12 hours instead of 1 hour;
    userObject.exp = userObject.exp*1000 + 3600000*11;
    
    let { name, email, picture, exp } = userObject;
    await setUser({ name, email, picture, exp });
    
    const user = await fetch("http://localhost:3001/api/user", {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ name, email, picture }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  function handleLogout() {
    setUser({});
  }


  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "5164407673-c0gg5ta1fjc4335k0174hd6hrp2oavs0.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
  }, []);

  return (
    <div className="App">
      <React.StrictMode>
        <MainNav user={user} handleLogout={handleLogout}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route path="/" element={<MainPage />} />
              <Route path="categories" element={<Categories />} />
              <Route path="mygames" element={<MyGames />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="clues" element={<Clues />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>

    </div>
  );
}

export default App;
