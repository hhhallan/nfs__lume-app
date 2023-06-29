import styled from "styled-components";
import {forwardRef} from "react";

function Input({ type, label, ...restProps }, ref) {    return (
        <InputStyled>
            <div>
                <label>{label}</label>
                <input
                    type={type}
                    {...restProps}
                    ref={ref}
                />
            </div>
            {/*{!isError && <span>{isError}</span>}*/}
        </InputStyled>
    );
}

const InputStyled = styled.div`

`;
export default forwardRef(Input);