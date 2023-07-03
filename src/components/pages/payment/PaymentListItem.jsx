import styled from "styled-components";

export default function PaymentListItem({isActive = false, name}) {
    return (
        <ListItemStyled isActive={isActive}>
            <span>actif</span>
            <div>
                <img src="/icons/card.svg" alt="Carte de paiement"/>
                <p>{name}</p>
            </div>
        </ListItemStyled>
    );
}

const ListItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;
  
  span {
    font-size: 1rem;
    color: ${(props) => props.isActive ? '#61F22D' : '#A0A0A0'};
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
    
    img {
      width: 22px;
      height: 22px;
    }
    
    p {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
`;