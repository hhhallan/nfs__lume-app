import styled from "styled-components";

export default function Button({variant, children, onClick}) {
    return (
        <ButtonStyled className={variant} onClick={onClick}>
            {children}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`

  &.primary {
    background-color: lightblue;
  }

  &.secondary {
    background-color: lightcoral;
  }
`;