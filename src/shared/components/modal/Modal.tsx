import {Alert, ModalProps as ModalPropsReact, Modal as ModalReact, Text, Pressable, View} from 'react-native';

interface ModalProps extends ModalPropsReact {
    title?: string,
    text?: string,
    onCloseModal?: () => void;  
}

const ModalGlobal = ({title, text, onCloseModal, ...props}: ModalProps) => {
    

    return (
        <ModalReact
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            onCloseModal
            }}
            {...props}
            >
           
            <View>
                <View>
                    <Text>{title}</Text>
                    <Text>{text}</Text>
                    <Pressable
                        onPress={onCloseModal}>
                        <Text>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </ModalReact>
    )
}

export default ModalGlobal