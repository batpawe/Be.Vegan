import math

from django.db.models import F, ExpressionWrapper

from .models import Restaurant
from .serializers import RestaurantSerializer


def get_restaurants(lat, long, range):
    #    r = pow(pow(lat, 2) + pow(long, 2), 1 / 2)
    #    res = Restaurant.objects.annotate(
    #       range=pow(pow(lat - F('latX'), 2) + pow(long - F('longY'), 2), 1 / 2)
    #   ).filter(range__gt=r)
    res = Restaurant.objects.filter(latX__range=(lat - range, lat + range), longY__range=(long - range, long + range))
    return res
