import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState, useEffect } from "react";

/* REACT ROUTER */
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

/* REACT - REDUX */
import { useDispatch, useSelector } from "react-redux";

/* ACTION CREATORS */
import { logout } from "../../actions/userActions";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

    /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;
  
    /* HANDLER */
    const dispatch = useDispatch();
  
    const logoutHandler = () => {
      dispatch(logout());
    };


   /* Redirect logout user */
   {/*}  useEffect(() => {
      if (logout) {
        navigate("/");
      }
    }, [logout]); */}

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
      {/*}  <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      {/*}  <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
          </IconButton> */}
        <IconButton data-toggle="tooltip" data-placement="bottom" title="Logout">
        <Link to="/">
          <PersonOutlinedIcon onClick={logoutHandler}/>
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
