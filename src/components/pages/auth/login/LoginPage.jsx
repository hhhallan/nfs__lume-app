import styled from "styled-components";
import {AuthTitle, FakeLink} from "../../../reusable-ui/component.js";
import LoginForm from "./LoginForm.jsx";

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