from django.db import models
from accounts.models import UserAccount

# Create your models here.

class Order(models.Model):
    user = models.ForeignKey(UserAccount,on_delete=models.SET_NULL,null=True)
    item = models.ForeignKey('warehouse.Item', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
