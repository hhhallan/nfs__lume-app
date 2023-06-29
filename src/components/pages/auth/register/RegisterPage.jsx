import styled from "styled-components";
import {AuthTitle, FakeLink, RegisterForm} from "../../../index.js";

export default function RegisterPage() {


    return (
        <RegisterStyled>
            <AuthTitle>Inscription</AuthTitle>

            <RegisterForm/>

            <p>
                Vous avez déjà un compte ? <br/>
                <FakeLink href={"/connexion"}>Se connecter</FakeLink>
            </p>
        </RegisterStyled>
    );
}

const RegisterStyled = styled.div`

`;