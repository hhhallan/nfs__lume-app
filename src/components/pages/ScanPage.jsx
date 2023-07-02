import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export default function ScanPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/map');
    }

    return (
        <ScanStyled>
            <p>Placez le QRCode au centre de la caméra</p>
            <div className="qrcode" />

            <div className="back-button" onClick={() => handleClick()}/>
        </ScanStyled>
    );
}

const ScanStyled = styled.div`
  background-color: #333;
  color: white;
  height: 100vh;
  
  .qrcode {
    width: 220px;
    height: 220px;
    border-radius: 20px;
    border: 3px solid white;
  }
  
  .back-button {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #fff;
  }
`;