from django.db import connection
from django.http import HttpResponse

from .models import Knjiga
from .models import Rezervacija
from .models import Zaduzenje
from .models import Primerak
from .models import Slika
from .models import Dogadjaj
from .models import User

from rest_framework import viewsets, permissions
from biblioteka.api.serializers import UserSerializer
from biblioteka.api.serializers import KnjigaSerializer
from biblioteka.api.serializers import ZaduzenjeSerializer
from biblioteka.api.serializers import RezervacijaSerializer
from biblioteka.api.serializers import PrimerakSerializer
from biblioteka.api.serializers import SlikaSerializer
from biblioteka.api.serializers import DogadjajSerializer

from rest_framework.authentication import TokenAuthentication


class KnjigaViewSet(viewsets.ModelViewSet):
    queryset = Knjiga.objects.all()
    serializer_class = KnjigaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def post(self, request, *args, **kwargs):
        img = request.data['img']
        naziv = request.data['naziv']
        autor = request.data['autor']
        izdavac = request.data['izdavac']
        godina_izdanja = request.data['godina_izdanja']
        broj_primeraka = request.data['broj_primeraka']
        broj_strana = request.data['broj_strana']
        pismo = request.data['pismo']
        vrsta_poveza = request.data['vrsta_poveza']
        zanr = request.data['zanr']

        Knjiga.objects.create(img=img, naziv=naziv, autor=autor, izdavac=izdavac, godina_izdanja=godina_izdanja,
                              broj_primeraka=broj_primeraka, broj_strana=broj_strana, pismo=pismo,
                              vrsta_poveza=vrsta_poveza, zanr=zanr)
        return HttpResponse({'message': 'Knjiga je uspesno sacuvana.'}, status=200)

    def put(self, request, *args, **kwargs):
        img = request.data['img']
        naziv = request.data['naziv']
        autor = request.data['autor']
        izdavac = request.data['izdavac']
        godina_izdanja = request.data['godina_izdanja']
        broj_primeraka = request.data['broj_primeraka']
        broj_strana = request.data['broj_strana']
        pismo = request.data['pismo']
        vrsta_poveza = request.data['vrsta_poveza']
        zanr = request.data['zanr']

        Knjiga.objects.update(img=img, naziv=naziv, autor=autor, izdavac=izdavac, godina_izdanja=godina_izdanja,
                              broj_primeraka=broj_primeraka, broj_strana=broj_strana, pismo=pismo,
                              vrsta_poveza=vrsta_poveza, zanr=zanr)
        return HttpResponse({'message': 'Knjiga je uspesno sacuvana.'}, status=200)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ZaduzenjeViewSet(viewsets.ModelViewSet):
    queryset = Zaduzenje.objects.all()
    serializer_class = ZaduzenjeSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class RezervacijaViewSet(viewsets.ModelViewSet):
    queryset = Rezervacija.objects.all()
    serializer_class = RezervacijaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self):
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM Rezervacija WHERE id_clana = %s", [Rezervacija.id_clana])
            row = cursor.fetchall()
        return row


class PrimerakViewSet(viewsets.ModelViewSet):
    queryset = Primerak.objects.all()
    serializer_class = PrimerakSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class SlikaViewSet(viewsets.ModelViewSet):
    queryset = Slika.objects.all()
    serializer_class = SlikaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def post(self, request, *args, **kwargs):
        img = request.data['img']
        opis = request.data['opis']
        Slika.objects.create(img=img, opis=opis)
        return HttpResponse({'message': 'Slika je sacuvana.'}, status=200)


class KnjigaZanrIstRomViewSet(viewsets.ModelViewSet):
    queryset = Knjiga.objects.filter(zanr="istorijski roman")
    serializer_class = KnjigaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class KnjigaZanrLjubViewSet(viewsets.ModelViewSet):
    queryset = Knjiga.objects.filter(zanr="ljubavna drama")
    serializer_class = KnjigaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class KnjigaZanrKomViewSet(viewsets.ModelViewSet):
    queryset = Knjiga.objects.filter(zanr="komedija")
    serializer_class = KnjigaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class KnjigaZanrPubViewSet(viewsets.ModelViewSet):
    queryset = Knjiga.objects.filter(zanr="publicistika")
    serializer_class = KnjigaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class KnjigaZanrKrimiViewSet(viewsets.ModelViewSet):
    queryset = Knjiga.objects.filter(zanr="kriminalisticki")
    serializer_class = KnjigaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class DogadjajViewSet(viewsets.ModelViewSet):
    queryset = Dogadjaj.objects.all()
    serializer_class = DogadjajSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class RezervacijaClanViewSet(viewsets.ModelViewSet):
    queryset = Rezervacija.objects.filter(id_clana=5)
    serializer_class = RezervacijaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ZaduzenjeClanViewSet(viewsets.ModelViewSet):
    queryset = Zaduzenje.objects.filter(id_clana=5)
    serializer_class = ZaduzenjeSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
