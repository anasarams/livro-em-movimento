# Roteiro de teste — Aba de Contatos (backend)

Este roteiro valida o backend implementado para os botões de **e-mail** e **WhatsApp** da aba de contatos. Cada cenário tem **passos**, **resultado esperado** e um campo `[ ]` para marcar como passou.

> **Pré-condição geral:** servidor Django rodando localmente (`python manage.py runserver`), MySQL configurado e migrations aplicadas.

---

## 0. Preparação do ambiente

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 0.1 | Ativar venv: `venv\Scripts\activate` | Prompt mostra `(venv)` | [ ] |
| 0.2 | `cd backend` e rodar `python manage.py migrate` | Aplica `contato.0001_initial` e `contato.0002_seed_default` sem erro | [ ] |
| 0.3 | Conferir no MySQL: `SELECT * FROM contato_contactsettings;` | Existe **1 linha** com `id=1`, `email=aclivroemmovimento@gmail.com`, `whatsapp=(21) 98097-4799` | [ ] |
| 0.4 | `python manage.py createsuperuser` (caso não tenha) | Usuário criado | [ ] |
| 0.5 | `python manage.py runserver` | Servidor sobe em `http://127.0.0.1:8000/` sem erros | [ ] |

---

## 1. Django Admin — usabilidade do singleton

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 1.1 | Acessar `http://127.0.0.1:8000/admin/` e logar | Painel do admin abre | [ ] |
| 1.2 | Localizar a seção **Contato → Configurações de contato** | Item aparece com nome em português | [ ] |
| 1.3 | Clicar em **Configurações de contato** | Em vez da listagem, vai **direto para a edição** do registro único | [ ] |
| 1.4 | Conferir os campos exibidos | E-mail, WhatsApp, Atualizado em (read-only), Pré-visualização mailto, Pré-visualização wa.me | [ ] |
| 1.5 | Verificar links da seção "Pré-visualização" | `mailto:aclivroemmovimento@gmail.com` e `https://wa.me/5521980974799` (clicáveis) | [ ] |
| 1.6 | Tentar clicar em **Adicionar configuração de contato** | Botão **não aparece** (singleton bloqueia adição) | [ ] |
| 1.7 | Tentar deletar o registro (Ações ou botão Apagar) | Opção **indisponível** | [ ] |

---

## 2. Edição pelo admin reflete no backend

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 2.1 | No admin, alterar e-mail para `teste@exemplo.com` e salvar | Mensagem "...alterado com sucesso" | [ ] |
| 2.2 | Recarregar a página de edição | Pré-visualização agora mostra `mailto:teste@exemplo.com` | [ ] |
| 2.3 | Alterar WhatsApp para `(11) 91234-5678` e salvar | Pré-visualização mostra `https://wa.me/5511912345678` | [ ] |
| 2.4 | Voltar valores aos defaults: `aclivroemmovimento@gmail.com` e `(21) 98097-4799` | Pré-visualizações voltam para `mailto:aclivroemmovimento@gmail.com` e `https://wa.me/5521980974799` | [ ] |

---

## 3. Validação do telefone

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 3.1 | No admin, colocar WhatsApp = `123` e salvar | Mensagem de erro: "Informe um número válido com DDD (ex.: (21) 98097-4799)." | [ ] |
| 3.2 | Colocar WhatsApp = `abc` e salvar | Mesma mensagem de erro | [ ] |
| 3.3 | Colocar WhatsApp = `+55 21 98097-4799` e salvar | Salvo com sucesso. Pré-visualização: `https://wa.me/5521980974799` | [ ] |
| 3.4 | Colocar WhatsApp = `21980974799` (sem máscara) e salvar | Salvo. Pré-visualização: `https://wa.me/5521980974799` | [ ] |

---

## 4. Endpoints do backend

> Use o navegador, **curl** ou Postman. Teste com `-i` no curl para ver os headers de redirect.

### 4.1 `/contato/email/`

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 4.1.1 | Abrir `http://127.0.0.1:8000/contato/email/` no navegador | Navegador dispara o cliente de e-mail padrão do SO com destinatário preenchido | [ ] |
| 4.1.2 | `curl -i http://127.0.0.1:8000/contato/email/` | `HTTP/1.1 302` e header `Location: mailto:aclivroemmovimento@gmail.com` | [ ] |

### 4.2 `/contato/whatsapp/`

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 4.2.1 | Abrir `http://127.0.0.1:8000/contato/whatsapp/` | Redireciona para `https://wa.me/5521980974799` (abre WhatsApp Web ou app) | [ ] |
| 4.2.2 | `curl -i http://127.0.0.1:8000/contato/whatsapp/` | `302` com `Location: https://wa.me/5521980974799` | [ ] |

### 4.3 `/contato/info/` (JSON auxiliar)

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 4.3.1 | `curl http://127.0.0.1:8000/contato/info/` | JSON com chaves `email`, `whatsapp`, `whatsapp_sanitized`, `mailto_url`, `whatsapp_url` e valores corretos | [ ] |

### 4.4 Métodos não permitidos

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 4.4.1 | `curl -i -X POST http://127.0.0.1:8000/contato/email/` | `405 Method Not Allowed` | [ ] |
| 4.4.2 | `curl -i -X POST http://127.0.0.1:8000/contato/whatsapp/` | `405 Method Not Allowed` | [ ] |

---

## 5. Integração admin ↔ endpoints (ponta a ponta)

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 5.1 | No admin, mudar e-mail para `qa@livroemmovimento.org` | Salvo | [ ] |
| 5.2 | Acessar `http://127.0.0.1:8000/contato/email/` | Cliente de e-mail abre com `qa@livroemmovimento.org` | [ ] |
| 5.3 | No admin, mudar WhatsApp para `(11) 99999-0000` | Salvo | [ ] |
| 5.4 | Acessar `http://127.0.0.1:8000/contato/whatsapp/` | Abre `https://wa.me/5511999990000` | [ ] |
| 5.5 | Restaurar valores padrão no admin | Endpoints voltam para os links originais | [ ] |

---

## 6. Integração com o frontend (sem mudança visual)

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 6.1 | Apontar o `href` do botão de e-mail (no template/component) para `/contato/email/` | Layout não muda; botão continua igual | [ ] |
| 6.2 | Clicar no botão de e-mail no site | Abre o cliente de e-mail com destinatário preenchido | [ ] |
| 6.3 | Apontar o `href` do botão WhatsApp para `/contato/whatsapp/` | Layout não muda | [ ] |
| 6.4 | Clicar no botão WhatsApp no site | Abre conversa do WhatsApp com o número configurado | [ ] |

> **Observação:** se preferir não mexer no `href`, pode chamar `/contato/info/` via fetch e setar os links no DOM — ainda assim, sem mudança visual.

---

## 7. Persistência e singleton

| # | Passo | Resultado esperado | OK |
|---|-------|--------------------|----|
| 7.1 | Reiniciar `runserver` e acessar `/contato/info/` | JSON continua retornando os últimos valores configurados | [ ] |
| 7.2 | No MySQL, rodar `SELECT COUNT(*) FROM contato_contactsettings;` | Sempre retorna `1` | [ ] |
| 7.3 | Rodar `python manage.py migrate contato zero` e depois `python manage.py migrate contato` | Re-aplica migrations e recria o registro com os defaults (`aclivroemmovimento@gmail.com` / `(21) 98097-4799`) | [ ] |

---

## 8. Critérios de aceite (resumo)

- [ ] Admin consegue trocar e-mail e WhatsApp pelo Django Admin.
- [ ] Backend gera os links dinamicamente com base no banco/admin.
- [ ] Botão de e-mail abre o cliente de e-mail com destinatário preenchido.
- [ ] Botão de WhatsApp abre a conversa com o número configurado.
- [ ] Nenhum valor de e-mail/WhatsApp está hardcoded fora do banco/admin.
- [ ] Nenhuma alteração visual/frontend foi feita.

---

**Versão:** 1.0
**Escopo testado:** `backend/contato/` (model, services, admin, views, urls, migrations, tests).
