from django.shortcuts import render

# django rest framwork 
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.products import products
from base.models import Product
from base.serializers import ProductSerializer,UserSerializer,UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status


@api_view(['POST'])
def registerUser(request):
    data = request.data 
    try:
        user = User.objects.create(
            first_name = data['name'],
            username = data['email'],
            email = data['email'],
            # we have to hash the pwd 
            password = make_password(data['password']),

        )
        serializer = UserSerializerWithToken(user,many=False)
        return Response(serializer.data)
    except:
        message = {'detail':'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user,many = False)
    return Response(serializer.data )

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users,many = True)
    return Response(serializer.data )