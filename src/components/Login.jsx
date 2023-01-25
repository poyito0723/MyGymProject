import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex justify-center items-center lg:w-1/2">
        <LoginForm />
      </div>
      <div className=" hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div
          className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500
         rounded-full"
        />
        <div
          className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg
        "
        />
      </div>
    </div>
  );
}

export default Login;
