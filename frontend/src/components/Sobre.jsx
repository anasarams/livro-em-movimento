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

  const images = [foto1, foto2, foto3]

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
    <div>

   
      <section className="bg-[#C1DFF8] py-12 px-10 text-center">

        <h2 className="font-[Gloock] text-5xl font-bold mb-3">
          Sobre Nós
        </h2>

        <p className="text-gray-600 text-lg">
          Conheça a história, missão e valores do projeto Livro em Movimento
        </p>

      </section>


      <section className="bg-[#C1DFF8] px-10 pb-16 flex justify-center">

        <img
          src={voluntariosImage}
          alt="Voluntários do projeto"
          className="w-full max-w-4xl h-[400px] object-cover rounded-[20px] shadow-2xl"
        />

      </section>

      <section className="px-10 py-20 flex flex-col md:flex-row items-start gap-12 bg-white">

      
        <div className="w-full md:w-[380px] h-[320px] rounded-[20px] shadow-xl overflow-hidden shrink-0">

          <img
            src={images[currentImage]}
            alt="Projeto Livro em Movimento"
            className="w-full h-full object-cover transition duration-700"
          />

        </div>

       
        <div className="max-w-xl">

         <h3 className="font-[Gloock] text-5xl font-bold mb-6">
  Nossa História
</h3>

<p className="text-gray-700 text-lg leading-relaxed mb-4">
  A Associação Cultural Livro em Movimento, é uma ONG que tem como missão o incentivo à leitura, a Educação, a Cultura e Meio ambiente. Recebemos doações de livros, revistas, apostilas e outros objetos informacionais; e doamos estes materiais para todos os tipos de usuários que frequentam a nossa sede.
</p>

        </div>

      </section>

     
      <section className="px-10 py-16 bg-gray-50">

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="font-[Gloock] text-3xl font-bold mb-4">
              Nossa missão
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Democratizar o acesso à leitura e à educação, promovendo inclusão social através dos livros.
            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="font-[Gloock] text-3xl font-bold mb-4">
              Nossa Visão
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Ser referência nacional em projetos de incentivo à leitura.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}