from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotAuthenticated
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from django.core.exceptions import PermissionDenied
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ViewSet
from .map import get_restaurants
from .models import Food_To_Substitute, Food_Substitute, Ingredient, Restaurant
from .serializers import ProfileSerializer, SubstituteSerializer, IngredientSerializer, RestaurantSerializer
from django.contrib.auth import get_user_model, get_user
from django.core import serializers

User = get_user_model()


# Create your views here.

@api_view(['GET', 'UPDATE'])
def ProfileViewGet(request):
    us = get_user(request)
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
        us = get_user(request)
        serializer = ProfileSerializer(us, data=request.data, partial=True)
        if us.is_authenticated:
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(status=400)
        else:
            return Response(status=401)


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'id': token.user_id})


class SubstituteNVeganView(APIView):
    def get(self, request, format=None):
        food = Food_To_Substitute.objects.all()
        food = SubstituteSerializer(food, many=True)
        return Response(food.data)

    def put(self, request, format=None):
        if "start" in request.data:
            start = str(request.data["start"])
            if Food_To_Substitute.objects.filter(food_name__regex=r'^{}'.format(start)):
                food = Food_To_Substitute.objects.get(food_name__regex=r'^{}'.format(start))
                food = SubstituteSerializer(food, many=True)
                return Response(food)
            else:
                return Response(status=400)
        else:
            return Response(status=400)


class SubstituteVeganView(ViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

    def retrieve(self, request, pk=None):
        food_substitute = Food_Substitute.objects.filter(id_food_to_substitute=pk).values_list('id_vegan', flat=True)
        # vegan_id_list = []
        # for i in food_substitute:
        #    vegan_id_list.append(i.vegan_id)
        if Ingredient.objects.filter(id__in=food_substitute):
            queryset = Ingredient.objects.get(id__in=food_substitute)
            serializer = IngredientSerializer(queryset)
            return Response(serializer.data)
        else:
            return Response(status=404)


class IngredientsView(APIView):
    def get(self, request, format=None):
        food = Ingredient.objects.all()
        food = IngredientSerializer(food, many=True)
        return Response(food.data)

    def put(self, request, format=None):
        if "start" in request.data:
            start = str(request.data["start"])
            if Ingredient.objects.filter(name__regex=r'^{}'.format(start)):
                food = Ingredient.objects.get(name__regex=r'^{}'.format(start))
                food = IngredientSerializer(food, many=True)
                return Response(food)
            else:
                return Response(status=400)
        else:
            return Response(status=400)


class RestaurantView(APIView):
    def put(self, request, format=None):
        if "city" in request.data:
            start = str(request.data["city"])
            if Restaurant.objects.filter(name__regex=r'^{}'.format(start)):
                res = Restaurant.objects.get(name__regex=r'^{}'.format(start))
                res = RestaurantSerializer(res, many=True)
                return Response(res)
            else:
                return Response(status=400)
        elif 'latX' in request.data & 'longY' in request.data:
            lat = request.data["latX"]
            long = request.data['longY']
            res = get_restaurants(lat, long)
            RestaurantSerializer(res, many=True)
            return Response(res)
        else:
            return Response(status=400)
