import styled from "styled-components/native";

interface  ButtonContainerProps {
    marginn?: string
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background-color: blue;
    justify-content: center;
    align-items: center;
   
        ${(props) => (props.marginn ? `margin: ${props.marginn};` : '')}
`;
