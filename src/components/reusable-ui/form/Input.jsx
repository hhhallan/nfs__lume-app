import styled from "styled-components";
import {forwardRef} from "react";

function Input({ type, label, ...restProps }, ref) {    return (
        <InputStyled>
            {/*<div>*/}
                <label>{label}</label>
                <input
                    type={type}
                    {...restProps}
                    ref={ref}
                />
            {/*</div>*/}
            {/*{!isError && <span>{isError}</span>}*/}
        </InputStyled>
    );
}

const InputStyled = styled.div`
  width: 100%;
  
  label {
    margin-left: 10px;
    padding-bottom: 10px;
    font-size: 1rem;
    color: #7F7F7F;
  }
  
  input {
    padding: 10px 20px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #7F7F7F;
    font-family: inherit;
  }
`;
export default forwardRef(Input);