from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from .forms import DoacaoForm

def doar(request):
    if request.method == 'POST':
        form = DoacaoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('doacao_sucesso')
    else:
        form = DoacaoForm()

    return render(request, 'doacao/doar.html', {'form': form})

def doacao_sucesso(request):
    return render(request, 'doacao/sucesso.html')