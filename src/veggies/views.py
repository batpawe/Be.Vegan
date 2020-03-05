from django.http import QueryDict
from rest_framework import viewsets
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .map import get_restaurants
from .models import Food_To_Substitute, Food_Substitute, Ingredient, Restaurant, Rating_Restaurant, Recipe, \
    Ingredient_List, Rating_Recipe, Preference, Post, Post_reply
from .serializers import ProfileSerializer, SubstituteSerializer, IngredientSerializer, RestaurantSerializer, \
    IngredientListSerializer, RecipeSerializer, RatingRestaurantSerializer, RatingRecipeSerializer, PreferenceSerializer, PostSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your views here.

@api_view(['GET', 'UPDATE'])
def ProfileViewGet(request):
    us = request.user
    message = ProfileSerializer(us)

    if us.is_authenticated:
        return Response(message.data)
    else:
        return Response(status=401)


class ProfileView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        us = request.user
        message = ProfileSerializer(us, partial=True)
        return Response(message.data)

    def put(self, request, format=None):
        us = request.user
        serializer = ProfileSerializer(us, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=400)


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'id': token.user_id})


class SubstituteNVeganView(APIView):
    def get(self, request, format=None):
        prefix = request.GET.get('prefix', '')
        food = Food_To_Substitute.objects.filter(food_name__regex=r'^{}'.format(prefix))
        if food:
            serializer = SubstituteSerializer(food, many=True)
            return Response(serializer.data)
        else:
            return Response(status=404)


class SubstituteVeganView(viewsets.ViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

    def retrieve(self, request, pk=None):
        food_substitute = Food_Substitute.objects.filter(id_food_to_substitute=pk).values_list('id_vegan', flat=True)
        queryset = Ingredient.objects.filter(id__in=food_substitute)
        if queryset:
            serializer = IngredientSerializer(queryset, many=True)
            return Response(serializer.data)
        else:
            return Response(status=404)

# !!! ! ! ! ! ! ! !
class PostIdView(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        post = Post.objects.using('posts').filter(pk=pk)
        if post:
            post = PostSerializer(post, many=False)
            return Response(post.data)
        else:
            return Response(status=404)
# !!! ! ! ! ! ! ! !

class IngredientsView(APIView):
    def get(self, request, format=None):
        prefix = request.GET.get('prefix', '')
        food = Ingredient.objects.filter(name__regex=r'^{}'.format(prefix))
        if food:
            food = IngredientSerializer(food, many=True)
            return Response(food.data)
        else:
            return Response(status=404)

class PostView(APIView):
    def get(self, request, format = None):
        post = Post.objects.using('posts').all()
        if post:
            post = PostSerializer(post, many=True)
            return Response(post.data)
        else:
            return Response(status=404)

class RestaurantView(APIView):
    def get(self, request, format=None):
        if "city" in request.GET:
            prefix = str(request.GET.get("city", ''))
            if Restaurant.objects.filter(city__regex=r'^{}'.format(prefix)):
                res = Restaurant.objects.filter(city__regex=r'^{}'.format(prefix))
                res = RestaurantSerializer(res, many=True)
                return Response(res.data)
            else:
                return Response(status=404)
        elif 'latX' in request.GET and 'longY' in request.GET:
            lat = float(request.GET.get("latX", 0.2))
            long = float(request.GET.get("longY", 0.1))
            r = float(request.GET.get("r", 0.1))
            res = get_restaurants(lat, long, r)
            res = RestaurantSerializer(res, many=True)
            return Response(res.data)
        else:
            res = Restaurant.objects.all()
            res = RestaurantSerializer(res, many=True)
            return Response(res.data)

class RestaurantChangeView(APIView):
    def get(self, request, format=None):
        if Restaurant.objects.filter(id_moderator=request.user.id):
            res = Restaurant.objects.get(id_moderator=request.user.id)
            serializer = RestaurantSerializer(res, many=False)
            return Response(serializer.data)
        else:
            return Response(status=404)

    def put(self, request, format=None):
        if Restaurant.objects.filter(id_moderator=request.user.id):
            res = Restaurant.objects.get(id_moderator=request.user.id)
            serializer = RestaurantSerializer(res, data=request.data, many=False, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(status=400)
        else:
            return Response(status=404)


class RestaurantRatingView(viewsets.ViewSet):
    serializer_class = RatingRestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        rating = Rating_Restaurant.objects.filter(id_user=request.user)
        serializer = RatingRestaurantSerializer(rating, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        if Rating_Restaurant.objects.filter(id_user=request.user, id_restaurant=pk):
            rating = Rating_Restaurant.objects.get(id_user=request.user, id_restaurant=pk)
            serializer = RatingRestaurantSerializer(rating, many=False)
            return Response(serializer.data)
        else:
            return Response(status=404)

    def create(self, request):
        req = QueryDict.copy(request.data)
        req['id_user'] = request.user.id
        serializer = RatingRestaurantSerializer(data=req, many=False, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=400)

    def destroy(self, request, pk=None):
        user = User.objects.get(id=pk)
        rating = Rating_Restaurant.objects.get(id_user=user.id, id_restaurant=pk)
        if request.user.id == rating.id_user_id:
            rating.delete()
            return Response("Deleted")
        else:
            return Response(status=401)

    def partial_update(self, request, pk=None):
        rating = Rating_Restaurant.objects.get(id_user=request.user, id_restaurant=pk)
        serializer = RatingRestaurantSerializer(rating, data=request.data, many=False, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=400)

class RecipeView(viewsets.ViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

    def list(self, request):
        prefix = request.GET.get('prefix','')
        ingredients = request.GET.get('ingredients', False)
        ingredients = ingredients.split(',')
        recipes = Recipe.objects.filter(recipe_name__regex=r'^{}'.format(prefix))
        if ingredients:
            recipes_list = Ingredient_List.objects.filter(id_ingredient__name__in=ingredients)
            recipes = recipes.filter(id__in=recipes_list.values('id_recipes_id'))
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        if Recipe.objects.filter(id=pk):
            recipe = Recipe.objects.get(id=pk)
            serializer = RecipeSerializer(recipe, many=False)
            return Response(serializer.data)
        else:
            return Response(status=404)

    def create(self, request):
        req = QueryDict.copy(request.data)
        req['id_user'] = request.user.id
        serializer = RecipeSerializer(data=req, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=400)

    def destroy(self, request, pk=None):
        recipe = Recipe.objects.get(id=pk)
        if request.user.id == recipe.id_user_id:
            recipe.delete()
            return Response("Deleted")
        else:
            return Response(status=401)

    def partial_update(self, request, pk=None):
        recipe = Recipe.objects.get(id=pk)
        if request.user.id == recipe.id_user_id:
            serializer = RecipeSerializer(recipe, data=request.data, many=False, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(status=400)
        else:
            return Response(status=401)


class RecipeListView(viewsets.ViewSet):
    serializer_class = IngredientListSerializer
    queryset = Recipe.objects.all()

    def retrieve(self, request, pk=None):
        if Recipe.objects.filter(id=pk):
            list_id = Ingredient_List.objects.filter(id_recipes_id=pk).values_list('id_ingredient_id', flat=True)
            ingredient_list = Ingredient.objects.filter(id__in=list_id)
            serializer = IngredientSerializer(ingredient_list, many=True)
            return Response(serializer.data)
        else:
            return Response(status=404)

    def update(self, request, pk=None):
        if Recipe.objects.filter(id=pk):
            data = QueryDict.copy(request.data)
            data['id_recipes'] = pk
            serializer = IngredientListSerializer(data=data, many=False)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(status=400)
        else:
            return Response(status=404)


class RecipeRatingView(viewsets.ViewSet):
    serializer_class = RatingRecipeSerializer
    queryset = Recipe.objects.all()
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        rating = Rating_Recipe.objects.filter(id_user=request.user)
        serializer = RatingRestaurantSerializer(rating, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        if Rating_Recipe.objects.filter(id_user=request.user, id_recipe=pk):
            rating = Rating_Recipe.objects.get(id_user=request.user, id_recipe=pk)
            serializer = RatingRecipeSerializer(rating, many=False)
            return Response(serializer.data)
        else:
            return Response(status=404)

    def create(self, request):
        req = QueryDict.copy(request.data)
        req['id_user'] = request.user.id
        serializer = RatingRecipeSerializer(data=req, many=False, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=400)

    def destroy(self, request, pk=None):
        user = User.objects.get(id=pk)
        rating = Rating_Recipe.objects.get(id_user=user.id, id_recipe=pk)
        if request.user.id == rating.id_user_id:
            rating.delete()
            return Response("Deleted")
        else:
            return Response(status=401)

    def partial_update(self, request, pk=None):
        rating = Rating_Recipe.objects.get(id_user=request.user, id_recipe=pk)
        serializer = RatingRecipeSerializer(rating, data=request.data, many=False, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=400)


# class Preference(models.Model):
#    id_user = models.ForeignKey(User, on_delete=models.CASCADE)
#    id_ingredients = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
#    like = models.IntegerField('like')


class PreferenceView(APIView):
    def get(self, request, format=None):
        if Preference.objects.filter(id_user_id=request.user.id):
            preference = Preference.objects.filter(id_user_id=request.user.id)
            serializer = PreferenceSerializer(preference, many=True)
            return Response(serializer.data)
        else:
            return Response(status=404)

    def post(self, request, format=None):
        req = request.data.copy()
        req['id_user'] = request.user.id
        serializer = PreferenceSerializer(data=req, many=False, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=400)

    def delete(self, request, format=None):
        i = int(request.GET.get('id'))
        if Preference.objects.get(id=i):
            preference = Preference.objects.get(id=i)
            preference.delete()
            return Response("Deleted")
        else:
            return Response(status=404)
