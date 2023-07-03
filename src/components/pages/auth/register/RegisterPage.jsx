import styled from "styled-components";
import RegisterForm from "./RegisterForm.jsx";
import {AuthTitle, FakeLink} from "../../../reusable-ui/component.js";


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