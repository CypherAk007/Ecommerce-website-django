# Connects views to urls
from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('',views.getRoutes,name="routes"),
    path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/',views.registerUser, name='register'),
    path('users/profile/',views.getUserProfile,name="users-profile"),
    path('users/',views.getUsers,name="users"),
    path('products/',views.getProducts,name="products"),
    path('products/<str:pk>/',views.getProduct,name="product"),
]