import React from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const MapComponent = (props) => {
    const mapOptions = {
        center: { lat: props.lat, lng: props.lng }, // 지도 초기 위치 설정
        zoom: 16, // 확대/축소 레벨 설정
    }
    const markerPosition = { lat: props.lat, lng: props.lng };

    return (
        <LoadScript googleMapsApiKey="API_KEY">
            <GoogleMap
                mapContainerStyle={{ height: '400px', width: '800px' }} // 지도 컨테이너 크기 설정
                center={mapOptions.center}
                zoom={mapOptions.zoom}>
                <Marker position={markerPosition} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
