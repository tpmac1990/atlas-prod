"""
Django settings for Atlas project.

Generated by 'django-admin startproject' using Django 2.2.1.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

# automatically configures Django app to work on heroku including reading the database configurations from the config vars and making the static files work. Make sure ‘django_heroku.settings(local())’ function below is before the database configurations as it is here (especially for postgis db’s) otherwise this function will override the postgis ENGINE back to just a postgres.
# import django_heroku
import os
from datetime import timedelta

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('AT_SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = BASE_DIR == 'C:\\Django_Projects\\03_geodjango\\Atlas\\atlas'

# ‘*’ will allow any domain to host the page. Once the app is deployed, only the domains you want to use here should be listed for security reasons.
ALLOWED_HOSTS = ['*']


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
    'django.contrib.gis',
    'webpack_loader',
    'rest_framework',
    'djoser',
    'leaflet',
    'gp',
    'social_django',
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',
    'sslserver' # required to run ssl localhost
]


MIDDLEWARE = [
    'social_django.middleware.SocialAuthExceptionMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, "gp","static")],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect'
            ],
        },
    },
]


WEBPACK_LOADER = {
    'DEFAULT': {
            'CACHE': not DEBUG,
            'BUNDLE_DIR_NAME': '',
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
            "POLL_INTERVAL": 0.1,
            "TIMEOUT": None,
            "IGNORE": [".*\.hot-update.js", ".+\.gp"]
        }
}



WSGI_APPLICATION = 'backend.wsgi.application'

# # As written above, this command is responsible for passing the database and static file configurations to heroku. The heroku database url is postgres by default and can’t be changed. This command will tell heroku that the database is just postgres, but this will be overridden below with the 'DATABASE[‘default’][‘ENGINE’] = “Django.contrib.gis.db.backends.postgis”’ command.
# django_heroku.settings(locals())


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

if 'RDS_DB_NAME' in os.environ:
    DATABASES = {
        'default': {
            'ENGINE': 'django.contrib.gis.db.backends.postgis',
            'NAME': os.environ['RDS_DB_NAME'],
            'USER': os.environ['RDS_USERNAME'],
            'PASSWORD': os.environ['RDS_PASSWORD'],
            'HOST': os.environ['RDS_HOSTNAME'],
            'PORT': os.environ['RDS_PORT'],
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.contrib.gis.db.backends.postgis',
            'NAME': os.environ.get('AT_DB_NAME'),
            'USER' : os.environ.get('AT_DB_USER'),
            'PASSWORD' : os.environ.get('AT_DB_PASSWORD'),
            'HOST' : 'localhost',
            'PORT' : '5432'
        }
    }

# provide the email that handles sending the djoser links account activation, reset, etc
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'no.reply.gplore@gmail.com'
EMAIL_HOST_PASSWORD = 'rdyteiugjwqqzqif'
EMAIL_USE_TLS = True

# this was not used
# # Links the Django app to the remote heroku database with the DATABASE_URL config var.
# # comment out the following two lines until heroku has been setup or it will throw an error related to DATABASE setup
# import dj_database_url
# if not DEBUG:
#     # the following line will cause an error if active when running locally
#     DATABASES['default'] =  dj_database_url.config() 
#     # I originally thought this was not needed as it is already stated above, but I was unable to migrate in heroku without it.
#     DATABASES['default']['ENGINE'] = "django.contrib.gis.db.backends.postgis"


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Australia/Sydney'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Generally required for GDAL and GEOS in geospatial applications. It created an error in my case so i commented it out.
# GEOS_LIBRARY_PATH = os.environ.get('GEOS_LIBRARY_PATH')
# GDAL_LIBRARY_PATH = os.environ.get('GDAL_LIBRARY_PATH')


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

# The location of the staticfiles directory.
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATIC_URL = '/static/'

# crispy forms will use bootstrap2 by default. this will tell it to use 4.
# CRISPY_TEMPLATE_PACK = 'bootstrap4'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "static"), 
)

# Responsible for serving static files
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# sets the authentication systems for the rest framework
REST_FRAMEWORK = {
    # all views will require the user to be authenticated by default
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],
    # # Use JWT for authentication
    # 'DEFAULT_AUTHENTICATION_CLASSES': (
    #     'rest_framework_simplejwt.authentication.JWTAuthentication',
    # ),
}

    # 'rest_framework.permissions.IsAuthenticated'
    # 'DEFAULT_PERMISSION_CLASSES': ['rest_framework.permissions.AllowAny'],
    # 'DEFAULT_AUTHENTICATION_CLASSES:': ('rest_framework_simplejwt.authentication.JWTAuthentication',)

AUTHENTICATION_BACKENDS = (
    'social_core.backends.google.GoogleOAuth2',
    'social_core.backends.facebook.FacebookOAuth2',
    'django.contrib.auth.backends.ModelBackend'
)

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('JWT',),
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'AUTH_TOKEN_CLASSES': (
        'rest_framework_simplejwt.tokens.AccessToken',
    )
}


DJOSER = {
    'LOGIN_FIELD': 'email', # tells djoser we are using email as the login field
    'USER_CREATE_PASSWORD_RETYPE': True, # requires a confirm password field that needs to be called 're_password'
    'USERNAME_CHANGED_EMAIL_CONFIRMATION': True, # send email confirmation when username is changed
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION': True, # email confirmation of password change
    'SEND_CONFIRMATION_EMAIL': True,
    'SET_USERNAME_RETYPE': True,
    'SET_PASSWORD_RETYPE': True,
    'PASSWORD_RESET_CONFIRM_URL': 'password/reset/confirm/{uid}/{token}',
    'USERNAME_RESET_CONFIRM_URL': 'email/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL': 'activate/{uid}/{token}', # format of link user recieves in email to activate their account
    'SEND_ACTIVATION_EMAIL': True, # to recieve activation email
    'SOCIAL_AUTH_TOKEN_STRATEGY': 'djoser.social.token.jwt.TokenStrategy',
    'SOCIAL_AUTH_ALLOWED_REDIRECT_URIS': [
        'https://localhost:8000/facebook',
        'https://localhost:8000/google',
        'https://www.gplore.com/facebook',
        'https://www.gplore.com/google', 
    ],
    # link to the UserCreateSerializer in serializer/user_accounts
    'SERIALIZERS': {
        # gp = name of app, serializer = folder holding the serializers
        'user_create': 'gp.serializer.UserCreateSerializer',
        'user': 'gp.serializer.UserCreateSerializer',
        'current_user': 'gp.serializer.UserCreateSerializer',
        'user_delete': 'djoser.serializer.UserDeleteSerializer',
    }
}

# the scope of data that will be retrived from the users account such as email
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '1025382461491-lcfn5hbencsgk6ofje1nk5kb9j75o10m.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'aw2R86gel2n7zIia-OPBpYpw'
SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', 'openid']
SOCIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA = ['first_name', 'last_name']

# facebook won't extract the email by default
SOCIAL_AUTH_FACEBOOK_KEY = '561794225061537'
SOCIAL_AUTH_FACEBOOK_SECRET = '4f05bb4d93a20fcdb802d3075fdd83d9'
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
    'fields': 'email, first_name, last_name'
}

# use the UserAccount model for managing users by default
AUTH_USER_MODEL = 'gp.UserAccount'
