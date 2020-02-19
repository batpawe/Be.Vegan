from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from django.core.exceptions import PermissionDenied
from rest_framework.views import APIView

from .serializers import ProfileSerializer
from django.contrib.auth import get_user_model, get_user
from django.core import serializers

User = get_user_model()


# Create your views here.

@api_view(['GET', 'UPDATE'])
def ProfileView(request):
    us = get_user(request)
    message = ProfileSerializer(us)

    if us.is_authenticated:
        return Response(message.data)
    else:
        return Response(status=401)


class profile_view(APIView):
    def get(self, request, format=None):
        us = get_user(request)
        message = ProfileSerializer(us)

        if us.is_authenticated:
            return Response(message.data)
        else:
            return Response(status=401)

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
