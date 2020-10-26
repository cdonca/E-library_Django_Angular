from django.contrib import admin
from .models import Knjiga
from .models import Zaduzenje
from .models import Primerak
from .models import Slika
from .models import Dogadjaj
from .models import User
from .models import Rezervacija

admin.site.register(User)
admin.site.register(Knjiga)
admin.site.register(Zaduzenje)
admin.site.register(Primerak)
admin.site.register(Slika)
admin.site.register(Dogadjaj)
admin.site.register(Rezervacija)
