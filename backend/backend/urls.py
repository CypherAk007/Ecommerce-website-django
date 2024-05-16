"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include

# set url for images to access fm admin panel
from django.conf import settings # To work with files from settings.py file
from django.conf.urls.static import static #this fnc allows us to connect to the urls.

from django.views.generic import TemplateView

# METHOD -1 
# Therefore, after a bit of research, I stumbled upon this solution using Browser Router:
# 1- Reuse BrowserRouter instead of HashRouter in your App.js

# 2- In your main urls.py (under backend, not base), place the following:

#   from django.urls import path, include, re_path
 
# # In your urlpatterns, add this path right below the home address:
#     path('', TemplateView.as_view(template_name='index.html')),
#     re_path('(^(?!(api|admin|static|images)).*$)',
#         TemplateView.as_view(template_name="index.html")),
#  Notice the api|admin|images|static, it basically excludes those patterns. Add your excluded paths accordingly.
 

#  METHOD -2 
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('login', TemplateView.as_view(template_name='index.html')),
    path('register', TemplateView.as_view(template_name='index.html')),
    path('profile', TemplateView.as_view(template_name='index.html')),
    path('shipping', TemplateView.as_view(template_name='index.html')),
    path('payment', TemplateView.as_view(template_name='index.html')),
    path('placeorder', TemplateView.as_view(template_name='index.html')),
    path('order/<str:pk>', TemplateView.as_view(template_name='index.html')),
    path('product/<str:pk>', TemplateView.as_view(template_name='index.html')),
    path('cart/<str:pk>', TemplateView.as_view(template_name='index.html')),
    path('cart', TemplateView.as_view(template_name='index.html')),
    path('admin/userlist', TemplateView.as_view(template_name='index.html')),
    path('admin/user/<str:pk>/edit', TemplateView.as_view(template_name='index.html')),
    path('admin/productlist', TemplateView.as_view(template_name='index.html')),
    path('admin/product/<str:pk>/edit', TemplateView.as_view(template_name='index.html')),
    path('admin/orderlist', TemplateView.as_view(template_name='index.html')),
    path('api/products/', include('base.urls.product_urls')),
    path('api/users/', include('base.urls.user_urls')),
    path('api/orders/', include('base.urls.order_urls')),
]
 
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)