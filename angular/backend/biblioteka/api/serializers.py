from rest_framework import serializers

from .models import User
from .models import Knjiga
from .models import Zaduzenje
from .models import Primerak
from .models import Slika
from .models import Dogadjaj
from .models import Rezervacija


class KnjigaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Knjiga
        fields = ['id', 'naziv', 'autor', 'izdavac', 'godina_izdanja', 'zanr', 'pismo',
                  'broj_strana', 'broj_primeraka', 'vrsta_poveza', 'img']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'ime', 'prezime', 'email', 'rola']
        extra_kwargs = {'password': {'write_only': True}}


class ZaduzenjeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zaduzenje
        fields = ['id', 'datum_zaduzenja', 'datum_vracanja', 'id_clana', 'inv_broj']


class PrimerakSerializer(serializers.ModelSerializer):
    class Meta:
        model = Primerak
        fields = ['id', 'inv_broj', 'id_knjige']


class SlikaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slika
        fields = ['id', 'img', 'opis']


class DogadjajSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dogadjaj
        fields = ['id', 'img', 'opis', 'datum']


class RezervacijaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rezervacija
        fields = ['id', 'datum_rezervacije', 'id_clana', 'id_knjige']
