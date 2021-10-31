
def set_params_checkbox_list(data):
    ''' parameters to retrieve list of values to display in the filter '''

    dic = {
        'name': data['name'],
        'filterSelectionDic': data['input'],
        'relatedFilterOpen': data['related']['is_open'],
        'priDatasetName': data['dataset'],
        'limit': data['limit'],
        'offset': data['offset'], 
        'filter': data['search'],
    }

    if dic['priDatasetName'] == 'Tenement':
        dic['relDatasetName'] = 'Occurrence'
        dic['geomQuery'] = 'occurrence_tenement__in'
    else:
        dic['relDatasetName'] = 'Tenement'
        dic['geomQuery'] = 'occurrence__in'

    return(dic)


def set_params_map_data(data):
    ''' parameters to retrieve the spatial data to display on the map '''

    dic = {
        'filterSelectionDic': data['input'],
        'includeRelatedData': data['related']['include'],
        'priDatasetName': data['dataset'],
        'offset': data['offset'],
        'limit': data['limit'],
        'current_extent': data['current_extent']
    }

    if dic['priDatasetName'] == 'Tenement':
        dic['relDatasetName'] = 'Occurrence'
        dic['geomQuery'] = 'occurrence_tenement__in'
    else:
        dic['relDatasetName'] = 'Tenement'
        dic['geomQuery'] = 'occurrence__in'

    return(dic)


# from gp.models import Tenement, Occurrence

# def set_params_checkbox_list(data):
#     dic = {
#         'name': data['name'],
#         'filterSelectionDic': data['input'],
#         'includeRelatedData': data['related']['include'],
#         'relatedFilterOpen': data['related']['is_open'],
#         'priDatasetName': data['dataset'],
#         'geomField': 'geom',
#         'IDFieldName': 'ind',
#         'fields': ('pk',),
#         'isSpatialQuery': False,
#         'limit': data['limit'],
#         'offset': data['offset'],
#         'filter': data['search'],
#     }

#     if dic['priDatasetName'] == 'Tenement':
#         dic['priDataset'] = Tenement.objects.all()
#         dic['relDataset'] = Occurrence.objects.all()
#         dic['relDatasetName'] = 'Occurrence'
#         dic['geomQuery'] = 'occurrence_tenement__in'
#     else:
#         dic['priDataset'] = Occurrence.objects.all()
#         dic['relDataset'] = Tenement.objects.all()
#         dic['relDatasetName'] = 'Tenement'
#         dic['geomQuery'] = 'occurrence__in'

#     return(dic)










# def set_params_map_data(data):
#     dic = {
#         'name': data['name'],
#         'filterSelectionDic': data['input'],
#         'includeRelatedData': data['related']['include'],
#         'relatedFilterOpen': data['related']['is_open'],
#         'priDatasetName': data['dataset'],
#         'geomField': 'geom',
#         'IDFieldName': 'ind',
#         'fields': ('pk',),
#         'isSpatialQuery': True,
#         'offset': data['offset'],
#         'limit': data['limit'],
#         'current_extent': data['current_extent']
#     }

#     if dic['priDatasetName'] == 'Tenement':
#         dic['priDataset'] = Tenement.objects.all()
#         dic['relDataset'] = Occurrence.objects.all()
#         dic['relDatasetName'] = 'Occurrence'
#         dic['geomQuery'] = 'occurrence_tenement__in'
#     else:
#         dic['priDataset'] = Occurrence.objects.all()
#         dic['relDataset'] = Tenement.objects.all()
#         dic['relDatasetName'] = 'Tenement'
#         dic['geomQuery'] = 'occurrence__in'

#     return(dic)






# def setParams(data,spatialQuery):
#     print(data)
#     dic = {
#         'name': data['name'],
#         'filterSelectionDic': data['input'],
#         'includeRelatedData': data['related']['include'],
#         'relatedFilterOpen': data['related']['is_open'],
#         'priDatasetName': data['dataset'],
#         'geomField': 'geom',
#         'IDFieldName': 'ind',
#         'geomQuery': 'geom__intersects',
#         'fields': ('pk',),
#         'isSpatialQuery': spatialQuery,
#     }
    
#     if not spatialQuery: 
#         # handles the infinity scroll on the large filter groups
#         dic['limit'] = data['limit']
#         dic['offset'] = data['offset']
#         dic['filter'] = data['search'] # the text entered in the search box
#     else: 
#         # handles the amount of spatial data returned from the query
#         dic['offset'] = data['input']['offset']
#         dic['limit'] = data['input']['limit']

#     if dic['priDatasetName'] == 'Tenement':
#         dic['priDataset'] = Tenement.objects.all()
#         dic['relDataset'] = Occurrence.objects.all()
#         dic['relDatasetName'] = 'Occurrence'
#     else:
#         dic['priDataset'] = Occurrence.objects.all()
#         dic['relDataset'] = Tenement.objects.all()
#         dic['relDatasetName'] = 'Tenement'

#     return(dic)