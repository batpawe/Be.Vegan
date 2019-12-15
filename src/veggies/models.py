from django.db import models


class Users(models.Model):
    login = models.CharField("login", unique=True, blank=True)
    email = models.CharField("email", unique=True, blank=True)
    created_at = models.DateField("created_at")
    height = models.PositiveIntegerField("height", null=True, blank=True)
    weight = models.DecimalField("weight", null=True, blank=True)
    age = models.PositiveIntegerField("age", null=True, blank=True)
    activity = models.PositiveIntegerField("activity", max_length=4,null=True, blank=True)


class Ingredients(models.Model):
    name = models.CharField("name", unique=True)
    calories = models.PositiveIntegerField("calories", null=True, blank=True)


class Recipes(models.Model):
    recipe_decryption = models.TextField("recipe_descyption")
    recipe_foto = models.ImageField("recipe_foto")
    id_user = models.ForeignKey(Users, on_delete=models.CASCADE)


class Rating_Recipes(models.Model):
    id_recipe = models.ForeignKey(Recipes)
    id_user = models.ForeignKey(Users)
    user_comment = models.TextField("user_comment", null=True, blank=True)
    rating = models.PositiveSmallIntegerField(max_length=5)

class Ingredient_List(models.Model):
    id_ingredient = models.ForeignKey(Ingredients)
    id_recipes = models.ForeignKey(Recipes)

class Preferences(models.Model):
    id_user = models.ForeignKey(Users)
    id_ingredients = models.ForeignKey(Ingredients)
    like = models.IntegerField('like')

class Food_To_Substitutes(models.Model):
    food_name = models.CharField("food_name", unique=True)
    description = models.TextField("decryption", null=True, blank=True)

class Food_Substitutes(models.Model):
    id_vegan = models.ForeignKey(Ingredients)
    id_food_to_substitute = models.ForeignKey(Food_To_Substitutes)

class Restaurants(models.Model):
    id_moderator = models.ForeignKey(Users)
    name = models.CharField("name",unique=True)
    city = models.CharField("city")
    foto = models.ImageField("foto",null=True, blank=True)
    street = models.CharField("street")
    street_number = models.PositiveIntegerField("street_number")
    latX = models.DecimalField("latX")
    longY = models.DecimalField("LongY")
    hours = models.TextField("hours",null=True, blank=True)
    rating = models.DecimalField("rating")
    description = models.TextField("description")

class Rating_Restaruant(models.Model):
    id_user = models.ForeignKey(Users)
    id_restaurant = models.ForeignKey(Restaurants)
    comment = models.TextField("commet", null=True, blank=True)
    rating = models.DecimalField("rating")


class Report_Res(models.Model):
    id_restaurant = models.ForeignKey(Restaurants)
    id_user = models.ForeignKey(Users)
    description = models.TextField("description")