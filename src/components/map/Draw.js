import React, { useState, useRef, useEffect } from 'react';
import { FeatureGroup, Rectangle, Circle } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useSelector, useDispatch } from 'react-redux'
import { divIcon } from 'leaflet'
import { storeEditHandlers, setRectangleLatLngs, setMarkerLatLngs, toggleFilterPanel, storeFilterRectangleLayer, 
            toggleFilterDraw, resetMapDataOffset, setMapIsLoading, closeMapPopup, setDrawTriggerSource } from '../../redux'
import 'leaflet-draw';

const Draw = () => {
    const [editableFG, setEditableFG] = useState(null);

    const editRef = useRef(null)

    const dispatch = useDispatch()

    const { sizeControl, leafletDraw } = useSelector(state => state)
    const { is_large } = sizeControl
    const { filterDrawToggle, drawTrigger } = leafletDraw

    const siteIcon = divIcon({
        className: '',
        html: "<div class=yellowmarker></div>"
    });

    // This will automatically clear the existing square when the new one is drawn
    // manages what happens once the draw tool has been used
    const onCreated = e => {
        var drawType = e.layerType;
        if ( drawType == 'marker' ){
            dispatch(setMarkerLatLngs(e.layer._latlng))
        } else {
            // store the layer of the drawn rectangle so it can be used to clear it later
            dispatch(storeFilterRectangleLayer(e.layer))
            // store the rectangles bounds
            dispatch(setRectangleLatLngs(e.layer._bounds))
            !is_large && filterDrawToggle && dispatch(toggleFilterPanel())
            // when in mobile view, when the draw function is toggled from the filter the filterDrawToggle state is turned to true which means the filter is re-opened after the draw is complete. This needs to be turned back to false  
            !is_large && dispatch(toggleFilterDraw(false))
            // if the draw function was accessed from the map then trigger a new search
            if (drawTrigger == 'map'){
                // Reseting the offset will result in a new set of data, not appending onto existing data
                dispatch(resetMapDataOffset())
                // set loading which will trigger the useEffect below that will fetch the geospatial data
                dispatch(setMapIsLoading())
                // clear any map popup and highlight marker
                dispatch(closeMapPopup())
            } 
            drawTrigger == 'filter' && dispatch(setDrawTriggerSource(null))
        }

        const drawnItems = editableFG.leafletElement._layers;
        Object.keys(drawnItems).length > 1 &&
            Object.keys(drawnItems).forEach((layerid, index) => {
                if (index > 0) return;
                const layer = drawnItems[layerid];
                editableFG.leafletElement.removeLayer(layer);
            });
    };

    const onFeatureGroupReady = reactFGref => {
        // store the ref for future access to content
        setEditableFG(reactFGref);
    };

    useEffect(() => {
        const editHandlers = editRef.current.leafletElement._toolbars
        dispatch(storeEditHandlers(editHandlers))
    }, [])

    return (
        <FeatureGroup
            ref={featureGroupRef => {
                onFeatureGroupReady(featureGroupRef);
            }}>
            <EditControl 
                ref={editRef}
                position="topleft" 
                className='edit-rectangle'
                onCreated={onCreated}
                draw={{
                    polyline: false,
                    circle: false,
                    polygon: false,
                    circlemarker: false,
                    marker: {
                        icon: siteIcon
                    },
                    rectangle: {
                        shapeOptions: { 
                            className: 'edit-rectangle'
                        },
                    }
                }} 
            />
        </FeatureGroup>
    );
};

export default Draw;

// how to change edit rectangle color
// https://stackoverflow.com/questions/56615491/react-leaflet-draw-how-to-create-draw-functions-with-standard-buttons-without-u