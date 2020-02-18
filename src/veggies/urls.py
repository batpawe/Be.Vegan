from django.urls import path
from .views import ProfileView

urlpatterns = [
    path('me/', ProfileView, name='profile')
]
