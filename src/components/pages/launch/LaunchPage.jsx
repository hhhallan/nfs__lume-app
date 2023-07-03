import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {Button} from "../../reusable-ui/component.js";

export default function LaunchPage() {
    const navigate = useNavigate();

    const handleInscriptionClick = () => {
        navigate("/inscription");
    };

    const handleConnexionClick = () => {
        navigate("/connexion");
    };

    return (
        <LaunchStyled>
            <img src="/images/landing.svg" alt="Personne sur une trottinette"/>

            <div>
                <Button variant={"secondary"} onClick={handleInscriptionClick}>Inscription</Button>
                <Button variant={"primary"} onClick={handleConnexionClick}>Connexion</Button>
            </div>
        </LaunchStyled>
    );
}

const LaunchStyled = styled.div`
  
`;