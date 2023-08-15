import axios from "axios";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";


export const useLogin = () => {

        
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleOnPress = async () => {
        setLoading(true);
        await axios
        .post('http://192.168.0.25:8080/auth', {
            email,
            password,
        }). 
        catch(() => {
            setErrorMessage('Usuário ou senha inválidos')
        });
        setLoading(false);
        //console.log('clicou')
    
        // TESTE CONEXAO COM BD
         //   const returnBD = await axios.get('http://192.168.0.25:8080/correios/01029-010') 
         //   console.log('returnBD', returnBD.data)
    };
    
    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setEmail(event.nativeEvent.text);
    }
    
    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setPassword(event.nativeEvent.text);
    }
    
return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
}

}

