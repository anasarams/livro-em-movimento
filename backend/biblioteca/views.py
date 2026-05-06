from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from .models import Livro

def lista_livros(request):
    livros = Livro.objects.filter(disponivel=True)

    busca = request.GET.get('q', '').strip()
    if busca:
        livros = livros.filter(
            Q(titulo__icontains=busca) | Q(autor__icontains=busca)
        )

    return render(request, 'biblioteca/lista.html', {
        'livros': livros,
        'busca': busca,
    })

def detalhe_livro(request, pk):
    livro = get_object_or_404(Livro, pk=pk, disponivel=True)
    return render(request, 'biblioteca/detalhe.html', {'livro': livro})