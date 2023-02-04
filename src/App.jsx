import { Routes, Route, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "./services/auth/authSlice";
import Navigation from "./components/Navigation";
import {
  PagosPage,
  SociosPage,
  EmployesPage,
  LandingPage,
  LoginPage,
  AddUserPage,
  UsersPage,
} from "./pages/index";

function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const dispath = useDispatch();

  const logout = () => {
    dispath(doLogout());
    navigate("/login");
  };

  useEffect(function () {
    if (user.usuario == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navigation user={user} logout={logout} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user.usuario} />}>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/employes" element={<EmployesPage />} />
          <Route path="/socios" element={<SociosPage />} />
          <Route path="/pagos" element={<PagosPage />} />
          <Route path="/adduser" element={<AddUserPage />} />
          <Route path="/landing" element={<LandingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
