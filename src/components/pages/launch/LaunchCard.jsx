import styled from "styled-components";
import {Button} from "../../reusable-ui/component.js";
import {useNavigate} from "react-router-dom";

export default function LaunchCard() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/connexion");
    }

    return (
        <LaunchCardStyled>
            <div>
                <h2>Facilitez vos trajets, sans polluer.</h2>
                <p>Rendez votre voyage plus sain et plus agréable sans polluer avec Lume</p>
            </div>
            <Button onClick={handleClick}>
                <img src="/icons/scooter.svg" alt=""/>
                Commencer à rider
            </Button>
        </LaunchCardStyled>
    );
}

const LaunchCardStyled = styled.div`
  display: flex;
  padding: 30px 10px 10px 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  border-radius: 10px;
  background: #FFF;

  div {
    display: flex;
    padding: 0 20px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    text-align: center;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1.4rem;
      color: #7F7F7F;
    }
  }
`;