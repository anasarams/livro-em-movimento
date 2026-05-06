from django.db import models

# Create your models here.
from django.db import models

class Livro(models.Model):
    titulo = models.CharField(max_length=200)
    autor = models.CharField(max_length=200)
    preco = models.DecimalField(max_digits=8, decimal_places=2)
    descricao = models.TextField(blank=True)
    imagem = models.ImageField(upload_to='livros/', null=True, blank=True)



    def __str__(self):
        return self.titulo