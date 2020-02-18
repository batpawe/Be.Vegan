from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from django.core.exceptions import PermissionDenied
from .serializers import ProfileSerializer
from django.contrib.auth import get_user_model, get_user
from django.core import serializers

User = get_user_model()


# Create your views here.

@api_view(['GET'])
def ProfileView(request):
    us = get_user(request)
    message = ProfileSerializer(us)

    if us.is_authenticated:
        return Response(message.data)
    else:
        return Response(status=401)
