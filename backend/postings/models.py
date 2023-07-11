from django.db import models
from django.conf import settings
from accounts.models import UserAccount
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Car(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.SET_NULL,null=True, blank=True)
    city = models.CharField(max_length=50,blank=False, null=False)
    car_info = models.CharField(max_length=100,blank=False, null=False)
    register = models.CharField(max_length=50,blank=False, null=False)
    color = models.CharField(max_length=50,blank=False, null=False)
    mileage = models.CharField(max_length=100,blank=False, null=False)
    price = models.CharField(max_length=100,blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    thumbnail = models.FileField(upload_to='thumbnail/images', null=True, blank=True)
    engine_type = models.CharField(max_length=50,blank=False, null=False)
    engine_capacity = models.CharField(max_length=100,blank=False, null=False)
    assembly = models.CharField(max_length=100,blank=False, null=False)
    transmission = models.CharField(max_length=50,blank=False, null=False)
    contact_number = models.CharField(max_length=100, blank=False, null=False)
    secondary_number = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        return self.city