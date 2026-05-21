"""
Views do app `contato`.

Expõem rotas estáveis para o frontend:
  - /contato/           -> página simples de teste do backend (HTML)
  - /contato/email/     -> redireciona para `mailto:<email-configurado>`
  - /contato/whatsapp/  -> redireciona para `https://wa.me/<numero-configurado>`
  - /contato/info/      -> retorna JSON com os dados/links (uso opcional)
"""

from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_GET

from .models import ContactSettings


class MailtoRedirect(HttpResponseRedirect):
    """`HttpResponseRedirect` permitindo o esquema `mailto:`."""

    allowed_schemes = ["http", "https", "ftp", "mailto"]


@require_GET
def pagina_teste(request):
    """Página HTML simples para testar manualmente o backend."""
    settings_obj = ContactSettings.load()
    return render(request, "contato/teste.html", {"settings_obj": settings_obj})


@require_GET
def email_redirect(request):
    """Redireciona para o `mailto:` configurado no admin."""
    settings_obj = ContactSettings.load()
    url = settings_obj.get_mailto_url()
    if not url:
        return JsonResponse(
            {"detail": "E-mail de contato não configurado."}, status=503
        )
    return MailtoRedirect(url)


@require_GET
def whatsapp_redirect(request):
    """Redireciona para o link do WhatsApp configurado."""
    settings_obj = ContactSettings.load()
    url = settings_obj.get_whatsapp_url()
    if not url:
        return JsonResponse(
            {"detail": "Número de WhatsApp não configurado."}, status=503
        )
    return HttpResponseRedirect(url)


@require_GET
def contact_info(request):
    """
    Endpoint auxiliar (JSON) com dados de contato e links prontos.
    Útil caso o frontend prefira consumir via fetch em vez de redirect.
    """
    settings_obj = ContactSettings.load()
    return JsonResponse(
        {
            "email": settings_obj.email,
            "whatsapp": settings_obj.whatsapp,
            "whatsapp_sanitized": settings_obj.whatsapp_sanitized,
            "mailto_url": settings_obj.get_mailto_url(),
            "whatsapp_url": settings_obj.get_whatsapp_url(),
        }
    )
