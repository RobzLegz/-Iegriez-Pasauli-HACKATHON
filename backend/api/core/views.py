import django_filters.rest_framework
from rest_framework import viewsets
from django.contrib.auth.models import User
from core.serializers import UserSerializer, QuestionSerializer, OptionSerializer
from rest_framework import filters

from django_filters.rest_framework import DjangoFilterBackend

from core.models import Question, Option


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email']

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()

    serializer_class = QuestionSerializer


class OptionViewSet(viewsets.ModelViewSet):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['question', 'correct']
