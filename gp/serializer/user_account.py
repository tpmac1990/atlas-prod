from djoser.serializers import UserCreateSerializer
# this is how you retrieve a custom user model if you have one
from django.contrib.auth import get_user_model
User = get_user_model()

# overwrting the user create serializer
class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password')