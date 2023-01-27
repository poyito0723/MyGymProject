import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../services/authSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userToLogin, setuserToLogin] = useState({
    email: null,
    pass: null,
  });

  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleOnChange = (e) => {
    setuserToLogin({
      ...userToLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClickLoging = (e) => {
    if (userToLogin.email !== null) {
      dispath(doLogin(userToLogin));
      navigate("/landing");
    } else {
      alert("ingresa datos correctos");
    }
  };

  return (
    <div className="bg-white px-14 py-20 rounded-3xl border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Bienvenido</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Bienvenido Por favor ingresa tus datos
      </p>
      <div className="mt-8 ">
        <div>
          <label className="text-lg font-medium ">Correo</label>
          <input
            name="email"
            onChange={handleOnChange}
            placeholder="Ingresa tu Correo"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            type="text"
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            name="pass"
            onChange={handleOnChange}
            placeholder="Ingresa tu Contraseña"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            type="password"
          />
        </div>
        <div className="mt-8 flex-row justify-between items-center">
          <div>
            <input type="checkbox" id="remember"></input>
            <label
              className="ml-2 mb-2 font-medium text-base"
              htmlFor="remember"
            >
              Recuerdame por 30 días
            </label>
          </div>
          <button className=" mt-3 font-medium text-base text-violet-500">
            ¿Olvidaste la contraseña?
          </button>
        </div>
        <div className="mt-8  flex justify-center items-center">
          <button
            className="w-full bg-violet-500 rounded-xl text-white text-lg font-bold py-3 px-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out"
            onClick={handleOnClickLoging}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
