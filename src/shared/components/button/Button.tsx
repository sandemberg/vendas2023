import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    marginn?: string;
}

const ButtonGlobal = ({title, marginn, ...props}: ButtonProps) => {
    return (
        <ButtonContainer marginn={marginn} {...props}>
            <Text>{title}</Text>
        </ButtonContainer>
    )

};
export default ButtonGlobal;