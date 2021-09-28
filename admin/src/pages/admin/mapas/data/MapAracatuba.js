import React, {useState} from 'react';

//MapBox
import ReactMapGL from 'react-map-gl';


export default function MapAracatuba() {

  //MapBox
  const [viewport, setViewport] = useState({
    width: '90vw',
    height: '90vh',
    latitude:  -21.2115,
    longitude: -50.4261,
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