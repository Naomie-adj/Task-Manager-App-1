from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user if self.request.user.is_authenticated else None)

    def get_queryset(self):
        queryset = Task.objects.all()
        if self.request.user.is_authenticated:
            # Si l'utilisateur est authentifié, on lui montre ses tâches
            return queryset.filter(user=self.request.user)
        # Sinon, on montre toutes les tâches publiques (sans utilisateur)
        return queryset.filter(user__isnull=True) 