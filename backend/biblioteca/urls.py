from django.urls import path
from . import views

urlpatterns = [
    path('', views.livros_json, name='livros_json'),
]