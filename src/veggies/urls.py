from django.urls import path
from rest_framework import routers
from .views import ProfileView, SubstituteNVeganView, SubstituteVeganView, IngredientsView

router = routers.SimpleRouter()
router.register(r'substitute/veg', SubstituteVeganView)
urlpatterns = router.urls

urlpatterns += [
    path('me/', ProfileView.as_view(), name='profile'),
    path('substitute/nveg/', SubstituteNVeganView.as_view(), name='substitute'),
    path('ingredients/', IngredientsView.as_view())
]
