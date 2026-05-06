"""
Helpers/serviços do app `contato`.

Centraliza a sanitização do telefone e a geração das URLs de
e-mail e WhatsApp, mantendo a model enxuta e os testes simples.
"""

import re
from urllib.parse import quote


# DDI padrão (Brasil). Mantido como constante para facilitar manutenção.
DEFAULT_COUNTRY_CODE = "55"


def sanitize_phone(raw: str) -> str:
    """
    Remove tudo que não é dígito de um telefone.

    Exemplos:
        "(21) 98097-4799" -> "21980974799"
        "+55 (21) 98097-4799" -> "5521980974799"
        "" -> ""
    """
    if not raw:
        return ""
    return re.sub(r"\D+", "", raw)


def to_whatsapp_number(raw: str, country_code: str = DEFAULT_COUNTRY_CODE) -> str:
    """
    Converte um telefone "cru" para o formato aceito pelo wa.me,
    garantindo o DDI (Brasil por padrão).

    Regras:
      - Apenas dígitos no resultado.
      - Se o número já começar com o DDI informado, mantém como está.
      - Caso contrário, prefixa com o DDI.
      - Strings vazias retornam "".
    """
    digits = sanitize_phone(raw)
    if not digits:
        return ""

    if digits.startswith(country_code):
        return digits

    return f"{country_code}{digits}"


def build_whatsapp_url(raw: str, message: str = "") -> str:
    """
    Monta a URL completa do WhatsApp (https://wa.me/<numero>),
    adicionando uma mensagem opcional via query string.
    Retorna "" se não houver número válido.
    """
    number = to_whatsapp_number(raw)
    if not number:
        return ""

    url = f"https://wa.me/{number}"
    if message:
        url = f"{url}?text={quote(message)}"
    return url


def build_mailto_url(email: str, subject: str = "", body: str = "") -> str:
    """
    Monta uma URL `mailto:` com assunto e corpo opcionais.
    Retorna "" se não houver e-mail.
    """
    if not email:
        return ""

    url = f"mailto:{email}"
    params = []
    if subject:
        params.append(f"subject={quote(subject)}")
    if body:
        params.append(f"body={quote(body)}")
    if params:
        url = f"{url}?{'&'.join(params)}"
    return url
