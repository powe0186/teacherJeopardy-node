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
    localStorage.setItem('TJToken', response.credential);
    var userObject = await jwt_decode(response.credential);
    let { name, email, picture, exp } = userObject;
    //add 12 hours to the token's exp time.
    await setUser({ name, email, picture, exp });
    const user = fetch("http://localhost:3001/api/user", {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ name, email, picture }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  function handleLogout() {
    setUser({});
    localStorage.removeItem('TJToken');
  }


  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "5164407673-c0gg5ta1fjc4335k0174hd6hrp2oavs0.apps.googleusercontent.com",
      callback: handleCallbackResponse
    }, []);

    if (localStorage.TJToken) {
      var userObject = jwt_decode(localStorage.TJToken);
      let { name, email, picture, exp } = userObject;
      let date = new Date()

      // Check to see if the token is expired. If not, set User using the token in localStorage.
      if (exp * 1000 > date.getTime()) {
        setUser({ name, email, picture, exp });
      } else {
        setUser({});
        localStorage.removeItem('TJToken');
      }
      
    }
  }, []);

  return (
    <div className="App">
      <React.StrictMode>
        <MainNav user={user} handleLogout={handleLogout} />
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
