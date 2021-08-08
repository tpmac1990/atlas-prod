from rest_framework import serializers
from gp.models import UserLogOn


# saves the ip address and time when someone logs on to the site
class UserLogOnSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = UserLogOn
        fields = ("ip",)