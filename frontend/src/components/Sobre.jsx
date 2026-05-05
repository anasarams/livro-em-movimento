export default function Sobre() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-[#C1DFF8] py-12 px-10 text-center">
        <h2 className="font-[Gloock] text-5xl font-bold mb-3">Sobre Nós</h2>
        <p className="text-gray-600 text-lg">
          Conheça a história, missão e valores do projeto Livro em Movimento
        </p>
      </section>

      {/* Banner Voluntários */}
      <section className="bg-[#C1DFF8] px-10 pb-16 flex justify-center">
        <div className="w-full max-w-4xl bg-[#1B56AE] rounded-[20px] py-16 flex items-center justify-center shadow-2xl">
          <h3 className="font-[Gloock] text-white text-4xl font-bold">
            Voluntários do projeto
          </h3>
        </div>
      </section>

      {/* Nossa História */}
      <section className="px-10 py-20 flex flex-col md:flex-row items-start gap-12 bg-white">
        <div className="w-full md:w-[380px] h-[320px] bg-[#1B56AE] rounded-[20px] shadow-xl flex items-center justify-center shrink-0">
          <span className="font-[Gloock] text-white text-3xl">Livros</span>
        </div>

        <div className="max-w-xl">
          <h3 className="font-[Gloock] text-xl font-bold mb-4">Nossa História</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            O projeto Livro em Movimento nasceu em 2018, fruto da vontade de um grupo de
            educadores e apaixonados por leitura que identificaram a carência de acesso a
            livros em comunidades vulneráveis.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            O que começou como uma pequena iniciativa de arrecadação de livros em um bairro
            da periferia de São Paulo, rapidamente se transformou em um movimento social que
            hoje atende centenas de famílias em diversos estados do Brasil.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Ao longo desses anos, distribuímos mais de 10 mil livros, criamos 50 pontos de
            leitura comunitários e formamos uma rede de 150 voluntários dedicados. Mas mais
            do que os números, transformamos vidas através do acesso ao conhecimento e à cultura.
          </p>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="px-10 py-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-5 bg-gray-400 rounded-sm shrink-0"></div>
              <h3 className="font-[Gloock] text-3xl font-bold">Nossa missão</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Democratizar o acesso à leitura e à educação, promovendo a inclusão social
              através da distribuição de livros e criação de espaços de leitura em
              comunidades carentes, contribuindo para a formação de cidadãos críticos e
              conscientes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-5 bg-gray-400 rounded-sm shrink-0"></div>
              <h3 className="font-[Gloock] text-3xl font-bold">Nossa Visão</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser referência nacional em projetos de incentivo à leitura, criando uma rede
              de pontos de leitura que alcance todas as regiões do Brasil, garantindo que
              cada pessoa, independente de sua condição social, tenha acesso a livros e
              conhecimento.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}