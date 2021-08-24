from django.contrib.gis.db import models

# feedback and emails
class Feedback(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=254, blank=True, null=True)
    feedback = models.TextField(blank=True, null=True)
    rating = models.IntegerField(blank=False, null=False)
    read = models.BooleanField(default=False)
    

class KeepPosted(models.Model):
    first_name = models.CharField(max_length=50, blank=False, null=False)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=254, blank=False, null=False)
    submitted_date = models.DateField(auto_now=False, auto_now_add=True)


# records the user by ip address when they navigate to the site
class UserLogOn(models.Model):
    ip = models.CharField(max_length=100, blank=False, null=False)
    open_time = models.DateTimeField(auto_now=False, auto_now_add=True)