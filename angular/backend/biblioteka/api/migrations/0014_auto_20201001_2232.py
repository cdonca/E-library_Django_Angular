# Generated by Django 3.1.1 on 2020-10-01 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_auto_20201001_2027'),
    ]

    operations = [
        migrations.AddField(
            model_name='primerak',
            name='id_knjige',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='zaduzenje',
            name='id_clana',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='zaduzenje',
            name='inv_broj',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
