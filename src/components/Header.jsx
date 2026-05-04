export default function Header() {
  return (
    <header className="bg-[#1B56AE] text-white px-20 py-5 flex items-center justify-between">
      
      <h1 className="font-[Gloock] text-2xl font-bold">
        Livro em Movimento
      </h1>

      <nav>
        <ul className="flex gap-12 text-base font-medium">
          <li>Início</li>
          <li>Sobre</li>
          <li>Biblioteca</li>
          <li>Notícias</li>
          <li>Voluntários</li>
          <li>Contato</li>
        </ul>
      </nav>

    </header>
  )
}