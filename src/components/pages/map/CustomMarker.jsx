import {Marker} from "react-map-gl";
import React from "react";
import styled from "styled-components";

export default function CustomMarker({ scooter, onClick }) {
    return (
        <Marker
            longitude={scooter.longitude}
            latitude={scooter.latitude}
        >
            <CustomMarkerStyled onClick={onClick} />
        </Marker>
    );
}

const CustomMarkerStyled = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-image: url("/icons/scooter.svg");
  background-color: #fff;
`;