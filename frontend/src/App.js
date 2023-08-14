import { useState } from "react";
import { Routes, Route } from "react-router-dom";

/* Components */
import Navbar from './components/Navbar'

/* Pages */
//import Login from "./scenes/screens/LoginScreen";
//import Register from "./scenes/screens/RegisterScreen";
//import Home from "./scenes/screens/Home";

import Home from './containers/Home';
import Login from './containers/Login'
import Signup from './containers/Signup'
import Activate from './containers/Activate'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'

import { CssBaseline, ThemeProvider } from "@mui/material";


/* REACT - REDUX */
import { useDispatch, useSelector } from "react-redux";

function App() {
    /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
    const userLogin = useSelector(state => state.auth.user);

   // const { userInfo } = userLogin;

  return (
      <>
        <CssBaseline />
        <div className="app">
          <main className="content">
      {/*}  {userInfo ? (
          <Topbar setIsSidebar={setIsSidebar} />
      ) : (<></>)} */}
      <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
              <Route path="/activate/:uid/:token" element={<Activate />} />
            </Routes>
            </main>
        </div>
        </>
  );
}

export default App;
