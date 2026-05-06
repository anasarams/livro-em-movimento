from django.db import models

# Create your models here.
class Doacao(models.Model):
    nome = models.CharField(max_length=200)
    email = models.EmailField()
    telefone = models.CharField(max_length=20)
    quantidade_livros = models.PositiveIntegerField()
    criado_em = models.DateTimeField(auto_now_add=True)