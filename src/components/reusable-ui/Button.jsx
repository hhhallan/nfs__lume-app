import styled from "styled-components";

export default function Button({variant = 'primary', children, onClick, ...restProps}) {
    return (
        <ButtonStyled
            className={variant}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
  font-family: inherit;
  background: none;
  border: none;
  
  &.primary {
    background-color: lightblue;
  }

  &.secondary {
    background-color: lightcoral;
  }
  
  &.back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    
    img {
      width: 24px;
      height: 24px;
      transform: rotate(180deg);
    }
  }
`;