from django.shortcuts import render
from django.http import JsonResponse
from biblioteca.models import Livro

# Create your views here.
def inicio(request):
    return render(request, 'core/inicio.html')

def sobre(request):
    return render(request, 'core/sobre.html')

def home(request):
    return render(request, 'home.html')

def livros_json(request):

    livros = Livro.objects.all()

    dados = []

    for livro in livros:
        dados.append({
            'titulo': livro.titulo,
            'autor': livro.autor,
        })

    return JsonResponse(dados, safe=False)