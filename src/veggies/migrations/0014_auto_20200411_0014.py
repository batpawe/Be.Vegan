# Generated by Django 2.2.7 on 2020-04-11 00:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('veggies', '0013_auto_20200411_0013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='main_post',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='kgohyhjgpt5s/public/images/main_posts', verbose_name='foto'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='recipe_foto',
            field=models.ImageField(null=True, upload_to='kgohyhjgpt5s/public/images/recipe_fotos', verbose_name='recipe_foto'),
        ),
        migrations.AlterField(
            model_name='reply_post',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='kgohyhjgpt5s/public/images/post_replies', verbose_name='foto'),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='kgohyhjgpt5s/public/images/restaurants', verbose_name='foto'),
        ),
    ]