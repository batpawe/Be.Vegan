from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Food_To_Substitute, Ingredient, Restaurant, Rating_Restaurant, Recipe, Ingredient_List, \
    Rating_Recipe, Preference
from django.db import models

from .models import Main_Post, Reply_Post, Food_Substitute, VeganCuriosities

User = get_user_model()

class Curiosity(serializers.ModelSerializer):
    class Meta:
        model = VeganCuriosities
        fields = ['text']
        read_only_fields = ['text']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)
    email = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = User
        fields = ["id", 'username', 'email', 'password']
        editable = False


class UserName(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'id']
        editable = False


class PostSerializer(serializers.ModelSerializer):
    author = UserName(read_only=True)

    class Meta:
        model = Main_Post
        fields = ['id', 'author', 'description', 'title', 'foto', 'data_stamp']
        read_only_fields = ['data_stamp', 'author']


class PostReplySerializer(serializers.ModelSerializer):
    author = UserName(read_only=True)

    class Meta:
        model = Reply_Post
        fields = ['id', 'author', 'description', 'foto', 'data_stamp', 'id_post_int']
        read_only_fields = ['data_stamp', 'author']


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'height', 'weight', 'age', 'activity']
        read_only_fields = ['id', 'username', ]


class SubstituteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food_To_Substitute
        fields = '__all__'
        editable = False


class AmountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient_List
        fields = ['amount']


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name', 'kcal', 'protein', 'fat', 'carbs', 'cellulose', 'category']
        editable = False


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'id_moderator', 'name', 'city', 'foto', 'street', 'street_number', 'latX', 'longY', 'hours',
                  'rating',
                  'description']
        read_only_fields = ['id', "name", "city", 'id_moderator', 'rating', 'street', 'street_number', 'latX', 'longY']


class RestaurantCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'


class RatingRestaurantSerializer(serializers.ModelSerializer):
    id_user = UserName(read_only=True)
    class Meta:
        model = Rating_Restaurant
        fields = "__all__"
        read_only_fields = ['id']


class IngredientListSerializer(serializers.ModelSerializer):
    # id_ingredient = IngredientSerializer(read_only=True)

    class Meta:
        model = Ingredient_List
        fields = '__all__'


class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)

    id_user = UserSerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = "__all__"
        read_only_fields = ['id']
        # validators = []


class RatingRecipeSerializer(serializers.ModelSerializer):
    id_user = UserName(read_only=True)
    class Meta:
        model = Rating_Recipe
        fields = "__all__"
        read_only_fields = ['id']


class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preference
        fields = "__all__"
        read_only_fields = ['id']


class FoodSub(serializers.ModelSerializer):
    id_vegan = IngredientSerializer(read_only=True)
    id_food_to_substitute = SubstituteSerializer(read_only=True)

    class Meta:
        model = Food_Substitute
        fields = "__all__"
        read_only_fields = ['id']


class AddSub(serializers.ModelSerializer):
    class Meta:
        model = Food_Substitute
        fields = "__all__"
