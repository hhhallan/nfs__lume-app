import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {Button} from "../reusable-ui/component.js";

export default function SecondaryPage({ title, children, variant = 'primary' }) {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate('/map');
    }

    return (
        <SecondaryPageStyled className={variant}>
            <PageHeaderStyled>
                <Button variant={"back"} onClick={handleBackButton}>
                    <img src="/icons/arrow.svg" alt="Bouton de retour"/>
                </Button>

                <h3>{title}</h3>
            </PageHeaderStyled>

            {children}
        </SecondaryPageStyled>
    );
}

const SecondaryPageStyled = styled.div`
  padding: 60px 20px 0;
  height: 100vh;
  // Futur :  
  &.primary {
    
  }
  
  &.secondary {
    
  }
`;

const PageHeaderStyled = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
  
`;