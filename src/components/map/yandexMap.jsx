import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './yandexMap.scss';

const yandexMap = ({ data }) => {
    const mapState = {
        center: data.center,
        zoom: data.zoom,
    };

    const propertiesPlacemark = {
        balloonContentBody: data.content,
        iconCaption: data.title,
    };

    return (
        <YMaps>
            <Map
                className="map"
                id="map"
                defaultState={{
                    ...mapState,
                    controls: ['zoomControl', 'fullscreenControl'],
                    behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
                }}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
                <Placemark
                    defaultGeometry={mapState.center}
                    modules={['geoObject.addon.balloon']}
                    properties={propertiesPlacemark}
                />
            </Map>
        </YMaps>
    );
};

export default yandexMap;
