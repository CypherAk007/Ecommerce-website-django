from django.contrib import admin
# import the model from models.py after migrating it 
# from .models import Product

from .models import * #all
# Register your models here.

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
