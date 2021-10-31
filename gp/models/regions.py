from django.contrib.gis.db import models

class StateSpatial(models.Model):
    _id = models.CharField(max_length=5, primary_key=True)
    name = models.CharField(max_length=40, blank=False, null=False)
    geom = models.MultiPolygonField(srid=4202)

class LocalGovernmentSpatial(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=70, blank=False, null=False)
    geom = models.MultiPolygonField(srid=4202)

class GovernmentRegionSpatial(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=False, null=False)
    geom = models.MultiPolygonField(srid=4202)

class GeologicalProvinceSpatial(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=False, null=False)
    ptype = models.CharField(max_length=70, blank=True, null=True)
    rank = models.CharField(max_length=70, blank=True, null=True)
    geom = models.MultiPolygonField(srid=4202)