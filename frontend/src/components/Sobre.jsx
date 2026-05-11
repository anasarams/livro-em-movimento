import { useState, useEffect } from 'react'

import voluntariosImage from '../assets/1.jpeg'

import foto1 from '../assets/4.jpeg' 
import foto2 from '../assets/2.jpeg' 
import foto3 from '../assets/3.jpeg' 
import foto4 from '../assets/5.jpeg' 
import foto5 from '../assets/6.jpeg' 
import foto6 from '../assets/7.jpeg' 
import foto7 from '../assets/8.jpeg'
import foto8 from '../assets/9.jpeg'

export default function Sobre() {

const images = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8
]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#F8F8F8]">

      {/* HERO */}
      <section className="px-10 py-16 flex flex-col md:flex-row items-center justify-center gap-16">

        <div>
          <h2 className="font-[Gloock] text-5xl mb-6">
            Sobre Nós
          </h2>

          <p className="text-gray-600 text-lg max-w-sm leading-relaxed">
            Conheça a história, missão e valores
            do projeto livro em movimento
          </p>
        </div>

        <img
          src={voluntariosImage}
          alt="Voluntários"
          className="w-[420px] h-[280px] object-cover rounded-[30px] shadow-lg"
        />

      </section>

      {/* HISTÓRIA */}
      <section className="px-10 pb-20">

        <div className="bg-[#C1DFF8] rounded-[30px] p-10 shadow-lg max-w-6xl mx-auto">

          <h3 className="font-[Gloock] text-3xl mb-8">
            Nossa História
          </h3>

          <div className="flex flex-col lg:flex-row gap-10 items-center">

            <div className="w-full lg:w-[350px] h-[300px] rounded-[20px] overflow-hidden shrink-0">

              <img
                src={images[currentImage]}
                alt="Projeto Livro em Movimento"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="text-gray-700 leading-relaxed space-y-5">

              <p>
               A Associação Cultural Livro em Movimento, é uma ONG que tem como missão o incentivo à leitura, a Educação, a Cultura e Meio ambiente. Recebemos doações de livros, revistas, apostilas e outros objetos informacionais; e doamos estes materiais para todos os tipos de usuários que frequentam a nossa sede. Incentivamos a leitura com às doações de livros e com projetos que criamos ao longo do tempo, sempre partindo da leitura e do incentivo a leitura. Temos alguns projetos já implantados, como o Leitura cidadã, que consiste na montagem de salas de leituras em abrigos, comunidades e presídios, com a figura do mediador ou mediadora de leitura que deverá mostrar através de palestras a importância da leitura como fato transformador de vidas. Temos já implementado também, o Intervenções 
               literárias que através da contação de
                histórias e leituras dramatizadas de 
                vários autores e doação de livros procuramos
                 incentivar a leitura.
              </p>

              

            </div>

          </div>

        </div>

      </section>

      {/* MISSÃO E VISÃO */}
      <section className="px-10 pb-20">

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          <div className="bg-white rounded-[25px] p-10 shadow-md">

            <h3 className="font-[Gloock] text-4xl mb-6">
              Nossa missão
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Democratizar o acesso à leitura e à educação,
              promovendo inclusão social através da distribuição
              de livros e da criação de espaços de leitura em
              comunidades carentes.
            </p>

          </div>

          <div className="bg-white rounded-[25px] p-10 shadow-md">

            <h3 className="font-[Gloock] text-4xl mb-6">
              Nossa Visão
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Ser referência nacional em projetos de incentivo
              à leitura, criando uma rede de pontos de leitura
              acessíveis em todo o Brasil.
            </p>

          </div>

        </div>

      </section>

    {/* VALORES */}
<section className="px-6 md:px-10 pb-24">

  <h2 className="font-[Gloock] text-5xl text-center mb-16">
    Nossos valores
  </h2>

  <div className="flex flex-wrap justify-center gap-6">

    {/* CARD 1 */}
    <div className="bg-[#C1DFF8] w-[180px] h-[360px] rounded-[25px] p-7 shadow-md">

      <h3 className="font-[Gloock] text-[28px] leading-none mb-10">
        Amor <br />
        pela <br />
        leitura
      </h3>

      <p className="text-gray-700 text-[20px] leading-relaxed">
        Acreditamos no poder transformador dos livros e da educação.
      </p>

    </div>

    {/* CARD 2 */}
    <div className="bg-[#355C84] text-white w-[180px] h-[360px] rounded-[25px] p-7 shadow-md">

      <h3 className="font-[Gloock] text-[28px] leading-none mb-10">
        Inclusão <br />
        Social
      </h3>

      <p className="text-[20px] leading-relaxed">
        Trabalhamos para democratizar o acesso ao conhecimento.
      </p>

    </div>

    {/* CARD 3 */}
    <div className="bg-[#C1DFF8] w-[180px] h-[360px] rounded-[25px] p-7 shadow-md">
   <h3 className="font-[Gloock] text-[28px] leading-none mb-10">
      Compro<br />
       misso
      </h3>

      <p className="text-gray-700 text-[20px] leading-relaxed">
        Dedicação total à nossa missão de transformar vidas.
      </p>

    </div>

    {/* CARD 4 */}
    <div className="bg-[#355C84] text-white w-[180px] h-[360px] rounded-[25px] p-7 shadow-md">

      <h3 className="font-[Gloock] text-[28px] leading-none mb-10">
      Transpa<br />
     rência
     </h3>
      <p className="text-[20px] leading-relaxed">
        Prestamos contas de todas as nossas ações e recursos.
      </p>

    </div>

  </div>

</section>

    </div>
  )
}