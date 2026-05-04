export default function MissionSection() {
  return (
    <section className="px-10 py-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-[500px] h-[250px] bg-[#1B56AE] rounded-[35px] shadow-2xl"></div>

      <div className="max-w-2xl">
        <h2 className="font-[Gloock] text-5xl font-bold mb-6">Nossa missão</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          O Livro em Movimento nasceu da vontade de democratizar o acesso à
          leitura e educação.
        </p>

        <button className="bg-[#1B56AE] text-white px-8 py-3 rounded-xl shadow">
          Conheça nossa história
        </button>
      </div>
    </section>
  )
}