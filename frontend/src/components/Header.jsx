import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-[#1B56AE] text-white px-20 py-5 flex items-center justify-between">

      <Link
        to="/"
        className="font-[Gloock] text-2xl font-bold hover:opacity-80"
      >
        Livro em Movimento
      </Link>

      <nav>
        <ul className="flex gap-12 text-base font-medium">

          <li>
            <Link to="/" className="hover:opacity-70">
              Início
            </Link>
          </li>

          <li>
            <Link to="/sobre" className="hover:opacity-70">
              Sobre
            </Link>
          </li>

          <li>
            <Link to="/biblioteca" className="hover:opacity-70">
              Biblioteca
            </Link>
          </li>

          <li>
            <Link to="/noticias" className="hover:opacity-70">
              Notícias
            </Link>
          </li>

          <li>
            <Link to="/voluntarios" className="hover:opacity-70">
              Voluntários
            </Link>
          </li>

          <li>
            <Link to="/contato" className="hover:opacity-70">
              Doação
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  )
}