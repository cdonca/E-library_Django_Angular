# Generated by Django 3.1.1 on 2020-09-23 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_knjiga_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='Korisnik',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=32)),
                ('password', models.CharField(max_length=32)),
                ('ime', models.CharField(max_length=32)),
                ('prezime', models.CharField(max_length=32)),
                ('email', models.CharField(max_length=32)),
            ],
        ),
    ]