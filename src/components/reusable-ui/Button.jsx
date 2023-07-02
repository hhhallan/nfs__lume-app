import styled from "styled-components";

export default function Button({variant, children, onClick, ...restProps}) {
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
  &.primary {
    background-color: lightblue;
  }

  &.secondary {
    background-color: lightcoral;
  }
`;