export default function Hero() {
  return (
    <section className="bg-[#C1DFF8] px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-xl">
    <h2 className="font-[Gloock] text-5xl font-bold mb-6">
       Transformando vidas através da leitura
      </h2>

        <p className="text-gray-700 mb-8 text-lg">
          O projeto Livro em Movimento promove o acesso à leitura e educação
          para comunidades carentes.
        </p>

        <div className="flex gap-4">
          <button className="font-[Gloock] bg-white text-[#1B56AE] px-6 py-2 rounded-lg shadow">
            Doar
          </button>

          <button className="font-[Gloock] bg-white text-[#1B56AE] px-6 py-2 rounded-lg shadow">
            Contato
          </button>
        </div>
      </div>

      <div className="w-full md:w-[500px] h-[250px] bg-[#1B56AE] rounded-[35px] shadow-2xl"></div>
    </section>
  )
}