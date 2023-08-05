import styled from "styled-components/native";
import { theme } from "../../themes/themes";
import LinearGradient from 'react-native-linear-gradient';

interface  ButtonContainerProps {
    marginn?: string
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${(props) => (props.marginn ? `margin: ${props.marginn};` : '')}
`;

export const GradientButton = styled(LinearGradient)`
    width: 100%;
    height: 100%; 
    border-radius : 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${(props) => (props.marginn ? `margin: ${props.marginn}` : '')}
`;  

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
    ${(props) => (props.marginn ? `margin: ${props.marginn}` : '')}
    border-color: ${theme.colors.mainTheme.primary}
    background-color: transparent;

    border-width: 1px;
   
`;

export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerProps>`
    background-color:  ${theme.colors.grayTheme.gray100};
    margin: 10px;
`;

export const ActivityIndicatorButton = styled.ActivityIndicator `
    margin-left: 8px;
`;



