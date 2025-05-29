from django.urls import path
from django.contrib.auth.models import User
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({"message": "API is running"})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('task.urls')),
    path('', api_root),
    
]