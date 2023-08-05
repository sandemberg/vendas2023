import { TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DiplayFlexColumn } from "../GlobalStyles/globalView.style";
import { textTypes } from "../text/textTypes";
import { theme } from "../../themes/themes";
import TextGlobal from "../text/Text";

interface InputProps extends TextInputProps{
    title?: string;
    errorMessage?: string;
}

const InputGlobal = ({title, errorMessage, ...props}: InputProps) => {
    return (
        <DiplayFlexColumn>
            
            {/* se existir o titulo coloca Text e o titulo*/}
            {title &&  (
            <TextGlobal 
                marginn={'0px 0px 4px 16px'}
                cor={theme.colors.grayTheme.gray100} 
                typee={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
             >
                {title}
            </TextGlobal> 
            )}
            {/* colocar erroe messsage se exisitir*/}
            <ContainerInput isError={!!errorMessage} {...props}/>
             
            {/* se existir mensagem de erro coloca Text como error message*/}
            {errorMessage && (
            <TextGlobal 
                marginn="0px 0px 0px 8px" 
                typee={textTypes.PARAGRAPH_SMALL_SEMI_BOLD} 
                cor={theme.colors.orangeTheme.orange80}
            >
                {errorMessage}
            </TextGlobal>
            )}
             
            
        </DiplayFlexColumn>
    )
}

export default InputGlobal;