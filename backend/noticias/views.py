from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET

from .models import Evento, Noticia
from django.utils import timezone


def lista_eventos(request):
    agora = timezone.now()

    noticias = Noticia.objects.all()
    futuros = Evento.objects.filter(data_hora__gte=agora).order_by('data_hora')
    passados = Evento.objects.filter(data_hora__lt=agora).order_by('-data_hora')

    return render(request, 'noticias/eventos.html', {
        'noticias': noticias,
        'futuros': futuros,
        'passados': passados
    })


@require_GET
def noticias_api(request):
    """
    Endpoint JSON consumido pelo frontend React.
    Retorna notícias e próximos eventos ordenados.
    """
    agora = timezone.now()

    noticias_qs = Noticia.objects.all().values(
        'id', 'titulo', 'descricao', 'imagem', 'criado_em'
    )
    futuros_qs = (
        Evento.objects.filter(data_hora__gte=agora)
        .order_by('data_hora')
        .values('id', 'titulo', 'descricao', 'data_hora', 'local', 'imagem')
    )

    base_url = request.build_absolute_uri('/media/')

    def build_img(path):
        return (base_url + path) if path else None

    noticias = [
        {
            'id': n['id'],
            'titulo': n['titulo'],
            'descricao': n['descricao'],
            'imagem_url': build_img(n['imagem']),
            'criado_em': n['criado_em'],
        }
        for n in noticias_qs
    ]

    futuros = [
        {
            'id': e['id'],
            'titulo': e['titulo'],
            'descricao': e['descricao'],
            'data_hora': e['data_hora'],
            'local': e['local'],
            'imagem_url': build_img(e['imagem']),
        }
        for e in futuros_qs
    ]

    return JsonResponse({'noticias': noticias, 'futuros': futuros})