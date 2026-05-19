export default function Doacao() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen px-10 py-24">

      <div className="mb-12">

        <h1 className="font-[Gloock] text-[52px] font-bold mb-4">
          Doe Livros
        </h1>

        <p className="text-[18px] leading-[30px] text-black max-w-[700px]">
          O projeto Livro em Movimento promove o acesso à leitura e
          educação para comunidades carentes, espalhando conhecimento
          e esperança.
        </p>

      </div>

      <div className="flex justify-center gap-32 items-start mt-16 flex-wrap">

        {/* Formulário */}
        <div className="bg-white w-[450px] rounded-[30px] shadow-md px-12 py-12">

          <h2 className="font-[Gloock] text-[30px] font-bold mb-10">
            Formulário de Doação
          </h2>

          <form className="flex flex-col gap-6">

            <div>
              <label className="text-[14px] block mb-2">
                Nome Completo*
              </label>

              <input
                type="text"
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none"
              />
            </div>

            <div>
              <label className="text-[14px] block mb-2">
                Email
              </label>

              <input
                type="email"
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none"
              />
            </div>

            <div>
              <label className="text-[14px] block mb-2">
                Telefone
              </label>

              <input
                type="text"
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none"
              />
            </div>

            <div>
              <label className="text-[14px] block mb-2">
                Endereço
              </label>

              <input
                type="text"
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none"
              />
            </div>

            <div>
              <label className="text-[14px] block mb-2">
                Quantidade de Livros
              </label>

              <input
                type="text"
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1B56AE] text-white text-[14px] h-[48px] rounded-full mt-4 hover:bg-[#15458A] transition"
            >
              Enviar Solicitação de Doação
            </button>

          </form>

        </div>

        {/* Pix */}
        <div className="bg-[#3E6485] w-[430px] h-[420px] rounded-[30px] shadow-xl px-12 py-12">

          <h2 className="font-[Gloock] text-[32px] font-bold text-white mb-8">
            Doação via Pix
          </h2>

          <p className="text-[16px] leading-[28px] text-white mb-14">
            Prefere fazer uma doação em dinheiro?
            Use nossa chave Pix para contribuir diretamente com o projeto.
          </p>

          <div className="bg-[#AAB9C5] w-[320px] h-[130px] rounded-[22px] shadow-md px-6 py-6">

            <h3 className="font-[Gloock] text-[22px] font-bold mb-5 text-black">
              Chave Pix
            </h3>

            <p className="text-[14px] text-black">
              contato@livrosemmovimento.org.br
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}