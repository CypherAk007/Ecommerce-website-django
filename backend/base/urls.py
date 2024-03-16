# Connects views to urls
from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes,name="routes"),
]