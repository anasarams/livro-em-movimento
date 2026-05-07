export default function Noticias() {
  return (
    <div>

      <section className="bg-[#C1DFF8] py-12 px-10 text-center">
        <h2 className="font-[Gloock] text-5xl font-bold mb-3">Notícias</h2>
        <p className="text-gray-600 text-lg">
          Acompanhe as novidades do projeto Livro em Movimento
        </p>
      </section>

      <section className="bg-[#C1DFF8] px-10 pb-16 flex justify-center">
        <div className="w-full max-w-4xl bg-[#1B56AE] rounded-[20px] py-16 flex items-center justify-center shadow-2xl">
          <h3 className="font-[Gloock] text-white text-4xl font-bold">
            Últimas Atualizações
          </h3>
        </div>
      </section>

      <section className="px-10 py-20 flex flex-col md:flex-row items-start gap-12 bg-white">

        <div className="max-w-xl">

          <div className="mb-10">
            <h3 className="font-[Gloock] text-xl font-bold mb-4">Evento</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Novas ações estão sendo planejadas para ampliar o acesso à leitura
            em comunidades. Em breve teremos novidades!
            </p>
            <h4 className="font-[Gloock] text-lg font-bold mb-4">Data</h4>
            <p className="text-gray-700 leading-relaxed">
               Novas ações estão sendo planejadas para ampliar o acesso à leitura
            em comunidades. Em breve teremos novidades!
            </p>
          </div>

          <div className="mb-10">
            <h3 className="font-[Gloock] text-xl font-bold mb-4">Local</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Novas ações estão sendo planejadas para ampliar o acesso à leitura
            em comunidades. Em breve teremos novidades!
            </p>
          </div>

        </div>

        <div className="w-full md:w-[380px] bg-[#1B56AE] rounded-[20px] shadow-xl p-8 text-white shrink-0">
          <h3 className="font-[Gloock] text-3xl font-bold mb-4">
            Futuros Projetos
          </h3>
          <p className="leading-relaxed">
            Novas ações estão sendo planejadas para ampliar o acesso à leitura
            em comunidades. Em breve teremos novidades!
          </p>
        </div>

      </section>

    </div>
  );
}

