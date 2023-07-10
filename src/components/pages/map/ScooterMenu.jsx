import React from "react";
import {BottomMenu} from "../../reusable-ui/component.js";

export default function ScooterMenu({ scooter, onClick }) {
    return (
        <BottomMenu>
            <div onClick={onClick}>CLOSE</div>
            <h1>{scooter.name}</h1>
        </BottomMenu>
    );
}