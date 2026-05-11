import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-removebg-preview.png'

export default function Header() {

  const location = useLocation()

  // verifica se está na página inicial
  const isHome = location.pathname === '/'

  return (
    <header
      className={`w-full z-50 px-20 py-5 flex items-center justify-between transition duration-300
      ${
        isHome
          ? 'absolute top-0 left-0 bg-transparent text-white'
          : 'bg-white text-black shadow-md'
      }`}
    >

      {/* Logo + Nome */}
      <Link
        to="/"
        className="flex items-center gap-4 hover:opacity-80 transition"
      >
        <img
          src={logo}
          alt="Logo Livro em Movimento"
          className="w-14 h-14 object-contain"
        />

        <h1 className="font-[Gloock] text-3xl font-bold">
          Livro em Movimento
        </h1>
      </Link>

      {/* Navegação */}
      <nav>
        <ul className="flex gap-12 text-lg font-bold">

          <li>
            <Link to="/" className="hover:opacity-70 transition">
              Início
            </Link>
          </li>

          <li>
            <Link to="/sobre" className="hover:opacity-70 transition">
              Sobre
            </Link>
          </li>

          <li>
            <Link to="/biblioteca" className="hover:opacity-70 transition">
              Biblioteca
            </Link>
          </li>

          <li>
            <Link to="/noticias" className="hover:opacity-70 transition">
              Notícias
            </Link>
          </li>

          <li>
            <Link to="/voluntarios" className="hover:opacity-70 transition">
              Voluntários
            </Link>
          </li>

          <li>
            <Link to="/contato" className="hover:opacity-70 transition">
              Doação
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  )
}