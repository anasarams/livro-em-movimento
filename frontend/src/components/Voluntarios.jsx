export default function Voluntarios() {
  return (
    <div>

      <section className="bg-[#C1DFF8] py-12 px-10 text-center">
        <h2 className="font-[Gloock] text-5xl font-bold mb-3">Voluntários</h2>
        <p className="text-gray-600 text-lg">
          Conheça quem faz parte do projeto Livro em Movimento
        </p>
      </section>

      <section className="bg-[#C1DFF8] px-10 pb-16 flex justify-center">
        <div className="w-full max-w-4xl bg-[#1B56AE] rounded-[20px] py-16 flex items-center justify-center shadow-2xl">
          <h3 className="font-[Gloock] text-white text-4xl font-bold">
            Nossa Equipe
          </h3>
        </div>
      </section>

      <section className="px-10 py-20 flex flex-col md:flex-row items-start gap-12 bg-white">

        <div className="max-w-xl">

          <h3 className="font-[Gloock] text-xl font-bold mb-6">Equipe</h3>

          <div className="flex gap-6 mb-10">

            <div className="bg-white shadow-md rounded-[12px] p-4 text-center w-[120px]">
              <div className="w-full h-[80px] bg-gray-300 mb-3 rounded"></div>
              <p className="text-sm">Nome</p>
            </div>

            <div className="bg-white shadow-md rounded-[12px] p-4 text-center w-[120px]">
              <div className="w-full h-[80px] bg-gray-300 mb-3 rounded"></div>
              <p className="text-sm">Nome</p>
            </div>

            <div className="bg-white shadow-md rounded-[12px] p-4 text-center w-[120px]">
              <div className="w-full h-[80px] bg-gray-300 mb-3 rounded"></div>
              <p className="text-sm">Nome</p>
            </div>

          </div>

          <h3 className="font-[Gloock] text-xl font-bold mb-4">
            Faça parte da nossa equipe!
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <button className="bg-gray-300 px-8 py-3 rounded-full">
          </button>

        </div>

        <div className="w-full md:w-[380px] bg-[#3E5F7C] rounded-[20px] shadow-xl p-8 text-white shrink-0">

          <h3 className="font-[Gloock] text-2xl font-bold mb-4">
            História da Equipe
          </h3>

          <p className="leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

        </div>

      </section>

    </div>
  )
}