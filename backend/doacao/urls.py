from django.urls import path
from . import views

urlpatterns = [
    path('', views.doar, name='doacao'),
    path('sucesso/', views.doacao_sucesso, name='doacao_sucesso'),
]