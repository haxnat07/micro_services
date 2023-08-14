from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from .models import *
from .serializers import *

    
@api_view(['GET'])
@permission_classes([AllowAny]) 
def get_item_list(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])  
def create_item(request):
    serializer = ItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)
    
@api_view(['GET'])
@permission_classes([IsAdminUser]) 
def stock_levels(request):
    items = Item.objects.all()
    stock_data = [{'item': item.name, 'quantity': item.quantity} for item in items]
    return Response(stock_data)
