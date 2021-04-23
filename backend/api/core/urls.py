from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from core.views import UserViewSet, QuestionViewSet, OptionViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('questions', QuestionViewSet)
router.register('options', OptionViewSet)


urlpatterns = [
    path('', include(router.urls))
]