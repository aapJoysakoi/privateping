from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .settings import SECRET_ADMIN_URL

urlpatterns = [
    path(SECRET_ADMIN_URL + 'admin/', admin.site.urls),
    path("", TemplateView.as_view(template_name="index.html")),
    path("", include("registration.urls")),
    path("", include("chat.urls")),
]
