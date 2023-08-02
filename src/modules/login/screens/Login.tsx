import { View, Text } from "react-native"
import { ContainerLogin } from "../login.style";
import InputGlobal from "../../../shared/components/input/Input";
import ButtonGlobal from "../../../shared/components/button/Button";


const Login = () => {
    const handleOnPress = () => {
        console.log('clicou')
    }

    return (
        <View>
            <ContainerLogin>
                <Text>Login2</Text>
                <InputGlobal />
                <ButtonGlobal marginn='10px' title="ENTRAR" onPress={handleOnPress}/>
            </ContainerLogin>
           
        </View>
    )

}   

export default Login;