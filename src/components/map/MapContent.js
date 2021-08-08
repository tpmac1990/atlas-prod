import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { Map } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux'
import { setMap, toggleFilterPanel, toggleMapDrawButton } from './../../redux'
import { CoordinatesControl } from 'react-leaflet-coordinates'
import Layers from './Layers'
import Panel from '../filter/Panel'
import Draw from './Draw'
import MapDataAdd from './MapDataAdd'
import MobileDraw from './MobileDraw'
import useViewportStyle from '../reusable/hooks/useViewportStyle'



function MapContent() {

  const dispatch = useDispatch()

  const { viewportStyle } = useViewportStyle();
  const is_large = ['tv','desktop','laptop'].includes(viewportStyle)

  // latlng
  const maxBounds = [[-43, 100],[-8, 170]]
  const center = [-27, 132]

  const { map, filteropen, extent, occs, tens } = useSelector(state => state.filterSelection.map_data)  
  const { mdb_active } = useSelector(state => state.leafletDraw)  

  const mapRef = useRef()

  // zoom map to the bounds of the filtered data when data is updated 
  useEffect(() => {
    if (extent != null && Object.keys(map._layers).length > 0){
      const southWest = new L.LatLng(extent['SWLat'], extent['SWLng'])
      const northEast = new L.LatLng(extent['NELat'], extent['NELng'])
      const bounds = new L.LatLngBounds(southWest, northEast);
      map.fitBounds(bounds, {padding: [10, 10]})
    }
  },[occs,tens])
  
  const mapWidthStyle = filteropen ? 'mapWithFilter' : 'fullMap'

  function filterToggleHandler() {
    // if the map draw button is visible and the filter is toggled, then the button will be hidden again
    mdb_active && dispatch(toggleMapDrawButton(false))
    // toggles the filter
    dispatch(toggleFilterPanel())
  }


  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    setTimeout(() => {
      map.invalidateSize()
    },1)
    dispatch(setMap(map))
  }, [mapRef])

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    map.invalidateSize();
  });


  return (
    <div id="map-wrapper">
      <Panel />
      <div id="map-area" className={mapWidthStyle}>
        <div id="map-layers">
          <Map center={center} maxBounds={maxBounds} zoom={4} minZoom={3} ref={mapRef}>
            <Layers center={center}/>
            <Draw />
            <CoordinatesControl position="bottomleft" />
            <MapDataAdd />
          </Map>  
        </div>
        { mdb_active ? <MobileDraw /> : null }
        { filteropen
        ? null
        : (
          <div className="open-filter-toggle" onClick={filterToggleHandler}>
            <span className="material-icons">double_arrow</span>
          </div>)}
      </div>
    </div>
  )
}


export default MapContent
