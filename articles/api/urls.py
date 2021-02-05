# from .views import ArticleListView, ArticleDetailView
# from django.urls import path

# urlpatterns = [
#     path("", ArticleListView.as_view()),
#     path("<pk>", ArticleDetailView.as_view()),
# ]

from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', ArticleViewSet, basename='articles')
urlpatterns = router.urls
