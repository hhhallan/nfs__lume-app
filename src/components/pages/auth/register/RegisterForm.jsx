import styled from "styled-components";
import {Button, Input, InputContainer} from "../../../index.js";
import {useForm} from "react-hook-form";

export default function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <RegisterFormStyled onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>

                <Input
                    label={"Prénom"}
                    type={"text"}
                    {...register("firstName")}
                />

                <Input
                    label={"Nom"}
                    type={"text"}
                    {...register("lastName")}
                />
            </InputContainer>

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

            <InputContainer>
                <Input
                    label={"Numéro de téléphone"}
                    type={"text"}
                    {...register("phoneNumber")}
                />
            </InputContainer>

            <Button variant={"primary"} type={"submit"}>S'inscrire</Button>
        </RegisterFormStyled>
    );
}

const RegisterFormStyled = styled.form`
  
`;