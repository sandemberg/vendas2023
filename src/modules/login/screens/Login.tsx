import { NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native"
import { ContainerLogin, ImageLogo } from "../login.style";
import InputGlobal from "../../../shared/components/input/Input";
import ButtonGlobal from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/themes";
import { useLogin } from "../hooks/useLogin";
import axios from "axios";
import { useState } from "react";



const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleOnPress = async () => {
        setLoading(true);
        const resultAxios = await axios.post('http://192.168.0.25:8080/auth', {
            email,
            password,
        }).catch(() => {
            setErrorMessage('Usuario ou senha inválidos')
        })
        setLoading(false)
        console.log('clicou')
    };

    const handleOnChangeEmail =  (event:NativeSyntheticEvent<TextInputChangeEventData>) =>  {
        setErrorMessage('');
        setEmail(event.nativeEvent.text);
    }

    const handleOnChangePassword =  (event:NativeSyntheticEvent<TextInputChangeEventData>) =>  {
        setErrorMessage('');
        setPassword(event.nativeEvent.text);
    }

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