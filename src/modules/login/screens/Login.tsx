import { View } from "react-native"
import { ContainerLogin } from "../login.style";
import InputGlobal from "../../../shared/components/input/Input";
import ButtonGlobal from "../../../shared/components/button/Button";
import TextGlobal from "../../../shared/components/text/Text";


const Login = () => {
    const handleOnPress = () => {
        console.log('clicou')
    }

    return (
        <View>
            <ContainerLogin>
                <TextGlobal>ttt</TextGlobal>
                <InputGlobal />
                <ButtonGlobal marginn='10px' title="ENTRAR" onPress={handleOnPress}/>
               
            </ContainerLogin>
           
        </View>
    )

}   

export default Login;