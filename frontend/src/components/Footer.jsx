export default function Footer() {
  return (
    <footer className="bg-[#031B4E] text-white mt-20">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-12 py-14">
        
        {/* Logo */}
        <div>
          <h2 className="font-[Gloock] text-4xl mb-4">
            Livro em Movimento
          </h2>

          <p className="text-sm text-gray-300 leading-6">
            Transformando vidas através da leitura.
            <br />
            Promovendo acesso à educação e cultura para
            todas as idades.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-[Gloock] text-3xl mb-4">
            Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Início</li>
            <li>Sobre nós</li>
            <li>Doação</li>
            <li>Biblioteca</li>
            <li>Seja voluntário</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-[Gloock] text-3xl mb-4">
            Contato
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>livroemmovimento@gmail.com</li>
            <li>(21) 9000-0000</li>
            <li>Niterói - RJ</li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="font-[Gloock] text-3xl mb-4">
            Redes sociais
          </h3>

          <p className="text-gray-300 mb-4">
            Nos acompanhe nas redes
          </p>

          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gray-300"></div>
            <div className="w-8 h-8 bg-gray-300"></div>
            <div className="w-8 h-8 bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Linha */}
      <div className="border-t border-gray-500 py-6 text-center text-sm text-gray-300">
        © 2026 Livro em Movimento. Todos os direitos reservados.
      </div>
    </footer>
  );
}