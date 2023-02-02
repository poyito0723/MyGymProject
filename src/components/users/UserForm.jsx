import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function UserForm() {
  const [newUser, setnewUser] = useState({
    nombre: null,
    apellidoPaterno: null,
    apellidoMaterno: null,
    correo: null,
    pass: null,
    tipoUsuario: null,
  });

  const handleOnChange = (e) => {
    setnewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = () => {
    console.log(newUser);
  };

  return (
    <div className="container">
      <label className="text-lx   ">Ingrese los datos del nuevo usuario</label>
      <div className="mt-3">
        <label className="text-lg font-medium ">Nombre</label>
        <input
          onChange={handleOnChange}
          name="nombre"
          placeholder="Nombre del usuario"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          type="text"
        />
      </div>
      <div>
        <label className="text-lg font-medium ">Apellido Paterno</label>
        <input
          onChange={handleOnChange}
          name="apellidoPaterno"
          placeholder="Apellido Materno del usuario"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          type="text"
        />
      </div>
      <div>
        <label className="text-lg font-medium ">Apellido Materno</label>
        <input
          onChange={handleOnChange}
          name="apellidoMaterno"
          placeholder="Apellido Paterno del usuario"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          type="text"
        />
      </div>
      <div>
        <label className="text-lg font-medium ">Correo</label>
        <input
          onChange={handleOnChange}
          name="correo"
          placeholder="Correo Usuario"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          type="text"
        />
      </div>
      <div>
        <label className="text-lg font-medium ">Contraseña</label>
        <input
          onChange={handleOnChange}
          name="pass"
          placeholder="Contraseña Usuario"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          type="text"
        />
      </div>
      <div>
        <label className="text-lg font-medium ">Tipo de Usuario</label>
        <input
          onChange={handleOnChange}
          name="tipoUsuario"
          placeholder="Tipo Usuario"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          type="text"
        />
      </div>
      <div className="mt-8  flex justify-center items-center">
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={handleAddUser}
        >
          GUARDAR USUARIO
        </Button>
      </div>
    </div>
  );
}

export default UserForm;
