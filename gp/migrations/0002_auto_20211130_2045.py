# Generated by Django 3.1.2 on 2021-11-30 09:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='holder',
            name='name',
            field=models.CharField(max_length=150, unique=True),
        ),
    ]
