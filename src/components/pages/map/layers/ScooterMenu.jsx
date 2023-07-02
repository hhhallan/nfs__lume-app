import React from "react";
import styled from "styled-components";
import {BottomMenu} from "../../../index.js";

export default function ScooterMenu({ scooter, onClick }) {
    return (
        <BottomMenu>
            <div onClick={onClick}>CLOSE</div>
            <h1>{scooter.name}</h1>
        </BottomMenu>
    );
}