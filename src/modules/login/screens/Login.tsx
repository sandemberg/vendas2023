import {  View } from "react-native"
import { ContainerLogin, ImageLogo } from "../login.style";
import InputGlobal from "../../../shared/components/input/Input";
import ButtonGlobal from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/themes";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

    const {
        email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
    } = useLogin();

    return (
        <View>
            <ContainerLogin>
                <ImageLogo resizeMOde='contain' source={require('../../../assets/images/logo.png')}/>
                
                <InputGlobal 
                    value={email}
                    errorMessage={errorMessage}
                    margin="0px 0px 16px 0px"
                    placeholder="Digite seu Email" 
                    title="Email"
                    onChange={handleOnChangeEmail}
                />
                <InputGlobal 
                    errorMessage={errorMessage} 
                    value={password}
                    placeholder="Digite sua Senha" 
                    title="Senha"
                    secureTextEntry={true} // inibe senha com asterisco
                    onChange={handleOnChangePassword}
                />

                <ButtonGlobal 
                    typeButton={theme.buttons.buttonsTheme.primary} 
                    loading={loading}
                    margin='16px' 
                    title="ENTRAR" 
                    onPress={handleOnPress}
                />
            </ContainerLogin>
           
        </View>
    )

}   

export default Login;