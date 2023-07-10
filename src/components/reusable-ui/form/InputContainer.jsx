import styled from "styled-components";

export default function InputContainer({ children }) {
    return (
        <InputContainerStyled>
            {children}
        </InputContainerStyled>
    );
}

const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;