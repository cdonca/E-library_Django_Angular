# Generated by Django 3.1.1 on 2020-09-23 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_korisnik'),
    ]

    operations = [
        migrations.AddField(
            model_name='korisnik',
            name='rola',
            field=models.CharField(default='clan', max_length=32),
        ),
    ]