export default function Noticias() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen px-10 py-6">

      <h1 className="font-[Gloock] text-[52px] font-bold text-center mb-10">
        Notícias
      </h1>

      
      <div className="flex justify-center gap-20 items-start">

        
        <div className="max-w-[640px]">

          
          <div className="mb-12">

            <h2 className="font-[Gloock] text-[42px] leading-none font-bold mb-3">
              “Evento”
            </h2>

            <p className="text-[12px] leading-[17px] text-black mb-5">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>

            <p className="text-[12px] leading-[17px] text-black">
              It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>

          </div>

         
          <div>

          

            <p className="text-[12px] leading-[17px] text-black max-w-[620px]">
              It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets
            </p>

          </div>

        </div>

        <div className="bg-[#B7D5EE] w-[310px] h-[340px] rounded-[26px] shadow-xl px-8 py-8 mt-1">

          <h2 className="font-[Gloock] text-[40px] leading-[42px] font-bold text-black mb-6">
            Futuros Projetos
          </h2>

          <p className="text-[12px] leading-[17px] text-black">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>

        </div>

      </div>

    </div>
  )
}