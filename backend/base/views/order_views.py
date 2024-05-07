from django.shortcuts import render


# django rest framwork 
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response

from base.models import Product ,Order,OrderItem,ShippingAddress
from base.serializers import ProductSerializer,OrderSerializer

from rest_framework import status

@api_view(['POST'])
@permission_classes(['IsAuthenticated'])
def addOrderItems(request):
    user = request.user #json data sent here
    data = request.data
    
    orderItems = data['orderItems']

    if orderItems and len(orderItems)==0:
        return Response({'detail':'No Order Items'},status = status.HTTP_400_BAD_REQUEST)
    else:
        # create order 
        order = Order.objects.create(
            user = user,
            paymentMethod = data['paymentMethod'],
            taxPrice = data['taxPrice'],
            ShippingPrice = data['shippingPrice'],
            totalPrice = data['totalPrice'],

        )
        # create ShippingAddress 
        shipping = ShippingAddress.objects.create(
            order = order,
            address=data['shippingAddress']['address'],
            city=data['shippingAddress']['city'],
            postalCode=data['shippingAddress']['postalCode'],
            country=data['shippingAddress']['country'],

        )
        # create orderItems and add to db and set order to orderItems relationship
        for i in orderItems:
            product = Product.objects.get(_id=i['product'])
            item = OrderItem.objects.create(
                product = product,
                order=order,
                name=product.name,
                qty=i['qty'],
                price=i['price'],
                image=product.image.url,
            )
            # Update stock (decrease by no. of orderd items) for that product
            product.countInStock-= item.qty 
            product.save()
    serializer = OrderSerializer(order,many=True)
    return Response(serializer.data)

