from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from .models import *
from .serializers import *
from warehouse.models import *

# Only Admin can see all the orders
@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_all_orders(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

# Authenticated users can order the item and see their order
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])  
def order_list(request):
    if request.method == 'GET':
        user_orders = Order.objects.filter(user=request.user)
        serializer = OrderSerializer(user_orders, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            item_id = serializer.validated_data['item'].id
            quantity = serializer.validated_data['quantity']
            
            try:
                item = Item.objects.get(id=item_id)
                if item.quantity >= quantity:
                    serializer.save(user=request.user)
                    item.quantity -= quantity
                    item.save()
                    return Response(serializer.data, status=201)
                else:
                    return Response({"message": "Out of stock."}, status=status.HTTP_400_BAD_REQUEST)
            except Item.DoesNotExist:
                return Response({"message": "Item not found."}, status=status.HTTP_400_BAD_REQUEST)
            
        return Response(serializer.errors, status=400)
