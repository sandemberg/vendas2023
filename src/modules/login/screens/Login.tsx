import { View } from "react-native"
import { ContainerLogin } from "../login.style";
import InputGlobal from "../../../shared/components/input/Input";
import ButtonGlobal from "../../../shared/components/button/Button";
import TextGlobal from "../../../shared/components/text/Text";
import { theme } from "../../../shared/themes/themes";


const Login = () => {
    const handleOnPress = () => {
        console.log('clicou')
    }

    return (
        <View>
            <ContainerLogin>
                <TextGlobal>ttt</TextGlobal>
                <InputGlobal />
                <ButtonGlobal 
                    typeButton={theme.buttons.buttonsTheme.primary} 
                    margin='10px' 
                    title="ENTRAR" 
                    onPress={handleOnPress}
                />
                </ContainerLogin>
           
        </View>
    )

}   

export default Login;