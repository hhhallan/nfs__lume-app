import styled from "styled-components";
import {useState} from "react";
import {Button, Input, InputContainer} from "../../../index.js";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [formError, setFormError] = useState([]);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ email, password })
        setEmail("");
        setPassword("");
    }

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <InputContainer>
                <Input
                    label={"email"}
                    type={"email"}
                    value={email}
                    onChange={handleChangeEmail}
                    // isError={}
                />
            </InputContainer>

            <InputContainer>
                <Input
                    label={"password"}
                    type={"password"}
                    value={password}
                    onChange={handleChangePassword}
                    // isError={}
                />
            </InputContainer>

            <Button variant={"primary"} type={"submit"}>Se connecter</Button>
        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.form`

`;