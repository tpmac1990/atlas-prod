from rest_framework import serializers
from gp.models import OccDeleteRequest


class SiteDeleteSerializer(serializers.ModelSerializer):

    class Meta:
        model = OccDeleteRequest
        fields = ['ind','user_name','comment','reviewed']

    def create(self, validated_data):
        user_name = validated_data['user_name']
        ind = validated_data['ind']
        validated_data['reviewed'] = False
        instance, created = OccDeleteRequest.objects.update_or_create(user_name=user_name, ind=ind, defaults=validated_data)
        return instance

    

