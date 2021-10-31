from django.core.serializers import serialize
import json
from django.apps import apps
import time
from gp.functions.query_functions import time_past

def serialize_to_geo_json(dataset,geomField,fields):
    ''' serializes the polygon/point data in to geojson data.
        This is 5x slower than 'queryset_geojson_serializer' method
    '''
    data =  serialize(
                'geojson',  
                dataset,
                geometry_field=geomField,
                use_natural_foreign_keys=True, 
                use_natural_primary_keys=True,
                fields=fields,
                srid= 4202
    )
    return data


def queryset_geojson_serializer(queryset, fields, spatial_field):
    ''' source: https://stackoverflow.com/questions/48040545/how-to-do-performance-optimization-while-serializing-lots-of-geodjango-geometry
        serializes the polygon/point data in to geojson data. This method is 7x faster than the above method.
        The original code used json.load() and json.dump() to combine the data, but by leaving it in string form, performance was increased from 5x to 7x faster 
    '''
    # if the dataset is not in use then an empty dic will be passed in. In this case use the 'serialize_to_geo_json' method to return an empty geojson object
    if type(queryset) == dict:
        return serialize_to_geo_json(queryset,spatial_field,fields)

    # test to make sure that all fields are in the model
    # this returns a better error when the field isn't present.
    model = queryset.model

    # try to get srid from the spatial field
    if model._meta.get_field(spatial_field).srid:
        srid = model._meta.get_field(spatial_field).srid
    else:
        srid = 4202

    # get unique pk list
    pk = model._meta.pk.name
    qs_id_list = tuple(queryset.values_list(pk, flat=True))

    # if values
    if len(qs_id_list) > 0:
        # generate initial SQL, round to '9' decimal places
        query_raw = f'SELECT {", ".join(fields)}, st_AsGeoJSON({spatial_field}, {9}) AS geojson FROM {model._meta.db_table}'

        # select only values in queryset.
        if len(qs_id_list) == 1:
            where = f' WHERE {pk} = {qs_id_list[0]}'
        else:
            where = f' WHERE {pk} IN' + str(qs_id_list)

        query_raw += where

        result = queryset.raw(query_raw)

        # generate features
        features = []
        for v in result:
            feature = '{"type": "Feature", "properties": {"pk": ' + str(v.ind) + '},"geometry": ' + v.geojson + '}'
            features.append(feature)

    else:
        features = []

    # convert python dictionary into json
    geojson = '{"type": "FeatureCollection", "crs": {"type": "name", "properties": {"name": "EPSG:' + str(srid) + '"}}, "features": [' + ','.join(features) + ']}'
    return geojson



def serialize_and_combine(p,datasets,offset):
    ''' serialize the primary and related datasets '''

    # # old way. 7x slower
    # primarySerializer = serialize_to_geo_json(datasets['priDataset'],p['geomField'],p['fields'])
    # relatedSerializer = serialize_to_geo_json(datasets['relDataset'],p['geomField'],p['fields'])

    primarySerializer = queryset_geojson_serializer(queryset=datasets['priDataset'], fields=['ind'], spatial_field='geom')
    relatedSerializer = queryset_geojson_serializer(queryset=datasets['relDataset'], fields=['ind'], spatial_field='geom')
    
    serializer = {
        "primarySerializer": primarySerializer,
        "relatedSerializer": relatedSerializer,
        "extent": datasets['extent']
    }

    serializer['totalCount'] = datasets['totalCount']
    serializer['hasMore'] = datasets['hasMore']
    serializer['priDataset'] = datasets['priDataset'].count() + offset
    serializer['relDataset'] = 0 if datasets['relDataset'] == {} else datasets['relDataset'].count()

    return serializer





#     # generate features
#     features = []
#     for v in result:
#         print(v.geojson)
#         print(json.loads(v.geojson))
#         # properties = {field: str(getattr(v, field)) for i, field in enumerate(fields)}
#         # field is the pk of the table but the popup requires it to be labelled 'pk'
#         properties = {'pk': str(getattr(v, field)) for i, field in enumerate(fields)}
#         feature = {'type': 'Feature',
#                 'properties': properties,
#                 'geometry': json.loads(v.geojson)
#                 }
#         features.append(feature)

# else:
#     features = []

# # convert python dictionary into json
# geojson = json.dumps({
#     "type": "FeatureCollection",
#     "crs": {"type": "name", "properties": {"name": f"EPSG:{srid}"}},
#     'features': features
# })
# print(geojson)
# return geojson