import { Link} from "react-router-dom";
function Login() {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="border-2 border-argila-escuro rounded p-2"
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
                        />
                    </div>
                    <button 
                        type='submit' 
                        className="rounded bg-argila-escuro flex justify-center
                                   hover:bg-terra-escuro text-white w-1/2 py-2">
                                         <span>Entrar</span>
                       
                    </button>

                    <hr className="border-argila-escuro w-full" />

                   <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-acento-ouro hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                 <div className="bg-[url('https://ik.imagekit.io/k6kki72wv/Login-pana%20(1).png')] lg:block hidden bg-no-repeat 
                            w-full min-h-screen bg-cover bg-center"
                ></div>
            </div>
        </>
    );
}

export default Login;