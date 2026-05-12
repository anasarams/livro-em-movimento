import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#031B4E] text-white">

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

            <li>
              <Link to="/" className="hover:text-white transition">
                Início
              </Link>
            </li>

            <li>
              <Link to="/sobre" className="hover:text-white transition">
                Sobre nós
              </Link>
            </li>

            <li>
              <Link to="/contato" className="hover:text-white transition">
                Doação
              </Link>
            </li>

            <li>
              <Link to="/biblioteca" className="hover:text-white transition">
                Biblioteca
              </Link>
            </li>

            <li>
              <Link to="/voluntarios" className="hover:text-white transition">
                Seja voluntário
              </Link>
            </li>

          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-[Gloock] text-3xl mb-4">
            Contato
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>aclivroemmovimento@gmail.com</li>
            <li>(21) 98097-4799</li>
            <li>
              Terminal Rodoviário Presidente João Goulart,
              Niterói, RJ, Brazil
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="font-[Gloock] text-3xl mb-4">
            Redes sociais
          </h3>

          <p className="text-gray-300 mb-4">
            Nos acompanhe no facebook
          </p>

          <div className="flex gap-3">

            <a
              href="https://www.facebook.com/llivroemmovimento"
             
              rel="noreferrer"
              className="w-8 h-8 bg-gray-300 rounded-full hover:scale-110 transition"
            ></a>

           

            

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-center text-sm text-gray-300">
        © 2026 Livro em Movimento. Todos os direitos reservados.
      </div>

    </footer>
  );
}