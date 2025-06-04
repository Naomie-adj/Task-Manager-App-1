from django.db import models
from django.contrib.auth.models import User

#class User(models.Model):
#    username = models.CharField(max_length=255, unique=True)
#    email = models.EmailField(unique=True)
#    created_at = models.DateTimeField(auto_now_add=True)

#    def __str__(self):
#        return self.username

class Task(models.Model):
    STATUS_CHOICES = [
        ('list-1', 'À faire'),
        ('list-2', 'En cours'),
        ('list-3', 'Terminé'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='list-1')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']