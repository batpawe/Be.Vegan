from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Food_To_Substitute, Ingredient, Restaurant, Rating_Restaurant

User = get_user_model()


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
        fields = ['name', 'kcal', 'protein', 'fat', 'carbs', 'cellulose', 'category']
        editable = False


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id_moderator', 'name', 'city', 'foto', 'street', 'street_number', 'latX', 'longY', 'hours', 'rating',
                  'description']
        read_only_fields = ['id_moderator', 'rating', 'street', 'street_number', 'latX', 'longY']


class RatingRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating_Restaurant
        fields = "__all__"
