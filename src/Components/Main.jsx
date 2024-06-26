import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(0);
    const [Email, setEmail] = useState ('')
    const [listaContatos, setListaContatos] = useState ([]);
    const registrar = (event) => {
        event.preventDefault();
       alert("React.js");

       setListaContatos([...listaContatos,
        { 
           nomeSalvo: nome,
           telefoneSalvo: telefone,
           EmailSalvo: Email,
         }
      ]);
    };

    console.table(listaContatos);

    return (
        <main>
            <form>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />

                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
                />
          <label htmlFor="Email">E-mail:</label>
                <input
                    type="text"
                    name="Email"
                    id="Email"
                    value={Email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button type="submit">Salvar</button>
            </form>
        </main>
    );
}