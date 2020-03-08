from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Food_To_Substitute, Ingredient, Restaurant, Rating_Restaurant, Recipe, Ingredient_List, \
    Rating_Recipe, Preference
from django.db import models

User = get_user_model()


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


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name', 'kcal', 'protein', 'fat', 'carbs', 'cellulose', 'category']
        editable = False


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id_moderator', 'name', 'city', 'foto', 'street', 'street_number', 'latX', 'longY', 'hours', 'rating',
                  'description']
        read_only_fields = ['id', 'id_moderator', 'rating', 'street', 'street_number', 'latX', 'longY']


class RatingRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating_Restaurant
        fields = "__all__"
        read_only_fields = ['id_user', 'id_restaurant']


class IngredientListSerializer(serializers.ModelSerializer):
    id_ingredient = IngredientSerializer()
    class Meta:
        model = Ingredient_List
        fields = "__all__"
        editable = False


class RecipeSerializer(serializers.ModelSerializer):
    # ingredient = serializers.CharField(source='ingredients.id_ingredient_id')
    # ingredients = IngredientListSerializer(read_only=True, many=True)
    id_user = UserSerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = "__all__"
        read_only_fields = ['id']


# Ingredient_List(models.Model):
#    id_ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
#    id_recipes = models.ForeignKey(Recipe, on_delete=models.CASCADE)


class RatingRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating_Recipe
        fields = "__all__"
        read_only_fields = ['id']


class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preference
        fields = "__all__"
        read_only_fields = ['id']
