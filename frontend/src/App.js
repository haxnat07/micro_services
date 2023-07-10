import { useState } from "react";
import { Routes, Route } from "react-router-dom";

/* Components */
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

/* Pages */
import Login from "./scenes/screens/LoginScreen";
import Register from "./scenes/screens/RegisterScreen";
import Home from "./scenes/screens/Home";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


/* REACT - REDUX */
import { useDispatch, useSelector } from "react-redux";

function App() {
    /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      
        <CssBaseline />
        <div className="app">
          <main className="content">
        {userInfo ? (
          <Topbar setIsSidebar={setIsSidebar} />
          ) : (<></>)}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            </main>
        </div>
      
    </ColorModeContext.Provider>
  );
}

export default App;
