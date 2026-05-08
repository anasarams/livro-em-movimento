import heroImage from '../assets/trnava-university-BEEyeib-am8-unsplash.jpg'

export default function Hero() {
  return (
    <section
      className="relative px-10 py-24 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
    >

      
      <img
        src={heroImage}
        alt="Livros e leitura"
        className="absolute inset-0 w-full h-full object-cover"
      />

     
      <div className="absolute inset-0 bg-black/40"></div>

    
      <div className="relative z-10 max-w-xl text-white">

        <h2 className="font-[Gloock] text-5xl font-bold mb-6">
          Transformando vidas através da leitura
        </h2>

        <p className="mb-8 text-lg leading-relaxed">
          O projeto Livro em Movimento promove o acesso à leitura
          e educação para comunidades carentes.
        </p>

        <div className="flex gap-4">

          <button className="font-[Gloock] bg-white text-[#1B56AE] px-6 py-2 rounded-lg shadow hover:bg-[#1B56AE] hover:text-white hover:shadow-xl transition">
            Doar
          </button>

          <button className="font-[Gloock] bg-white text-[#1B56AE] px-6 py-2 rounded-lg shadow hover:bg-[#1B56AE] hover:text-white hover:shadow-xl transition">
            Contato
          </button>

        </div>

      </div>

    </section>
  )
}