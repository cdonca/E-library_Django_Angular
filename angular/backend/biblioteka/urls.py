from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from rest_framework.authtoken import views
from biblioteka.api import view

router = routers.DefaultRouter()
router.register('users', view.UserViewSet)
router.register('knjigas', view.KnjigaViewSet)
router.register('zaduzenjes', view.ZaduzenjeViewSet)
router.register('zaduzenjesclan', view.ZaduzenjeClanViewSet)
router.register('rezervacija', view.RezervacijaViewSet)
router.register('rezervacijaclan', view.RezervacijaClanViewSet)
router.register('primeraks', view.PrimerakViewSet)
router.register('slikas', view.SlikaViewSet)
router.register('dogadjajs', view.DogadjajViewSet)
router.register('knjigaszanrist', view.KnjigaZanrIstRomViewSet)
router.register('knjigaszanrkom', view.KnjigaZanrKomViewSet)
router.register('knjigaszanrkrimi', view.KnjigaZanrKrimiViewSet)
router.register('knjigaszanrljub', view.KnjigaZanrLjubViewSet)
router.register('knjigaszanrpub', view.KnjigaZanrPubViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('auth/', views.obtain_auth_token),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
