import { AppBar, Button, Toolbar, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { changeLoginText, accessTokenSelector } from "../../store/RecoilState";
import { useRecoilState } from "recoil";
import logo from "../../assets/logo.png";

const MainLayout = () => {
  const navigate = useNavigate();
  const [getLoginText] = useRecoilState(changeLoginText);
  const [token, setToken] = useRecoilState(accessTokenSelector);

  async function logout() {
    if (token) {
      setToken(null);
      localStorage.clear();
      await api.get({ path: "/user/logout" });
      return navigate("/");
    }
    return navigate("/auth");
  }
  return (
    <AppBar sx={{ backgroundColor: "rgb(29, 81, 131)" }}>
      <Toolbar>
        <IconButton onClick={() => navigate("/")}>
          <img src={logo} style={{ height: 50 }} alt="logo" />
        </IconButton>
        <Button
          variant="outlined"
          onClick={async () => {
            await logout();
          }}>
          {getLoginText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainLayout;
