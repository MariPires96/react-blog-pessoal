function FormPostagem() {
  return (
    <div className="container flex flex-col  mx-auto items-center">
      <h1 className="text-4xl text-center my-8">Cadastrat Postagem</h1>

      <form className="flex flex-col w-1/2  gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Título da Postagem</label>
          <input
            type="text"
            placeholder="Título"
            name="titulo"
            required
            className="border-2 border-argila-escuro rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="texto">Texto da Postagem</label>
          <textarea
            placeholder="Texto"
            name="texto"
            required
            className="border-2 border-argila-escuro rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tema da Postagem</p>
          <select
            name="tema"
            id="tema"
            className="border p-2 border-argila-escuro rounded"
          >
            <option value="" selected disabled>
              Selecione um Tema
            </option>
            <>
              <option>tema1</option>
            </>
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-argila-escuro hover:bg-terra-escuro text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
