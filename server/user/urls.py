from django.urls import path
from .views import UserListCreateView, TaskListCreateView, TaskDetailView

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list'),
    path('tasks/', TaskListCreateView.as_view(), name='task-list'),
    path('tasks/<int:pk>/', TaskDetailView.as_view(), name='task-detail'),
]