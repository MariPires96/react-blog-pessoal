import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { ClipLoader } from "react-spinners";

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuariologin, setusuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setusuarioLogin({
      ...usuariologin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuariologin);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
        <form
          className="flex justify-center items-center flex-col w-1/2 gap-4"
          onSubmit={login}
        >
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="border-2 border-argila-escuro rounded p-2"
              value={usuariologin.usuario}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-argila-escuro rounded p-2"
              value={usuariologin.senha}
              onChange={atualizarEstado}
            />
          </div>
          <button
            type="submit"
            className="rounded bg-argila-escuro flex justify-center hover:bg-terra-escuro text-white w-1/2 py-2"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-argila-escuro w-full" />

          <p>
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-acento-ouro hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div
          className="bg-[url('https://ik.imagekit.io/k6kki72wv/login?updatedAt=1769012857131')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"
        ></div>
      </div>
    </>
  );
}

export default Login;