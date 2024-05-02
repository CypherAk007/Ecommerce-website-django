from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'



class UserSerializer(serializers.ModelSerializer):
    # To let django know that name is custom attribute
    name = serializers.SerializerMethodField(read_only = True)
    # updating the id to _id as in frontend we have kept it like this
    _id = serializers.SerializerMethodField(read_only = True)

    isAdmin = serializers.SerializerMethodField(read_only = True)


    class Meta:
        model = User
        fields = ['id','_id','username','email','name','isAdmin']

    def get__id(self,obj): #name is _id so get _ _id
        return obj.id
    
    def get_isAdmin(self,obj): #get if its admin access or not
        return obj.is_staff
    
    def get_name(self,obj):
        name = obj.first_name
        # if first name is empty return email 
        if name == '':
            name = obj.email
        return name

# For refresh token 
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = ['id','_id','username','email','name','isAdmin','token']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)