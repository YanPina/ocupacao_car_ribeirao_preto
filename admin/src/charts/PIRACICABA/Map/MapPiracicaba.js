import React, {useState} from 'react';

//MapBox
import ReactMapGL from 'react-map-gl';


export default function MapPiracicaba() {

  //MapBox
  const [viewport, setViewport] = useState({
    width: 730,
    height: 700,
    latitude: -22.725,
    longitude: -47.6476,
    zoom: 12
  });

  return (

        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapStyle='mapbox://styles/yanpina/cktu0u1qk0ump17oau16t67kn'
        />
  );
}