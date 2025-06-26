from django.shortcuts import render
from rest_framework.generics import ListAPIView

from main.models import Layout
from main.serializers import LayoutSerializer


# Create your views here.
class LayoutListView(ListAPIView):
    queryset = Layout.objects.all()
    serializer_class = LayoutSerializer