from django.contrib import admin
# import the model from models.py after migrating it 
from .models import Product
# Register your models here.

admin.site.register(Product)
