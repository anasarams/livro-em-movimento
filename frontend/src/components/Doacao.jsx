export default function Doacao() {
  return (
    <div className="bg-gray-100 min-h-screen px-10 py-10">

      <h1 className="text-4xl font-bold mb-4">
        Doe Livros
      </h1>

      <p className="text-sm max-w-lg mb-10">
        O projeto Livro em Movimento promove o acesso à leitura e
        educação para comunidades carentes.
      </p>

      <div className="flex gap-20">

        <div className="bg-white w-80 rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Formulário de Doação
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Nome Completo"
              className="bg-gray-300 rounded-full px-4 py-2 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-gray-300 rounded-full px-4 py-2 outline-none"
            />

            <input
              type="text"
              placeholder="Telefone"
              className="bg-gray-300 rounded-full px-4 py-2 outline-none"
            />

            <button className="bg-blue-700 text-white py-2 rounded-full mt-4">
              Enviar
            </button>

          </form>

        </div>

        <div className="bg-blue-400 w-80 rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Doação Via Pix
          </h2>

          <p className="text-sm mb-6">
            Faça sua contribuição usando nossa chave Pix.
          </p>

          <div className="bg-white rounded-2xl p-6">
            contato@livrosemmovimento.org.br
          </div>

        </div>

      </div>

    </div>
  )
}