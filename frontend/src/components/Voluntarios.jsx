import { useState } from 'react'
import joelpic from '../assets/joelpic.jpg'

export default function Voluntarios() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    area_interesse: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const response = await fetch('http://127.0.0.1:8000/voluntarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          area_interesse: [formData.area_interesse],
        }),
      })

      if(response.ok) {

        alert('Solicitação enviada com sucesso!')
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          area_interesse: '',
        })
      } 
      else {
        alert('Erro ao enviar.')
      }

    } catch (error) {

      console.error(error)
      alert('Erro no servidor.')

    }
  }
  return (
    <div className="bg-[#f8f8f8] min-h-screen px-6 md:px-12 pt-36 pb-16">

      {/* Título */}
      <h1 className="font-[Gloock] text-4xl md:text-6xl font-bold text-center mb-20">
        Voluntários
      </h1>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16">

        {/* Lado Esquerdo */}
        <div className="flex flex-col items-center lg:items-start">

          {/* Equipe */}
          <div className="w-full flex flex-col items-center">

            <h2 className="font-[Gloock] text-3xl md:text-5xl font-bold text-center mb-10">
              Equipe
            </h2>

            {/* Card */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-xl w-[260px] hover:scale-105 transition duration-300">

              <img
                src={joelpic}
                alt="Joel Prata"
                className="w-full h-[320px] object-cover"
              />

              <div className="py-6 px-4 text-center">

                <p className="font-[Gloock] text-4xl leading-none mb-2">
                  Joel
                </p>

                <p className="text-sm text-gray-500">
                  CEO da ONG Livro em Movimento
                </p>

              </div>

            </div>

          </div>

          {/* Texto */}
          <div className="max-w-[520px] mt-16 text-center lg:text-left">

            <h2 className="font-[Gloock] text-4xl md:text-6xl leading-tight font-bold mb-6">
              Faça parte da nossa equipe!
            </h2>

            <p className="text-base leading-8 text-gray-700">
              Faça parte do projeto Livro em Movimento e ajude a levar
              educação, cultura e leitura para diversas comunidades.
              Toda ajuda faz diferença e pode transformar vidas através
              do conhecimento.
            </p>

          </div>

          {/* Formulário */}
          <div className="bg-white w-full max-w-[500px] rounded-[28px] shadow-xl px-8 md:px-10 py-10 mt-14">

            <h2 className="font-[Gloock] text-2xl md:text-3xl font-bold mb-8 text-center">
              Formulário de Voluntário
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >

              <div>
                <label className="text-sm block mb-2 font-medium">
                  Nome Completo*
                </label>

                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#ECECEC] rounded-full px-5 outline-none focus:ring-2 focus:ring-[#1B56AE]"
                />
              </div>

              <div>
                <label className="text-sm block mb-2 font-medium">
                  Telefone
                </label>

                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#ECECEC] rounded-full px-5 outline-none focus:ring-2 focus:ring-[#1B56AE]"
                />
              </div>

              <div>
                <label className="text-sm block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#ECECEC] rounded-full px-5 outline-none focus:ring-2 focus:ring-[#1B56AE]"
                />
              </div>

              <div>
                <label className="text-sm block mb-2 font-medium">
                  Área de Atuação
                </label>

                <select
                  name="area_interesse"
                  value={formData.area_interesse}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#ECECEC] rounded-full px-5 outline-none focus:ring-2 focus:ring-[#1B56AE]"
                >
                  <option value="">Selecione uma área</option>
                  <option value="Mídias">
                    Mídias
                  </option>
                  <option value="Captação de Recursos">
                    Captação de Recursos
                  </option>
                  <option value="Comunicação">
                    Comunicação e Marketing
                  </option>
                  <option value="Planejamento">
                    Planejamento
                  </option>

                </select>
              </div>

              <button
                type="submit"
                className="bg-[#1B56AE] hover:bg-[#17478f] transition text-white text-base h-12 rounded-full mt-4 font-semibold"
              >
                Enviar Solicitação
              </button>

            </form>

          </div>

        </div>

        {/* História */}
        <div className="bg-[#3E6485] w-full max-w-[420px] rounded-[32px] shadow-2xl px-8 md:px-10 py-12">

          <h2 className="font-[Gloock] text-4xl md:text-5xl leading-tight font-bold mb-8 text-white text-center lg:text-left">
            História da Equipe
          </h2>

          <p className="text-base leading-8 text-white/90 text-center lg:text-left">
            O projeto Livro em Movimento surgiu com o objetivo de levar
            acesso à leitura para pessoas em situação de vulnerabilidade,
            promovendo educação, cultura e inclusão social através dos
            livros e do trabalho voluntário.
            <br /><br />
            Nossa equipe acredita que a leitura transforma vidas,
            amplia oportunidades e fortalece comunidades.
          </p>

        </div>

      </div>

    </div>
  )
}