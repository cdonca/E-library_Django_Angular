from django.conf import settings
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.utils import timezone


def upload_path(instance, filename):
    return '/'.join([filename])


class Knjiga(models.Model):
    naziv = models.CharField(max_length=32)
    autor = models.CharField(max_length=32)
    izdavac = models.CharField(max_length=16)
    godina_izdanja = models.IntegerField()
    zanr = models.CharField(max_length=32)
    pismo = models.CharField(max_length=16)
    broj_strana = models.IntegerField()
    broj_primeraka = models.IntegerField()
    vrsta_poveza = models.CharField(max_length=16)
    img = models.ImageField(blank=True, null=True, upload_to=upload_path)


class User(models.Model):
    username = models.CharField(max_length=32)
    password = models.CharField(max_length=32)
    ime = models.CharField(max_length=32)
    prezime = models.CharField(max_length=32)
    email = models.CharField(max_length=32)
    rola = models.CharField(max_length=32, default='clan')


class Primerak(models.Model):
    inv_broj = models.IntegerField()
    id_knjige = models.ForeignKey(Knjiga, on_delete=models.CASCADE)


class Zaduzenje(models.Model):
    datum_zaduzenja = models.DateField()
    datum_vracanja = models.DateField()
    id_clana = models.ForeignKey(User, on_delete=models.CASCADE)
    inv_broj = models.ForeignKey(Primerak, on_delete=models.CASCADE)


class Slika(models.Model):
    img = models.ImageField(blank=True, null=True, upload_to=upload_path)
    opis = models.CharField(max_length=64)


class Dogadjaj(models.Model):
    img = models.ImageField(blank=True, null=True, upload_to=upload_path)
    opis = models.CharField(max_length=64)
    datum = models.DateField()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Rezervacija(models.Model):
    datum_rezervacije = models.DateTimeField(default=timezone.now)
    id_clana = models.ForeignKey(User, on_delete=models.CASCADE)
    id_knjige = models.ForeignKey(Knjiga, on_delete=models.CASCADE)
