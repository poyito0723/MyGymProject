import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Landing from "./components/Landing";
import Users from "./components/Users";
import Socios from "./components/Socios";
import Pagos from "./components/Pagos";
import Employes from "./components/Employes";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "./services/authSlice";

const pages = ["Usuarios", "Clientes", "Pagos"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const dispath = useDispatch();

  const logout = () => {
    dispath(doLogout());
    navigate("/login");
  };

  useEffect(function () {
    if (user.email == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navigation user={user} logout={logout} />

      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={!!user.email} />}>
          <Route path="/users" element={<Users />} />
          <Route path="/employes" element={<Employes />} />
          <Route path="/socios" element={<Socios />} />
          <Route path="/pagos" element={<Pagos />} />
        </Route>
      </Routes>
    </div>
  );
}

function Navigation({ user, login, logout }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    logout();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {user.email !== null ? (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/users">
                      <Button sx={{ color: "black" }}>Usuarios</Button>
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/socios">
                      <Button sx={{ color: "black" }}>Socios</Button>
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/pagos">
                      <Button sx={{ color: "black" }}>Pagos</Button>
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/employes">
                      <Button sx={{ color: "black" }}>EMPLEADOS</Button>
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            ""
          )}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {user.email !== null ? (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/users">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Usuarios
                </Button>
              </Link>
              <Link to="/socios">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Socios
                </Button>
              </Link>
              <Link to="/pagos">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Pagos
                </Button>
              </Link>
              <Link to="/employes">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  EMPLEADOS
                </Button>
              </Link>
            </Box>
          ) : (
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
          )}

          {user.email !== null ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Perfil</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Cerrar Sesión</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link to="/login">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                login
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
