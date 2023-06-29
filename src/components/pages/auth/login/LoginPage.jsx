import styled from "styled-components";
import {AuthTitle, FakeLink, LoginForm} from "../../../index.js";

export default function LoginPage() {
        return (
        <LoginStyled>
            <AuthTitle>Connexion</AuthTitle>

            <LoginForm/>

            <p>
                Vous n'avez pas encore de compte ? <br/>
                <FakeLink href={"/inscription"}>S'inscrire</FakeLink>
            </p>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`

`;