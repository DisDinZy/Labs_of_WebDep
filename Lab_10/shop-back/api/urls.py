from django.urls import path
from api import views

urlpatterns = [
    # Категории
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:id>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', views.CategoryProductsAPIView.as_view()),

    # Продукты (обрати внимание на product_id вместо id, как просили в задании)
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
]