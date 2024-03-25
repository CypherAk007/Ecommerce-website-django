from django.shortcuts import render
from django.http import JsonResponse
from .products import products

# django rest framwork 
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .serailizers import ProductSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims add as many values as you want
        token['username'] = user.username
        token['message'] = 'hello world'
        # ...

        return token
    
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serilizer = ProductSerializer(products,many = True)
    return Response(serilizer.data )


@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serilizer = ProductSerializer(product,many=False)
    return Response(serilizer.data)
