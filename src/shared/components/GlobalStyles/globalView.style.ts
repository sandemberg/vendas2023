import styled from "styled-components/native";

interface DiplayProps {
    marginn?: string;
}

export const DiplayFlexColumn = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: ${(props) => props.marginn ? props.marginn : '0px'};

`;