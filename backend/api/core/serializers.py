from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from core.models import Question, Option

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
        

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            Token.objects.create(user=user)
            return user

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['question', 'correct', 'choice_text']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['q', 'xtraInfo', 'image']
