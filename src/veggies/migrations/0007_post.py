# Generated by Django 2.2.7 on 2020-01-13 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('veggies', '0006_auto_20191215_1829'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(verbose_name='description')),
            ],
        ),
    ]