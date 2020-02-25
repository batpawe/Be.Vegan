from django.urls import path
from rest_framework import routers
from .views import ProfileView, SubstituteNVeganView, SubstituteVeganView, IngredientsView, RestaurantView, RestaurantRatingView, RestaurantChangeView, RecipeView, RecipeListView

router = routers.SimpleRouter()
router.register(r'substitute/veg', SubstituteVeganView)
router.register(r'restaurant/rating', RestaurantRatingView)
router.register(r'recipes/list', RecipeListView)
router.register(r'recipe', RecipeView)
urlpatterns = router.urls

urlpatterns += [
    path('me/', ProfileView.as_view(), name='profile'),
    path('substitute/nveg/', SubstituteNVeganView.as_view(), name='substitute'),
    path('ingredients/', IngredientsView.as_view()),
    path('restaurant/', RestaurantView.as_view()),
    path('restaurant/change/', RestaurantChangeView.as_view())
]
