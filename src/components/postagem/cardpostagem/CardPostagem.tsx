import { Link } from "react-router-dom";
import type Postagem from "../../../models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagensProps) {
  return (
    <div
      className="border-argila-escuro border 
                 flex flex-col rounded overflow-hidden justify-between m-4"
    >
      <div>
        {}
        <div className="flex w-full bg-argila-escuro py-2 px-4 items-center gap-4">
          <img
            src={postagem.usuario?.foto}
            className="h-12 rounded-full"
            alt={postagem.usuario?.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase text-white">
            {postagem.usuario?.nome}
          </h3>
        </div>

        {}
        <div className="p-4 flex flex-col gap-2">
          <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
          <p>{postagem.texto}</p>
          <p>Tema: {postagem.tema?.descricao}</p>
          <p className="text-sm">
            Data:{" "}
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(postagem.data))}
          </p>
        </div>
      </div>

      {}
      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full text-white bg-argila-escuro
                    hover:bg-terra-escuro flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center py-2"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
