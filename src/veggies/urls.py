from django.urls import path
from .views import ProfileView, SubstituteNVeganView, SubstituteVeganView

urlpatterns = [
    path('me/', ProfileView.as_view(), name='profile'),
    path('substitute/nveg/', SubstituteNVeganView.as_view(), name='substitute'),
    path('substitute/veg/', SubstituteVeganView.as_view(), name='substitute')
]
