from django.urls import path
from . import views

urlpatterns = [
    path('', views.guess_view, name='guess'),
    path('.well-known/farcaster.json', views.farcaster_manifest_view, name='farcaster-manifest'),
]
