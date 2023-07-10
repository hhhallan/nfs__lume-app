import {MainPage} from "../../index.js";
import LaunchCard from "./LaunchCard.jsx";
import styled from "styled-components";

export default function LaunchPage() {
    return (
        <MainPage
            isLogged={false}
            style={{
                background: "linear-gradient(180deg, #FCB045 0%, #FD531D 100%)"
            }}
        >
            <LaunchStyled>
                <LaunchCard/>
            </LaunchStyled>
        </MainPage>
    );
}

const LaunchStyled = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 60px;
  height: 100%;
`;