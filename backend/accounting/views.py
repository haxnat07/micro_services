from django.db.models import F, ExpressionWrapper, DecimalField
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from sales.models import *
from .serializers import *


# Admin can see the total revenue per order
@api_view(['GET'])
@permission_classes([IsAdminUser])
def financial_insights(request):
    order_revenues = Order.objects.annotate(
        order_revenue=ExpressionWrapper(
            F('quantity') * F('item__price'),
            output_field=DecimalField()
        )
    ).values('id', 'item__name', 'item__price', 'quantity', 'order_revenue')

    total_revenue_per_order = {}
    for order in order_revenues:
        order_id = order['id']
        item_name = order['item__name']
        item_price = order['item__price']
        quantity = order['quantity']
        order_revenue = order['order_revenue']

        if order_id in total_revenue_per_order:
            total_revenue_per_order[order_id]['total_revenue'] += order_revenue
        else:
            total_revenue_per_order[order_id] = {
                'order_id': order_id,
                'item_name': item_name,
                'price_per_item': item_price,
                'quantity': quantity,
                'total_revenue': order_revenue
            }

    response_data = list(total_revenue_per_order.values())
    
    return Response(response_data)


