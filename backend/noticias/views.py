from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
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