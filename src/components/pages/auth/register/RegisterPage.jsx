import styled from "styled-components";
import RegisterForm from "./RegisterForm.jsx";
import {AuthTitle, FakeLink} from "../../../reusable-ui/component.js";
import {MainPage} from "../../../index.js";


export default function RegisterPage() {


    return (
        <MainPage isLogged={false}>
            <RegisterStyled>
                <AuthTitle>Inscription</AuthTitle>

                <RegisterForm/>

                <p>
                    Vous avez déjà un compte ? <br/>
                    <FakeLink href={"/connexion"}>Se connecter</FakeLink>
                </p>
            </RegisterStyled>
        </MainPage>
    );
}

const RegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  p {
    text-align: center;
    font-size: 1.4rem;
  }
`;