import { View } from "react-native"
import { ContainerLogin, ImageLogo } from "../login.style";
import InputGlobal from "../../../shared/components/input/Input";
import ButtonGlobal from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/themes";



const Login = () => {
    const handleOnPress = () => {
        console.log('clicou')
    }

    return (
        <View>
            <ContainerLogin>
                <ImageLogo resizeMOde='contain' source={require('../../../assets/images/logo.png')}/>
                
                <InputGlobal 
                    //errorMessage="Usuário ou senha inválidos" 
                    placeholder="Digite seu Email" 
                    title="Email"
                />
                <InputGlobal 
                    //errorMessage="Usuário ou senha inválidos" 
                    margin="0px 0px 16px 0px"
                    placeholder="Digite sua Senha" 
                    title="Senha"
                    secureTextEntry={true} // inibe senha com asterisco
                />

                <ButtonGlobal 
                    typeButton={theme.buttons.buttonsTheme.primary} 
                    margin='16px' 
                    title="ENTRAR" 
                    onPress={handleOnPress}
                />
            </ContainerLogin>
           
        </View>
    )

}   

export default Login;