import styled from "styled-components";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {InputContainer, Button, FakeLink, Input} from "../../../reusable-ui/component.js";

export default function LoginForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data =>  console.log(data);
    /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [formError, setFormError] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ email, password })
        setEmail("");
        setPassword("");
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }*/

    return (
        <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <Input
                    label={"Email"}
                    type={"email"}
                    {...register("email")}
                />
            </InputContainer>

            <InputContainer>
                <Input
                    label={"Mot de passe"}
                    type={"password"}
                    {...register("password")}
                />
            </InputContainer>
            <span>Mot de passe oublié ?</span>
            <FakeLink href={"/mot-de-passe-oublie"}>Mot de passe oublié ?</FakeLink>

            <Button variant={"primary"} type={"submit"}>Se connecter</Button>
        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.form`

`;