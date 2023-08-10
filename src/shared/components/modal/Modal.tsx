import {Alert, ModalProps as ModalPropsReact, Modal as ModalReact } from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import TextGlobal from '../text/Text';
import { theme } from '../../themes/themes';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';


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
           
            <ContainerModal>
                <TextGlobal 
                    typee={textTypes.PARAGRAPH_SEMI_BOLD} 
                    cor={theme.colors.mainTheme.primary} 
                >
                    {title}
                </TextGlobal>
                <TextGlobal>
                    {text}
                </TextGlobal>
                <Button title='OK' onPress={onCloseModal}/>
                <IconCloseModal onPress={onCloseModal} name='cross' size={13}/>
            </ContainerModal>
        </ModalReact>
    )
}

export default ModalGlobal