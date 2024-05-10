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


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # print('test',data)
        # data['username'] = self.user.username 
        # data['email'] = self.user.email
        serializer = UserSerializerWithToken(self.user).data

        for k,v in serializer.items():

            data[k] = v 
        # print(data)
        return data
    # check at http://127.0.0.1:8000/api/users/login/ 
    # copy the token and parse at jwt.io for getting custom decoded val 
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

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

    
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user # we need user get user object from the token thats sent
    serializer = UserSerializerWithToken(user,many = False) #when we update the user we want to put new token in the local storage
    
    data  = request.data 
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']
    if data['password'] != '':
        user.password = make_password(data['password'])
    
    user.save()

    return Response(serializer.data )

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users,many = True)
    return Response(serializer.data )

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserById(request,pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user,many = False)
    return Response(serializer.data )

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request,pk):
    user = User.objects.get(id=pk)
    
    data  = request.data 
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    user.save()

    serializer = UserSerializer(user,many = False) #when we update the user we want to put new token in the local storage
    return Response(serializer.data )


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request,pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response('User was deleted')

