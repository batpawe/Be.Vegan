# Generated by Django 2.2.7 on 2020-03-06 13:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('veggies', '0023_auto_20200306_1309'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='main_post',
            name='data_stamp',
        ),
        migrations.RemoveField(
            model_name='reply_post',
            name='data_stamp',
        ),
    ]
