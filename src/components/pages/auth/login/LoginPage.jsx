import {AuthTitle, FakeLink} from "../../../reusable-ui/component.js";
import LoginForm from "./LoginForm.jsx";
import {MainPage} from "../../../index.js";
import styled from "styled-components";

export default function LoginPage() {
    return (
        <MainPage isLogged={false}>
            <LoginStyled>
                <AuthTitle>Connexion</AuthTitle>

                <LoginForm/>

                <p>
                    Vous n'avez pas encore de compte ? <br/>
                    <FakeLink href={"/inscription"}>S'inscrire</FakeLink>
                </p>
            </LoginStyled>
        </MainPage>
    );
}

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  
  p {
    text-align: center;
    font-size: 1.4rem;
  }
`;