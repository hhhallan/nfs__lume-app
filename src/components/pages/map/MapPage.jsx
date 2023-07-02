import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import {CustomMarker, ScanMenu, ScooterMenu} from "../../index.js";

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;


const MapPage = () => {
    const [selectedScooter, setSelectedScooter] = useState(null)
    const [viewState, setViewState] = useState({
        latitude: 49.4431,
        longitude: 1.0942,
        zoom: 12,
    });

    // Gestion de l'affichage des menus
    // si une trottinette est séléctionnée au clic, le ScooterMenu apparait, sinon c'est le ScanMenu

    const scooters = [
        {
            latitude: 49.4396,
            longitude: 1.0944,
            name: 'Scooter 1',
        },
        {
            latitude: 49.4528,
            longitude: 1.0919,
            name: 'Scooter 2',
        },
        {
            latitude: 49.4012,
            longitude: 1.0946,
            name: 'Scooter 3',
        }
    ];

    const handleShowMenu = (e) => {
        console.log('click', e)
        setSelectedScooter(e);
    }

    const handleCloseMenu = () => {
        setSelectedScooter(null);
    }

    return (
        <MapStyled>
            <ReactMapGL
                {...viewState}
                width={"100%"}
                height={"100%"}
                mapboxAccessToken={TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onMove={event => setViewState(event.viewState)}
                // onClick={handleCloseMenu}
            >


                {scooters.map((scooter) => (
                    <CustomMarker key={scooter.name} scooter={scooter} onClick={() => handleShowMenu(scooter)}/>
                ))}

                {selectedScooter ? (
                    <ScooterMenu scooter={selectedScooter} onClick={handleCloseMenu} />
                ) : (
                    <ScanMenu />
                )}
            </ReactMapGL>
        </MapStyled>
    );
};

const MapStyled = styled.div`
  height: 100vh;
  
  .mapboxgl-control-container {
    display: none;
  }
`;

export default MapPage;
