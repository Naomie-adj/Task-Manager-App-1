from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import User, Task
from .serializers import UserSerializer, TaskSerializer

# Vue pour la gestion des utilisateurs
class UserListCreateView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Vue pour la liste et création des tâches
class TaskListCreateView(ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

# Vue pour récupérer, modifier ou supprimer une tâche spécifique
class TaskDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer