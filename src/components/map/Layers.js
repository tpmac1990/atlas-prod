import React, { Fragment, useEffect } from 'react'
import { Marker, Popup, TileLayer, Circle, FeatureGroup, LayerGroup, LayersControl, Rectangle, GeoJSON, LeafletConsumer } from 'react-leaflet'
import PointsLayer from './PointsLayer'
import PolygonLayer from './PolygonLayer'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { triggerPntMove } from '../../redux'
// import useViewportStyle from '../reusable/hooks/useViewportStyle'
import { setPopupMessage } from '../../redux'


const { BaseLayer, Overlay } = LayersControl

const Layers = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    // const { viewportStyle } = useViewportStyle();
    // const is_large = ['tv','desktop','laptop'].includes(viewportStyle)

    const { is_large } = useSelector(state => state.sizeControl)

    // DOM clickevent to navigate to the detail page from the popup button
    useEffect(() => {
        document.body.addEventListener('click', popupButtonHandler );

        return function cleanup() {
            window.removeEventListener('click', popupButtonHandler );
        } 
    },[]);

    // this handles the action to take when a button is clicked in the map feature popup
    const popupButtonHandler = e => {
        switch(e.target.id){
            case 'more-data-btn':
                history.push(`/detail/${e.target.value}`)
                break;
            
            case 'move-site-btn':
                !is_large && dispatch(setPopupMessage({message: "Press where you want to move the site to", type: 'info', style: 'info-map'}))
                dispatch(triggerPntMove(e.target.value))
                break;

            case 'edit-data-btn':
                history.push(`/detail/${e.target.value}`)
        }
    }

    // I got the google maps urls from: https://hatarilabs.com/ih-en/how-to-add-a-google-map-in-qgis-3-tutorial

    return (
        <Fragment>
            <LayersControl position="topright">
                <BaseLayer checked name="Open Street Map">
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                <BaseLayer name="World Topo Map">
                    <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
                    />
                </BaseLayer>
                <BaseLayer name="World Imagery">
                    <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                </BaseLayer>
                <BaseLayer name="Google Street Map">
                    <TileLayer
                    attribution='Copyright Google Maps'
                    url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
                    />
                </BaseLayer>
                <BaseLayer name="Google Terrain Map">
                    <TileLayer
                    attribution='Copyright Google Maps'
                    url="http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}"
                    />
                </BaseLayer>
                <BaseLayer name="Google Hybrid Map">
                    <TileLayer
                    attribution='Copyright Google Maps'
                    url="http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}"
                    />
                </BaseLayer>
                <Overlay checked name="Occurrences">
                    <PointsLayer />
                </Overlay>
                <Overlay checked name="Tenements">
                    <PolygonLayer />
                </Overlay>
            </LayersControl>
        </Fragment>
    )
}

export default Layers

