import {useNavigate} from "react-router-dom";
import {BottomMenu, Button, Divider} from "../../reusable-ui/component.js";

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