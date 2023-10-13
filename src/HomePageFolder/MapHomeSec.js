import React from 'react'
import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapHomeSec.css'
import markerIcon from '../Images/free-location-icon-2955-thumb.png'
function MapHomeSec() {
  const markerIconConst = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [37, 55],
  });
  const position = [6.473873760299766, 3.775625566659919]

  return (
    <>
 
 <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 />
    <Marker icon={markerIconConst} position={position}>
   
      <Popup>
        Zoom in to see the location 
      </Popup>
    </Marker>
  </MapContainer>,
    </>
  )
}

export default MapHomeSec