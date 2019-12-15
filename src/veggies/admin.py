from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(Ingredient)
admin.site.register(Recipe)
admin.site.register(Rating_Recipe)
admin.site.register(Ingredient_List)
admin.site.register(Preference)
admin.site.register(Food_To_Substitute)
admin.site.register(Food_Substitute)
admin.site.register(Restaurant)
admin.site.register(Rating_Restaurant)
admin.site.register(Report_Res)



# Register your models here.
