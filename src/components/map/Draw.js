import React, { useState, useRef, useEffect } from 'react';
import { FeatureGroup, Rectangle, Circle } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useSelector, useDispatch } from 'react-redux'
import { divIcon } from 'leaflet'
import { storeEditHandlers, setRectangleLatLngs, setMarkerLatLngs, toggleFilterPanel, toggleMapDrawButton } from '../../redux'
import 'leaflet-draw';

const Draw = () => {
    const [editableFG, setEditableFG] = useState(null);

    const editRef = useRef(null)

    const dispatch = useDispatch()

    const { is_large } = useSelector(state => state.sizeControl)

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
            dispatch(setRectangleLatLngs(e.layer._bounds))
            !is_large && dispatch(toggleFilterPanel())
            // hide the draw button once the rectangle has been drawn on mobile
            !is_large && dispatch(toggleMapDrawButton(false))
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