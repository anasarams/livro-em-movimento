from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_livros, name='biblioteca'),
    path('<int:pk>/', views.detalhe_livro, name='detalhe_livro'),
]