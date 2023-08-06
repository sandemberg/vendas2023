import { TextInputProps, View } from "react-native";
import { ContainerInput, IconEye } from "./input.style";
import { DiplayFlexColumn } from "../GlobalStyles/globalView.style";
import { textTypes } from "../text/textTypes";
import { theme } from "../../themes/themes";
import TextGlobal from "../text/Text";
import { useState } from "react";


interface InputProps extends TextInputProps{
    title?: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    margin?: string;
}

const InputGlobal = ({margin, secureTextEntry, title, errorMessage, ...props}: InputProps) => {
    
    const [CurrentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnPressEye = () => {
        setCurrentSecure((current) => !current) // ! seta o contrario da função
    }

    return (
        <DiplayFlexColumn marginn={margin}>
            
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

            <View>
                 {/* colocar erroe messsage se exisitir*/}
                <ContainerInput 
                    hasSecureTextEntry={secureTextEntry} 
                    secureTextEntry={CurrentSecure}
                    isError={!!errorMessage} {...props}/>
                {secureTextEntry && (
                    <IconEye 
                        name={CurrentSecure ? "eye" : "eye-blocked"} 
                        onPress={handleOnPressEye} 
                        size={25}
                    />
                )}
            </View>
           

            
             
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