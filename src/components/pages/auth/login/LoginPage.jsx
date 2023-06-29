import styled from "styled-components";
import {AuthTitle, Button, Input, InputContainer, LoginForm} from "../../../index.js";

export default function LoginPage() {
    return (
        <LoginStyled>
            <AuthTitle>Connexion</AuthTitle>

            <LoginForm/>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`

`;