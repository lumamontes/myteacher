from django.db import models

class Teacher(models.Model): #tabela
    name = models.CharField(max_length=100, null=False, blank=False )#coluna
    price = models.DecimalField(max_digits=9, decimal_places=2, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    photo = models.URLField(max_length=255, null=False, blank=False)
# Create your models here.
