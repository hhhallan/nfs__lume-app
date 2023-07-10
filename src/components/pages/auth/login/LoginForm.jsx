import styled from "styled-components";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {InputContainer, Button, FakeLink, Input, FormContainer} from "../../../reusable-ui/component.js";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data =>  console.log(data);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/map');
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
            <FakeLink href={"/mot-de-passe-oublie"}>Mot de passe oublié ?</FakeLink>

            <Button variant={"primary"} type={"submit"} onClick={handleClick}>Se connecter</Button>
        </FormContainer>
    );
}