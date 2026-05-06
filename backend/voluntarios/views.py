from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from .forms import VoluntariosForm

def cadastrar_voluntario(request):
    if request.method == 'POST':
        form = VoluntariosForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('voluntario_sucesso')
    else:
        form = VoluntariosForm()

    return render(request, 'voluntarios/cadastro.html', {'form': form})


def voluntario_sucesso(request):
    return render(request, 'voluntarios/sucesso.html')