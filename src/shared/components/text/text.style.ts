import styled from "styled-components/native";

interface ContainerTextProps {
    colorr?: string;
    fontSizee: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props) => (props.colorr ? `color: ${props.colorr};` : '')}

    font-size: ${(props) => props.fontSizee};
`;