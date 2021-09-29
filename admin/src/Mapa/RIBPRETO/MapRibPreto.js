import React, {useState} from 'react';

//MapBox
import ReactMapGL from 'react-map-gl';

export default function MapRibPreto() {

  //MapBox
  const [viewport, setViewport] = useState({
    width: 730,
    height: 700,
    latitude: -21.1767,
    longitude: -47.8208,
    zoom: 12
  });

  return (

        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapStyle='mapbox://styles/yanpina/cktt00sjq06ae17pny3d4iwli'
        />
  );
}