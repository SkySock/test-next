from rest_framework import serializers

from main.models import Layout


class LayoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Layout
        fields = '__all__'