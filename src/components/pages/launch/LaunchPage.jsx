import styled from "styled-components";

export default function LaunchPage() {
    return (
        <LaunchStyled>
            <img src="/images/landing.svg" alt="Personne sur une trottinette"/>

            <div>
                <button>Inscription</button>
                <button>Connexion</button>
            </div>
        </LaunchStyled>
    );
}

const LaunchStyled = styled.div`
  
`;