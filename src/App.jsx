import { Routes, Route, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Landing from "./components/Landing";
import Users from "./components/users/Users";
import Socios from "./components/Socios";
import Pagos from "./components/Pagos";
import Employes from "./components/Employes";
import { useEffect } from "react";
import Login from "./components/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "./services/authSlice";
import Navigation from "./components/Navigation";

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
    <div >
      <Navigation user={user} logout={logout} />
      <Routes  >
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

export default App;
