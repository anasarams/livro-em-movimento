export default function Doacao() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen px-10 py-6">

      <div className="mb-8">

        <h1 className="font-[Gloock] text-[42px] font-bold mb-2">
          Doe Livros
        </h1>

        <p className="text-[12px] leading-[16px] text-black max-w-[500px]">
          O projeto Livro em Movimento promove o acesso à leitura e
          educação para comunidades carentes, espalhando conhecimento e
          esperança.
        </p>

      </div>

      <div className="flex justify-center gap-28 items-start mt-8">

        <div className="bg-white w-[330px] rounded-[22px] shadow-md px-8 py-8">

          <h2 className="font-[Gloock] text-[18px] font-bold mb-7">
            Formulário de Doação
          </h2>

          <form className="flex flex-col gap-4">

            <div>
              <label className="text-[10px] block mb-1">
                Nome Completo*
              </label>

              <input
                type="text"
                className="w-full h-[26px] bg-[#D9D9D9] rounded-full px-4 outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] block mb-1">
                Email
              </label>

              <input
                type="email"
                className="w-full h-[26px] bg-[#D9D9D9] rounded-full px-4 outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] block mb-1">
                Telefone
              </label>

              <input
                type="text"
                className="w-full h-[26px] bg-[#D9D9D9] rounded-full px-4 outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] block mb-1">
                Endereço
              </label>

              <input
                type="text"
                className="w-full h-[26px] bg-[#D9D9D9] rounded-full px-4 outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] block mb-1">
                Quantidade de Livros
              </label>

              <input
                type="text"
                className="w-full h-[26px] bg-[#D9D9D9] rounded-full px-4 outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1B56AE] text-white text-[10px] h-[28px] rounded-full mt-4"
            >
              Enviar Solicitação de Doação
            </button>

          </form>

        </div>

        <div className="bg-[#3E6485] w-[310px] h-[300px] rounded-[24px] shadow-xl px-8 py-8">

          <h2 className="font-[Gloock] text-[20px] font-bold text-white mb-6">
            Doação via Pix
          </h2>

          <p className="text-[11px] leading-[16px] text-white mb-10">
            Prefere fazer uma doação em dinheiro? Use nossa chave Pix
            para contribuir diretamente com o projeto.
          </p>

          <div className="bg-[#AAB9C5] w-[190px] h-[90px] rounded-[18px] shadow-md px-5 py-4">

            <h3 className="font-[Gloock] text-[13px] font-bold mb-4 text-black">
              Chave Pix
            </h3>

            <p className="text-[10px] text-black break-all">
              contato@livrosemmovimento.org.br
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}