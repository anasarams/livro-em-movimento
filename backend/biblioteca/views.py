from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from .models import Livro


def lista_livros(request):
    livros = Livro.objects.all()
    return render(request, 'biblioteca/lista.html', {'livros': livros})