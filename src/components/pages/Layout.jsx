import {Outlet} from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
    return (
        <LayoutStyled>
            <Outlet/>
        </LayoutStyled>
    );
}

const LayoutStyled = styled.div`

`;