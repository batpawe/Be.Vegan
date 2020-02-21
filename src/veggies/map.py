import math

from django.db.models import F

from .models import Restaurant
from .serializers import RestaurantSerializer


def get_restaurants(lat, long):
    r = math.sqrt(pow(lat, 2) + pow(long, 2))
    res = Restaurant.objects.filter(
        0.1 < math.sqrt(pow(lat-F('latX'), 2) + pow(long-F('longY'), 2))
    ).all()
    return res

