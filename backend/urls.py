from django.urls import path, include, re_path

urlpatterns = [
    path('auth/', include('djoser.urls')), # all djoser API calls come through here. registration and email related
    path('auth/', include('djoser.urls.jwt')), # all jwt API calls through here. access and refresh tokens
    path('auth/', include('djoser.social.urls')), # all social API calls
    path('',include('gp.urls')), # make sure your own urls go after the djoser urls
]
