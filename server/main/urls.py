from django.contrib import admin
from django.urls import path, include

from main.views import LayoutListView

urlpatterns = [
    path('layouts/', LayoutListView.as_view(), name='layout-list'),
]