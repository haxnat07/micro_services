from rest_framework import serializers
from .models import *


#Car Posting Serializer
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields ='__all__'