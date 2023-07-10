import styled from "styled-components";

export default function AuthTitle({children}) {
    return (
        <AuthTitleStyled>
            {children}
        </AuthTitleStyled>
    );
}

const AuthTitleStyled = styled.h2`
  color: #FD5E2F;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
`;