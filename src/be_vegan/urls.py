"""be_vegan URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.contrib.auth import get_user_model

User = get_user_model()
from rest_framework import routers, serializers, viewsets
from rest_framework.views import APIView
from django.http.response import HttpResponse
from veggies import views 
from veggies.views import CustomObtainAuthToken, UserViewSet
from rest_framework.authtoken.views import obtain_auth_token




router = routers.DefaultRouter()
router.register(r'users', UserViewSet)



urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    # url(r'^api-auth/', include('rest_framework.urls'))
    path('api-token-auth/', CustomObtainAuthToken.as_view(), name='api_token_auth'),
    path('', include('veggies.urls'))

]
