import joelpic from '../assets/joelpic.jpg'

export default function Voluntarios() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen px-10 py-6">

      <h1 className="font-[Gloock] text-[52px] font-bold text-center mb-10">
        Voluntários
      </h1>

      <div className="flex justify-center gap-24 items-start">

        <div>

          <h2 className="font-[Gloock] text-[34px] font-bold text-center mb-8">
            Equipe
          </h2>

          <div className="flex justify-center mb-14">

            <div className="bg-white shadow-md rounded-b-[12px] w-[140px] pb-4 text-center">

              <img
                src={joelpic}
                alt="Joel Prata"
                className="w-full h-[180px] object-cover mb-4"
              />

              <p className="font-[Gloock] text-[28px] leading-none">
                Joel
              </p>

              <p className="text-[10px] text-gray-500 mt-1 px-2">
                CEO da ONG Livro em Movimento
              </p>

            </div>

          </div>

          <div className="max-w-[480px]">

            <h2 className="font-[Gloock] text-[52px] leading-[50px] font-bold mb-4">
              Faça parte da nossa equipe!
            </h2>

            <p className="text-[12px] leading-[17px] text-black max-w-[430px]">
              ...
            </p>

          </div>

        </div>

        
        <div className="bg-[#3E6485] w-[320px] h-[430px] rounded-[26px] shadow-xl px-8 py-8 mt-4">

          <h2 className="font-[Gloock] text-[42px] leading-[44px] font-bold mb-7 text-black">
            História da Equipe
          </h2>

          <p className="text-[12px] leading-[18px] text-black">
          ...
          </p>

        </div>

      </div>

    </div>
  )
}