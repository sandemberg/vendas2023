import styled from "styled-components/native";

interface ContainerTextProps {
    colorr?: string;
    custonMargin?: string
    fontSizee: string;
    fontFamilyy: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold'
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props) => (props.colorr ? `color: ${props.colorr};` : '')}
    ${(props) => (props.custonMargin ? `margin: ${props.custonMargin};` : '')}

    padding-top: 3px;
    font-size: ${(props) => props.fontSizee};
    font-family: ${(props) => props.fontFamilyy};
`;