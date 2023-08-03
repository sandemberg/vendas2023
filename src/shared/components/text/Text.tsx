import {TextProps as TextPropsNative} from "react-native/types"
import { ContainerText } from "./text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface TextPropss extends TextPropsNative{
    cor?: string;
    typee?: string;
}

const TextGlobal = ({ cor, typee, ...props}: TextPropss) => {
    const handSize = useMemo(() => {
        switch (typee) {
            case textTypes.TITLE:
                return '25px';
            default:
                return '16px';  
        }
    }, [typee]);  

    return <ContainerText fontSizee={handSize} colorr={cor} {...props}/>;
};

export default TextGlobal;