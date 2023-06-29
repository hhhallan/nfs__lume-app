import styled from "styled-components";

export default function AuthTitle({children}) {
    return (
        <AuthTitleStyled>
            {children}
        </AuthTitleStyled>
    );
}

const AuthTitleStyled = styled.h2`
  color: red;
`;