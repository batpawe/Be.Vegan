from django.urls import path
from rest_framework import routers
from .views import ProfileView, SubstituteNVeganView, SubstituteVeganView, IngredientsView, RestaurantView, RestaurantRatingView, RestaurantChangeView, RecipeView, RecipeListView, RecipeRatingView, PreferenceView
from .views import PostIdView, ModerateVeganView
from .views import PostIdView, ModerateVeganView, AddVeganView
#from django.views.static import serve
#from django.conf import settings
#from django.conf.urls import url
#profile view added


router = routers.SimpleRouter()
router.register(r'substitute/veg', SubstituteVeganView)
router.register(r'restaurants/rating', RestaurantRatingView)
router.register(r'recipes', RecipeView)
router.register(r'recipes/list', RecipeListView)
router.register(r'recipe/rating', RecipeRatingView)
router.register(r'moderate', ModerateVeganView)
router.register(r'restaurants', RestaurantView,basename='restaurants')
urlpatterns = router.urls
router.routes[2].mapping['post'] = 'update'
router.register(r'posts', PostIdView, base_name='PostIdView') #!!!!


urlpatterns += router.urls

urlpatterns += [
    path('me/', ProfileView.as_view(), name='profile'),
    path('substitute/nveg/', SubstituteNVeganView.as_view(), name='substitute'),
    path('ingredients/', IngredientsView.as_view()),
  #  path('restaurants/', RestaurantView.as_view()),
    path('restaurant/change/', RestaurantChangeView.as_view()),
    path('preference/', PreferenceView.as_view()),
    path('addsubstitute/', AddVeganView.as_view()),
#    url(r'^(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT,})
]
