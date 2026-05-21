from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from .models import Livro
from django.http import JsonResponse


def livros_json(request):
    livros = Livro.objects.all()

    data = []

    for livro in livros:
        data.append({
            'id': livro.id,
            'titulo': livro.titulo,
            'autor': livro.autor,
            'preco': float(livro.preco),
            'descricao': livro.descricao,

            'imagem': (
                request.build_absolute_uri(livro.imagem.url)
                if livro.imagem
                else ''
            ),
        })

    return JsonResponse(data, safe=False)