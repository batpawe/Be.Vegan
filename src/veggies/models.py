from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model


class User(AbstractUser):
    email = models.EmailField(unique=True)
    height = models.PositiveIntegerField("height", null=True, blank=True)
    weight = models.DecimalField("weight", null=True, blank=True, max_digits = 4, decimal_places = 2)
    age = models.PositiveIntegerField("age", null=True, blank=True)
    activity = models.PositiveIntegerField("activity", null=True, blank=True)

User  = get_user_model()

class Ingredient(models.Model):
    name = models.CharField("Nazwa", unique=True, max_length = 120)
    kcal = models.FloatField("Kcal", null=True, blank=True)
    protein = models.FloatField("Białko", null=True, blank=True)
    fat = models.FloatField("Tłuszcz", null=True, blank=True)
    carbs = models.FloatField("Węglowodany", null=True, blank=True)
    cellulose = models.FloatField("Błonnik", null=True, blank=True)
    category = models.CharField("Kategoria", null=True, blank=True, max_length = 120)

    def __str__(self):
	       return self.name

class Recipe(models.Model):
    recipe_name = models.TextField(max_length = 120)
    recipe_decription = models.TextField("recipe_description")
    recipe_foto = models.ImageField("recipe_foto")
    id_user = models.ForeignKey(User, on_delete = models.CASCADE)

    def __str__(self):
	       return self.recipe_name


class Rating_Recipe(models.Model):
    id_recipe = models.ForeignKey(Recipe, on_delete = models.CASCADE)
    id_user = models.ForeignKey(User, on_delete = models.CASCADE)
    user_comment = models.TextField("user_comment", null=True, blank=True)
    rating = models.PositiveSmallIntegerField()

class Ingredient_List(models.Model):
    id_ingredient = models.ForeignKey(Ingredient, on_delete = models.CASCADE)
    id_recipes = models.ForeignKey(Recipe, on_delete = models.CASCADE)

class Preference(models.Model):
    id_user = models.ForeignKey(User, on_delete = models.CASCADE)
    id_ingredients = models.ForeignKey(Ingredient, on_delete = models.CASCADE)
    like = models.IntegerField('like')

class Food_To_Substitute(models.Model):
    food_name = models.CharField("food_name", unique=True, max_length = 120)
    description = models.TextField("decription", null=True, blank=True)

    def __str__(self):
        return self.food_name

class Food_Substitute(models.Model):
    id_vegan = models.ForeignKey(Ingredient, on_delete = models.CASCADE)
    id_food_to_substitute = models.ForeignKey(Food_To_Substitute, on_delete = models.CASCADE)


class Restaurant(models.Model):
    id_moderator = models.ForeignKey(User, on_delete = models.CASCADE)
    name = models.CharField("name",unique=True, max_length = 120)
    city = models.CharField("city", max_length = 120)
    foto = models.ImageField("foto",null=True, blank=True)
    street = models.CharField("street", max_length = 120)
    street_number = models.PositiveIntegerField("street_number")
    latX = models.DecimalField("latX", max_digits = 12, decimal_places = 10)
    longY = models.DecimalField("LongY", max_digits = 12, decimal_places = 10)
    hours = models.TextField("hours",null=True, blank=True)
    rating = models.DecimalField("rating", max_digits = 4, decimal_places = 2)
    description = models.TextField("description")

    def __str__(self):
        return self.name

class Rating_Restaurant(models.Model):
    id_user = models.ForeignKey(User, on_delete = models.CASCADE)
    id_restaurant = models.ForeignKey(Restaurant, on_delete = models.CASCADE)
    comment = models.TextField("commet", null=True, blank=True)
    rating = models.DecimalField("rating", max_digits = 4, decimal_places = 2)


class Report_Res(models.Model):
    id_restaurant = models.ForeignKey(Restaurant, on_delete = models.CASCADE)
    id_user = models.ForeignKey(User, on_delete = models.CASCADE)
    description = models.TextField("description")

class Post(models.Model):
    description = models.TextField("description")
    #Do the rest
