from rest_framework import serializers
from gp.models import Feedback, User


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ["name","email","feedback","rating","user"]

    # def create(self, validated_data):
    #     email = validated_data['email']
    #     print(email)
    #     # ind = validated_data['ind']
    #     # validated_data['reviewed'] = False
    #     # instance, created = OccDeleteRequest.objects.update_or_create(user_name=user_name, ind=ind, defaults=validated_data)
    #     return validated_data