/**
 * Noticias.jsx
 *
 * Estratégia de renderização:
 *  1. Conteúdo fixo (FIXED_BLOCK) aparece imediatamente — sem esperar API.
 *  2. A fetch para o backend roda em paralelo, no background.
 *  3. Notícias dinâmicas são inseridas ABAIXO do conteúdo fixo quando chegam.
 *  4. Eventos futuros dinâmicos são listados ABAIXO do texto fixo do card lateral.
 *  5. Falha de API → aviso discreto, conteúdo fixo permanece intacto.
 *  6. Seção CTA (fundo azul) é estática e sempre visível ao final da página.
 */

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Endpoint ────────────────────────────────────────────────────────────────
const API_URL = 'http://127.0.0.1:8000/noticias/api/'

// ─── Conteúdo fixo da coluna esquerda ────────────────────────────────────────
// Estes textos aparecem SEMPRE, antes de qualquer dado dinâmico.
const FIXED_BLOCK = {
  titulo: '"Evento"',
  paragrafos: [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
  ],
  extra: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets`,
}

// Texto fixo do card lateral (aparece antes dos eventos dinâmicos)
const FUTUROS_FIXO = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function formatDateTime(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// ─── Componente ──────────────────────────────────────────────────────────────
export default function Noticias() {
  // Estado dinâmico: começa vazio, nunca bloqueia a renderização inicial
  const [noticias, setNoticias] = useState([])
  const [futuros, setFuturos]   = useState([])
  const [apiStatus, setApiStatus] = useState('idle') // 'idle' | 'loading' | 'done' | 'error'
  const [apiError, setApiError]   = useState(null)

  useEffect(() => {
    setApiStatus('loading')
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar dados do servidor.')
        return res.json()
      })
      .then((data) => {
        setNoticias(data.noticias || [])
        setFuturos(data.futuros  || [])
        setApiStatus('done')
      })
      .catch((err) => {
        setApiError(err.message)
        setApiStatus('error')
      })
  }, [])

  return (
    <>
      {/* ── Área principal ──────────────────────────────────────────────── */}
      <div className="bg-[#F8F8F8] min-h-screen px-10 py-6">

        {/* Título */}
        <h1 className="font-[Gloock] text-[52px] font-bold text-center mb-10">
          Notícias
        </h1>

        {/* Layout de duas colunas */}
        <div className="flex justify-center gap-20 items-start flex-wrap">

          {/* ── Coluna esquerda ────────────────────────────────────────── */}
          <div className="max-w-[640px] flex-1 min-w-[280px]">

            {/* 1. Bloco fixo — renderiza imediatamente */}
            <div className="mb-12">
              <h2 className="font-[Gloock] text-[42px] leading-none font-bold mb-3">
                {FIXED_BLOCK.titulo}
              </h2>

              {FIXED_BLOCK.paragrafos.map((p, i) => (
                <p key={i} className="text-[12px] leading-[17px] text-black mb-5">
                  {p}
                </p>
              ))}
            </div>

            {/* 2. Segundo parágrafo fixo */}
            <div className="mb-12">
              <p className="text-[12px] leading-[17px] text-black max-w-[620px]">
                {FIXED_BLOCK.extra}
              </p>
            </div>

            {/* 3. Divisor antes do conteúdo dinâmico (só aparece se houver algo) */}
            {(apiStatus === 'loading' || noticias.length > 0) && (
              <hr className="border-gray-200 mb-8" />
            )}

            {/* 4. Indicador de carregamento — apenas nesta área, não na tela toda */}
            {apiStatus === 'loading' && (
              <p className="text-[12px] text-gray-400 italic mb-6">
                Carregando notícias cadastradas…
              </p>
            )}

            {/* 5. Aviso de erro da API — discreto */}
            {apiStatus === 'error' && (
              <p className="text-[11px] text-amber-600 italic mb-6">
                ⚠️ {apiError} Os textos acima permanecem disponíveis.
              </p>
            )}

            {/* 6. Notícias dinâmicas do admin — abaixo dos textos fixos */}
            {noticias.map((noticia) => (
              <article key={noticia.id} className="mb-12">

                {noticia.imagem_url && (
                  <img
                    src={noticia.imagem_url}
                    alt={noticia.titulo}
                    className="w-full max-h-[280px] object-cover rounded-[16px] mb-4"
                  />
                )}

                <h2 className="font-[Gloock] text-[36px] leading-none font-bold mb-2">
                  {noticia.titulo}
                </h2>

                <p className="text-[11px] text-gray-400 mb-3">
                  {formatDate(noticia.criado_em)}
                </p>

                <p className="text-[13px] leading-[20px] text-black whitespace-pre-line">
                  {noticia.descricao}
                </p>

              </article>
            ))}

          </div>

          {/* ── Card lateral: Futuros Projetos ──────────────────────────── */}
          <div className="bg-[#B7D5EE] w-[310px] h-fit rounded-[26px] shadow-xl px-8 py-8 mt-1 flex-shrink-0">

            <h2 className="font-[Gloock] text-[40px] leading-[42px] font-bold text-black mb-6">
              Futuros Projetos
            </h2>

            {/* Texto fixo do card — sempre visível */}
            <p className="text-[12px] leading-[17px] text-black mb-6">
              {FUTUROS_FIXO}
            </p>

            {/* Eventos dinâmicos abaixo do texto fixo */}
            {futuros.length > 0 && (
              <div className="mt-4 flex flex-col gap-4">
                {futuros.map((evento) => (
                  <div
                    key={evento.id}
                    className="border-t border-blue-300 pt-4"
                  >
                    <h3 className="font-[Gloock] text-[15px] font-bold mb-1">
                      {evento.titulo}
                    </h3>
                    <p className="text-[10px] text-gray-600 mb-1">
                      📅 {formatDateTime(evento.data_hora)}
                    </p>
                    {evento.local && (
                      <p className="text-[10px] text-gray-600 mb-1">
                        📍 {evento.local}
                      </p>
                    )}
                    <p className="text-[11px] leading-[15px] text-black">
                      {evento.descricao}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Indicador sutil dentro do card enquanto carrega */}
            {apiStatus === 'loading' && (
              <p className="text-[10px] text-gray-500 italic mt-4">
                Buscando eventos…
              </p>
            )}

          </div>

        </div>
      </div>

      {/* ── Seção CTA inferior ──────────────────────────────────────────────── */}
      <section className="bg-blue-100 py-20 px-10 text-center">

        <h2 className="font-[Gloock] text-[40px] md:text-[48px] font-bold mb-5">
          Sua Compra Transforma Vidas
        </h2>

        <p className="text-gray-700 text-[16px] leading-[26px] mb-10 max-w-[560px] mx-auto">
          Cada livro vendido contribui para a distribuição de livros gratuitos
          em comunidades carentes. Ao comprar, você está investindo em
          educação e cultura para todos.
        </p>

        <Link to="/contato">
          <button className="font-[Gloock] bg-white text-[#1B56AE] px-8 py-3 rounded-xl shadow hover:bg-[#1B56AE] hover:text-white hover:shadow-xl transition duration-300">
            Entrar em Contato
          </button>
        </Link>

      </section>
    </>
  )
}
