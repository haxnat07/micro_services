from django.urls import path
from .views import *

urlpatterns = [
    path('finances/', financial_insights, name='financial-insights'),
]
