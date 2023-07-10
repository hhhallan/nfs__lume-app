import styled from "styled-components";

export default function FormContainer({ children, onSubmit }) {
    return (
        <FormStyled onSubmit={onSubmit}>
            {children}
        </FormStyled>
    );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  button {
    margin-top: 24px;
  }
`;