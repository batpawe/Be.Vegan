# Generated by Django 2.2.7 on 2020-02-26 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('veggies', '0005_auto_20200222_2111'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rating_restaurant',
            name='comment',
        ),
        migrations.AddField(
            model_name='rating_restaurant',
            name='user_comment',
            field=models.TextField(blank=True, null=True, verbose_name='user_comment'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='recipe_foto',
            field=models.ImageField(null=True, upload_to='', verbose_name='recipe_foto'),
        ),
    ]
