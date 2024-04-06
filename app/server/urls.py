from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("get_web_results/<str:search_query>/", views.get_web_results, name="get_web_results"),
]