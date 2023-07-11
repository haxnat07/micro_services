from django.shortcuts import render
from .models import *

# Create your views here.

# Ad posting by customer
@api_view(['POST'])
def create_car_ad(request):
    serializer = CarSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
#Get postings of user
@api_view(['GET'])
def get_user_postings(request):
    user = request.user.id
    postings = Car.objects.filter(user=user)
    serialized = CarSerializer(postings, many=True)
    return Response(serialized.data, status=status.HTTP_200_OK)


#Get Current User's Posting Detail
@api_view(['GET'])
def get_posting(request, id):
    posting = Car.objects.get(id=id)
    serializer = CarSerializer(posting)
    return Response(serializer.data)


#Get Current postings
@api_view(['GET'])
def get_all_postings(request):
    postings = Car.objects.all()
    serializer = CarSerializer(postings,many = True)
    return Response(serializer.data)


# Update Post
@api_view(['PUT'])
def update_posting(request, id):
    try:
        posting = Car.objects.get(id=id)
    except Car.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    posting_serializer = CarSerializer(posting, data=request.data)
    if posting_serializer.is_valid():
        posting_serializer.save()
        return Response(status=status.HTTP_200_OK)


# Delete Current Post
@api_view(['DELETE'])
def delete_posting(request, id):
    try:
        posting = Car.objects.get(id=id)
    except Car.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    posting.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)