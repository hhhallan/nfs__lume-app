import {BottomMenu, Button} from "../../../index.js";
import {useNavigate} from "react-router-dom";

export default function ScanMenu() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/scan');
    }

    return (
        <BottomMenu>
            <Button onClick={handleClick}>
                Scanner une trottinette
            </Button>
        </BottomMenu>
    );
}