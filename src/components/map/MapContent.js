import React, { useEffect, useRef, useLayoutEffect, useState } from 'react'
import { Map, useMapEvents } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux'
import { setMap, toggleFilterPanel, toggleMapDrawButton, setMapBounds, toggleBounds, preventBoundsUpdate, 
          setInitialBounds, setDataBounds, setFilterBounds } from './../../redux'
import { CoordinatesControl } from 'react-leaflet-coordinates'
import Layers from './Layers'
import Panel from '../filter/Panel'
import Draw from './Draw'
import AddSite from './addsite'
import MapDataAdd from './MapDataAdd'
import MobileDraw from './MobileDraw'


function MapContent() {

  const dispatch = useDispatch()

  const firstUpdate = useRef(true);

  // latlng
  const maxBounds = [[-43, 100],[-8, 170]]
  const center = [-27, 132]

  const { filterSelection, leafletDraw, sizeControl } = useSelector(state => state)
  const { map, filteropen, extent, occs, tens, bounds, tog_bounds, keep_bounds, init_bounds, filter_bounds } = filterSelection.map_data
  const { mdb_active } = leafletDraw
  const { is_large } = sizeControl
  
  const mapRef = useRef()

  // zoom map to the bounds of the filtered data when data is updated 
  useEffect(() => {
    if (extent != null && Object.keys(map._layers).length > 0){
      const southWest = new L.LatLng(extent['SWLat'], extent['SWLng'])
      const northEast = new L.LatLng(extent['NELat'], extent['NELng'])
      const bounds = new L.LatLngBounds(southWest, northEast);
      // only set bounds if new. this prevents the page from resizing when a site is moved
      dispatch(setMapBounds(bounds))
      // update bounds unless they have been set to be kept
      dispatch(toggleBounds(true))
    }
  },[occs,tens])


  // Controls the map bounds. Runs when bounds is toggled but can be prevented by making 'keep_bounds' true.
  useEffect(() => {
    if ( tog_bounds ){
      if ( !keep_bounds ){
        try {
          map.fitBounds(bounds)
        } catch {}
      } else {
        dispatch(preventBoundsUpdate(false))
      }
      dispatch(toggleBounds(false))
    }
  },[tog_bounds])


  // get the initial bounds of the map so it can be set back to them on reset
  const have_init_bounds = useRef(false)
  useEffect(() => {
    if ( bounds && !have_init_bounds.current && !init_bounds ){
      // console.log(1)
      dispatch(setInitialBounds(bounds))
      have_init_bounds.current = true
    }
  },[bounds])


  const filterToggleHandler = () => {
    // if the map draw button is visible and the filter is toggled, then the button will be hidden again
    mdb_active && dispatch(toggleMapDrawButton(false))
    // toggles the filter
    dispatch(toggleFilterPanel())
  }

  // fits the map to the map area. removes all the grey parts
  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    setTimeout(() => {
    bounds ? map.fitBounds(bounds) : map.invalidateSize()
    },1)
    map && dispatch(setMap(map))
  }, [mapRef])

  
  // commits the map bounds to state when they change
  const moveHandler = e => {
    
    // In mobile view when the filter is displayed then map is 0 so the bounds are tiny. The if statement solves this
    if ( is_large || !filteropen){
      const timer = setTimeout(() => {
        // console.log('move')
        dispatch(setMapBounds(e.target.zoomControl._map.getBounds()))
      }, 1000);
  
      return () => clearTimeout(timer);
    }
  }

  // re-assigns the bounds when the filter is closed in mobile view. This is most 
  //  necessary when the filter is open, the user moves to another page and then back to the filter again
  //  and then closes the filter to show the map. This triggers the invalidate size which then causes the map to 
  //  zoom out. This will save the bounds when the filter is open, and re-assign them when it is closed
  useEffect(() => {
    if ( !is_large && !firstUpdate.current ){
      if (!filteropen && filter_bounds){
        setTimeout(() => {
          dispatch(setMapBounds(filter_bounds))
          dispatch(toggleBounds(true))
        }, 100);
      } else {
        bounds && dispatch(setFilterBounds(bounds))
      }
    }
  },[filteropen])


  // resets the map when the filter is closed so there is no grey strip
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    map.invalidateSize()
  });


  const MapToggle = () => {
    return (
      filteropen 
      ? null
      : (
        <div className="open-filter-toggle" onClick={filterToggleHandler}>
          <span className="material-icons">double_arrow</span>
        </div>
      )
    )
  }

  return (
    <div id="map-wrapper">
      <Panel />
      <div id="map-area" className={filteropen ? 'mapWithFilter' : 'fullMap'}>
        <div id="map-layers">
          <Map center={center} maxBounds={maxBounds} zoom={is_large ? 4 : 3} minZoom={3} ref={mapRef} onMove={ moveHandler } >
            <Layers center={center}/>
            <Draw />
            <CoordinatesControl position="bottomleft" />
            <MapDataAdd />
            <AddSite />
            <MobileDraw />
            <MapToggle />
          </Map>  
        </div>
      </div>
    </div>
  )
}

export default MapContent
