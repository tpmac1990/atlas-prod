from django.contrib.gis.db import models

# ###############################################################################
# Tenement & Occurrence

class State(models.Model):
    _id = models.CharField(max_length=5, primary_key=True)
    name = models.CharField(max_length=40, blank=False, null=False)

# ##################

class Shore(models.Model):
    _id = models.CharField(max_length=3, primary_key=True)
    name = models.CharField(max_length=30, blank=False, null=False)

# ##################

class MaterialCategory(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, blank=False, null=False)

# material_category m2m { _id, material_code, category_id}
class Material(models.Model):
    # code = models.CharField(max_length=6, primary_key=True)
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, blank=False, null=False)
    category = models.ManyToManyField(MaterialCategory, related_name="category_material", blank=True)

    def natural_key(self):
        return (self.name)


# ##################

class LocalGovernment(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=70, blank=False, null=False)
    # geom = models.MultiPolygonField(srid=4202)
    # state = models.ForeignKey(State, on_delete=models.SET_NULL, related_name="state_localgov", blank=False, null=False)

class GovernmentRegion(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=False, null=False)
    # geom = models.MultiPolygonField(srid=4202)
    # state = models.ForeignKey(State, on_delete=models.SET_NULL, related_name="state_govreg", blank=False, null=False)

class GeologicalProvince(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=False, null=False)
    ptype = models.CharField(max_length=70, blank=True, null=True)
    rank = models.CharField(max_length=70, blank=True, null=True)
    # geom = models.MultiPolygonField(srid=4202)

# ##################
# Occurrence Only

class OccTypeSimp(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, blank=False, null=False)

class OccType(models.Model):
    _id = models.IntegerField(primary_key=True)
    original = models.CharField(max_length=50, blank=False, null=False)
    simple = models.ForeignKey(OccTypeSimp, on_delete=models.SET_NULL, related_name="simple_occtype", blank=True, null=True)

    def natural_key(self):
        return (self.original)

# ##################

class OccStatusSimp(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, blank=False, null=False)

class OccStatus(models.Model):
    _id = models.IntegerField(primary_key=True)
    original = models.CharField(max_length=50, blank=False, null=False)
    simple = models.ForeignKey(OccStatusSimp, on_delete=models.SET_NULL, related_name="simple_occstatus", blank=True, null=True)

    def natural_key(self):
        return (self.original)

# ##################

class OccName(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=130, unique=True, blank=False, null=False)
    user_name = models.CharField(max_length=20, blank=False, null=False)
    valid_instance = models.BooleanField(default=False)
    date_created = models.DateField(auto_now=False, auto_now_add=True)

    def natural_key(self):
        return (self.name)

# ##################

class OccOriginalID(models.Model):
    _id = models.CharField(primary_key=True, max_length=20, blank=False, null=False)
    user_name = models.CharField(max_length=20, blank=False, null=False)
    valid_instance = models.BooleanField(default=False)
    date_created = models.DateField(auto_now=False, auto_now_add=True)

# ##################

class OccSize(models.Model):
    _id = models.CharField(primary_key=True, max_length=3, blank=False, null=False)
    name = models.CharField(max_length=20, blank=False, null=False)


# occurrence_majmat m2m { _id, occid, majmat_id}
# occurrence_minmat m2m { _id, occid, minmat_id}
# occurrence_typ m2m { _id, occid, type_id}
# occurrence_oid m2m { _id, occid, oid_id}
# occurrence_name m2m { _id, occid, name_id}
class Occurrence(models.Model):
    # ind = models.CharField(max_length=14, blank=False, null=False, primary_key=True)
    ind = models.IntegerField(primary_key=True)
    status = models.ForeignKey(OccStatus, related_name="status_occurrence", on_delete=models.SET_NULL, blank=True, null=True)
    size = models.ForeignKey(OccSize, related_name="size_occurrence", on_delete=models.SET_NULL, blank=True, null=True, unique=False)
    state = models.ForeignKey(State, related_name="state_occurrence", on_delete=models.SET_NULL, blank=True, null=True)
    localgov = models.ForeignKey(LocalGovernment, related_name="localgov_occurrence", on_delete=models.SET_NULL, blank=True, null=True)
    govregion = models.ForeignKey(GovernmentRegion, related_name="govregion_occurrence", on_delete=models.SET_NULL, blank=True, null=True)
    geoprovince = models.ManyToManyField(GeologicalProvince, related_name="geoprovince_occurrence", blank=True,)
    typ = models.ManyToManyField(OccType, related_name="typ_occurrence", blank=True,)
    oid = models.ManyToManyField(OccOriginalID, related_name="oid_occurrence", blank=True)
    name = models.ManyToManyField(OccName, related_name="name_occurrence", blank=True)
    majmat = models.ManyToManyField(Material, related_name="majmat_occurrence", blank=True)
    minmat = models.ManyToManyField(Material, related_name="minmat_occurrence", blank=True)
    geom = models.PointField(srid=4202) 
    user_name = models.CharField(max_length=20, blank=False, null=False)
    valid_relations = models.BooleanField(default=False)
    valid_instance = models.BooleanField(default=False)
    user_edit = models.BooleanField(default=False)
    date_modified = models.DateField(auto_now=True, auto_now_add=False)
    date_created = models.DateField(auto_now=False, auto_now_add=True)

    # def __str__(self):
    #     return self.ind


# class OccGeom(models.Model):
#     ind = models.OneToOneField(Occurrence,related_name='ind_geom',on_delete=models.CASCADE,primary_key=True)
#     geom = models.PointField(srid=4202)


# will need to be converted to a m2m in the Occurrence model using this as a through model when the user model has been sorted
class OccDeleteRequest(models.Model):
    # ind = models.ForeignKey(Occurrence, related_name="ind_deleterequest", on_delete=models.CASCADE, blank=False, null=False)
    ind = models.IntegerField(blank=False, null=False)
    user_name = models.CharField(max_length=20, blank=False, null=False)
    comment = models.TextField(blank=False)
    reviewed = models.BooleanField(blank=True, default=False)
    outcome = models.TextField(blank=True)
    date_modified = models.DateField(auto_now=True, auto_now_add=False)
    date_created = models.DateField(auto_now=False, auto_now_add=True)

    # class Meta:
    #     unique_together = ('ind', 'user_name')


# class OccIssue(models.Model):
#     ind = models.ForeignKey(Occurrence, related_name="ind_issue", on_delete=models.CASCADE, blank=False, null=False)
#     user_name = models.CharField(max_length=20, blank=False, null=False)
#     issue = models.TextField(blank=False)
#     reviewed = models.BooleanField(default=False)
#     outcome = models.TextField(blank=True)
#     date_modified = models.DateField(auto_now=True, auto_now_add=False)
#     date_created = models.DateField(auto_now=False, auto_now_add=True)



# ###############################################################################
# Tenement Only

class TenAct(models.Model):
    _id = models.CharField(max_length=20, primary_key=True)
    name = models.CharField(max_length=70, blank=False, null=False)
    state = models.CharField(max_length=10, blank=False, null=False)
    link = models.URLField(blank=True, null=True)

class TenTypeSimp(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=False, null=False)


class TenType(models.Model):
    _id = models.IntegerField(primary_key=True)
    original = models.CharField(max_length=70, blank=False, null=False) # this was fname
    # original = models.CharField(max_length=50, blank=False, null=False)
    act = models.ForeignKey(TenAct, on_delete=models.SET_NULL, related_name="act_tentype", blank=True, null=True)
    simple = models.ForeignKey(TenTypeSimp, on_delete=models.SET_NULL, related_name="simple_tentype", blank=True, null=True)

    def natural_key(self):
        return (self.original)


# ##################

class TenStatusSimp(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=70, blank=False, null=False)

class TenStatus(models.Model):
    _id = models.IntegerField(primary_key=True)
    original = models.CharField(max_length=100, blank=False, null=False)
    simple = models.ForeignKey(TenStatusSimp, on_delete=models.SET_NULL, related_name="simple_tenstatus", blank=True, null=True)

    def natural_key(self):
        return (self.original)

# ##################

class TenOriginalID(models.Model):
    _id = models.CharField(primary_key=True, max_length=22, blank=False, null=False)
    user_name = models.CharField(max_length=20, blank=False, null=False)
    valid_instance = models.BooleanField(default=False)
    date_created = models.DateField(auto_now=False, auto_now_add=True)

# ##################

class Exchange(models.Model):
    _id = models.CharField(primary_key=True, max_length=5)
    name = models.CharField(max_length=50, blank=False, null=False)
    city = models.CharField(max_length=50, blank=False, null=False)
    country = models.CharField(max_length=50, blank=False, null=False)

class Listed(models.Model):
    _id = models.IntegerField(primary_key=True)
    ticker = models.CharField(max_length=6, blank=False, null=False)
    exchange = models.ForeignKey(Exchange, on_delete=models.SET_NULL, related_name="exchange_listed", blank=True, null=True)
    user_name = models.CharField(max_length=20, blank=False, null=False)
    valid_instance = models.BooleanField(default=False)
    date_created = models.DateField(auto_now=False, auto_now_add=True)

# class HolderType(models.Model):
#     _id = models.IntegerField(primary_key=True)
#     original = models.CharField(max_length=30, blank=False, null=False)
#     code = models.CharField(max_length=10, blank=True, null=True)


# holder_listed m2m { _id, holder_id, listed_id } not sure about this!
class Holder(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=150, blank=False, null=False, unique=True)
    # typ = models.ForeignKey(HolderType, on_delete=models.SET_NULL, related_name="typ_holder", blank=True, null=True)
    listed = models.ManyToManyField(Listed, related_name="listed_holder", blank=True)
    children = models.ManyToManyField('self', related_name="children_holder", through='Parent', blank=True, symmetrical=False)
    user_name = models.CharField(max_length=20, blank=False, null=False)
    valid_relations = models.BooleanField(default=False)
    valid_instance = models.BooleanField(default=False)
    user_edit = models.BooleanField(default=True) 
    date_modified = models.DateField(auto_now=True, auto_now_add=False)
    date_created = models.DateField(auto_now=False, auto_now_add=True)


class Parent(models.Model):
    _id = models.IntegerField(primary_key=True)
    name = models.ForeignKey(Holder, on_delete=models.SET_NULL, related_name="name_parent", blank=True, null=True)
    child = models.ForeignKey(Holder, on_delete=models.SET_NULL, related_name="child_parent", blank=True, null=True)
    percown = models.FloatField()


# tenement_oid m2m { _id, tenid, TenOriginalID}
# tenement_occurrence m2m { _id, tenid, occurrence_id}
# tenement_majmat m2m { _id, tenid, majmat_id}
# tenement_minmat m2m { _id, tenid, minmat_id}
# tenement_localgov m2m { _id, tenid, localgov_id}
# tenement_govregion m2m { _id, tenid, govregion_id}
# tenement_geoprovince m2m { _id, tenid, geoprovince_id}
class Tenement(models.Model):
    # ind = models.CharField(max_length=16, primary_key=True)
    ind = models.IntegerField(primary_key=True)
    typ = models.ForeignKey(TenType, on_delete=models.SET_NULL, related_name="typ_tenement", blank=True, null=True)
    status = models.ForeignKey(TenStatus, on_delete=models.SET_NULL, related_name="status_tenement", blank=True, null=True)
    state = models.ForeignKey(State, on_delete=models.SET_NULL, related_name="state_tenement", blank=True, null=True)
    shore = models.ForeignKey(Shore, on_delete=models.SET_NULL, related_name="shore_tenement", blank=True, null=True)
    lodgedate = models.DateField(blank=False, null=False)
    startdate = models.DateField(blank=False, null=False)
    enddate = models.DateField(blank=False, null=False)
    localgov = models.ManyToManyField(LocalGovernment, related_name="localgov_tenement", blank=True)
    govregion = models.ManyToManyField(GovernmentRegion, related_name="govregion_tenement", blank=True)
    geoprovince = models.ManyToManyField(GeologicalProvince, related_name="geoprovince_tenement", blank=True)
    oid = models.ManyToManyField(TenOriginalID, related_name="oid_tenement", blank=True)
    holder = models.ManyToManyField(Holder, related_name="holder_tenement", through='TenHolder', blank=True)
    occurrence = models.ManyToManyField(Occurrence, related_name="occurrence_tenement", blank=True)
    majmat = models.ManyToManyField(Material, related_name="majmat_tenement", blank=True)
    minmat = models.ManyToManyField(Material, related_name="minmat_tenement", blank=True)
    geom = models.MultiPolygonField(srid=4202)
    valid_relations = models.BooleanField(default=False)
    user_edit = models.BooleanField(default=False) 
    date_modified = models.DateField(auto_now=True, auto_now_add=False)

    # def __str__(self):
    #     return str(self.ind)

# # make unique together
# class TenIssue(models.Model):
#     ind = models.ForeignKey(Tenement, related_name="ind_issue", on_delete=models.CASCADE, blank=False, null=False)
#     user_name = models.CharField(max_length=20, blank=False, null=False)
#     issue = models.TextField(blank=False)
#     reviewed = models.BooleanField(default=False)
#     outcome = models.TextField(blank=True)
#     date_modified = models.DateField(auto_now=True, auto_now_add=False)
#     date_created = models.DateField(auto_now=False, auto_now_add=True)


# class TenGeom(models.Model):
#     ind = models.OneToOneField(Tenement,related_name='ind_geom',on_delete=models.CASCADE,primary_key=True)
#     geom = models.MultiPolygonField(srid=4202)

# ################## 

class TenHolder(models.Model):
    _id = models.IntegerField(primary_key=True)
    percown = models.FloatField()
    name = models.ForeignKey(Holder, on_delete=models.CASCADE, related_name="name_tenholder", blank=False, null=False)
    tenement = models.ForeignKey(Tenement, on_delete=models.CASCADE, related_name="tenement_tenholder", blank=False, null=False)

    def natural_key(self):
        return self.name.name


# ##################

# change and update models
class TenementChange(models.Model):
    _id = models.IntegerField(primary_key=True)
    ind = models.ForeignKey(Tenement, on_delete=models.CASCADE, related_name="ind_change", blank=False, null=False)
    action = models.CharField(max_length=6, blank=False, null=False)
    field = models.CharField(max_length=30, blank=False, null=False)
    typeval = models.ForeignKey(TenType, on_delete=models.SET_NULL, related_name="typeval_tenement", blank=True, null=True)
    statusval = models.ForeignKey(TenStatus, on_delete=models.SET_NULL, related_name="statusval_tenement", blank=True, null=True)
    lodgedateval = models.DateField(blank=True, null=True)
    startdateval = models.DateField(blank=True, null=True)
    enddateval = models.DateField(blank=True, null=True)
    oidval = models.ForeignKey(TenOriginalID, on_delete=models.SET_NULL, related_name="oidval_tenement", blank=True, null=True)
    holderval = models.ForeignKey(TenHolder, on_delete=models.SET_NULL, related_name="holderval_tenement", blank=True, null=True)
    geoprovinceval = models.ForeignKey(GeologicalProvince, on_delete=models.SET_NULL, related_name="geoprovinceval_tenement", blank=True, null=True)
    holderperc = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    user = models.CharField(max_length=20, blank=False, null=False)
    date_created = models.DateField(blank=False, null=False)

class TenementAddition(models.Model):  
    _id = models.IntegerField(primary_key=True)         
    ind = models.ForeignKey(Tenement, on_delete=models.CASCADE, related_name="ind_addition", blank=False, null=False)
    date = models.DateField(blank=False, null=False)

class TenementRemoval(models.Model):
    _id = models.IntegerField(primary_key=True)
    ind = models.ForeignKey(Tenement, on_delete=models.CASCADE, related_name="ind_inactive", blank=False, null=False)
    date = models.DateField(blank=False, null=False)



class OccurrenceChange(models.Model):
    _id = models.IntegerField(primary_key=True)
    ind = models.ForeignKey(Occurrence, on_delete=models.CASCADE, related_name="ind_change", blank=False, null=False)
    action = models.CharField(max_length=6, blank=False, null=False)
    field = models.CharField(max_length=30, blank=False, null=False)
    typeval = models.ForeignKey(OccType, on_delete=models.SET_NULL, related_name="typeval_occurrence", blank=True, null=True)
    statusval = models.ForeignKey(OccStatus, on_delete=models.SET_NULL, related_name="statusval_occurrence", blank=True, null=True)
    oidval = models.ForeignKey(OccOriginalID, on_delete=models.SET_NULL, related_name="oidval_occurrence", blank=True, null=True)
    nameval = models.ForeignKey(OccName, on_delete=models.SET_NULL, related_name="holderval_occurrence", blank=True, null=True)
    majmatval = models.ForeignKey(Material, on_delete=models.SET_NULL, related_name="majmatval_occurrence", blank=True, null=True)
    minmatval = models.ForeignKey(Material, on_delete=models.SET_NULL, related_name="minmatval_occurrence", blank=True, null=True)
    sizeval = models.ForeignKey(OccSize, on_delete=models.SET_NULL, related_name="sizeval_occurrence", blank=True, null=True)
    geoprovinceval = models.ForeignKey(GeologicalProvince, on_delete=models.SET_NULL, related_name="geoprovinceval_occurrence", blank=True, null=True)
    user = models.CharField(max_length=20, blank=False, null=False)
    date_created = models.DateField(blank=False, null=False)

class OccurrenceAddition(models.Model):
    _id = models.IntegerField(primary_key=True)
    ind = models.ForeignKey(Occurrence, on_delete=models.CASCADE, related_name="ind_addition", blank=False, null=False)
    date = models.DateField(blank=False, null=False)

class OccurrenceRemoval(models.Model):
    _id = models.IntegerField(primary_key=True)
    ind = models.ForeignKey(Occurrence, on_delete=models.CASCADE, related_name="ind_inactive", blank=False, null=False)
    date = models.DateField(blank=False, null=False)


class HolderChange(models.Model):
    _id = models.IntegerField(primary_key=True)
    ind = models.ForeignKey(Holder, on_delete=models.CASCADE, related_name="ind_change", blank=False, null=False)
    action = models.CharField(max_length=6, blank=False, null=False)
    field = models.CharField(max_length=30, blank=False, null=False)
    childval = models.ForeignKey(Holder, on_delete=models.SET_NULL, related_name="childval_holder", blank=True, null=True)
    parentval = models.ForeignKey(Holder, on_delete=models.SET_NULL, related_name="parentval_holder", blank=True, null=True)
    listedval = models.ForeignKey(Listed, on_delete=models.SET_NULL, related_name="listedval_holder", blank=True, null=True)
    childperc = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    parentperc = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    user = models.CharField(max_length=20, blank=False, null=False)
    date_created = models.DateField(blank=False, null=False)