import styled from "styled-components/native";

interface ContainerTextProps {
    colorr?: string;
    fontSizee: string;
    fontFamilyy: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold'
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props) => (props.colorr ? `color: ${props.colorr};` : '')}

    padding-top: 3px;
    font-size: ${(props) => props.fontSizee};
    font-family: ${(props) => props.fontFamilyy};
`;