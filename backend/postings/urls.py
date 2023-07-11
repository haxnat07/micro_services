from django.contrib import admin
from django.urls import path,
from .views import *

urlpatterns = [
    path('post/',views.create_car_ad,name="car-posting"),
    path('all-postings',views.get_all_postings,name="all-postings"),
    path('postings/<int:id>', views.get_posting, name='posting-detail'),
    path('postings/<int:id>/update/', views.update_posting, name='update-postings'),
    path('postings/<int:id>/delete/', views.delete_posting, name='delete-postings'),
    #Login user's postings
    path('user-postings',views.get_user_postings,name="user-postings"),

]