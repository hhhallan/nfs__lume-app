import styled from "styled-components";

export default function Input({type, label, value, onChange, isError, ...restProps}) {
    return (
        <InputStyled>
            <div>
                <label>{label}</label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    {...restProps}
                />
            </div>
            {!isError && <span>{isError}</span>}
        </InputStyled>
    );
}

const InputStyled = styled.div`

`;