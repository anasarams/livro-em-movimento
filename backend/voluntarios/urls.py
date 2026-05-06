from django.urls import path
from . import views

urlpatterns = [
    path('', views.cadastrar_voluntario, name='voluntarios'),
    path('sucesso/', views.voluntario_sucesso, name='voluntario_sucesso'),
]