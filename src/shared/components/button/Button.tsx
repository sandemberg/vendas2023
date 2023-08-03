import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/themes';
import TextGlobal from '../text/Text';
import { ButtonContainer } from './button.style';
import { textTypes } from '../text/textTypes';



interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}

const ButtonGlobal = ({title, margin, ...props}: ButtonProps) => {
    return (
        <ButtonContainer marginn={margin} {...props}>
            <TextGlobal typee={textTypes.TITLE  } cor={theme.colors.neutralTheme.white}>{title}</TextGlobal>
        </ButtonContainer>
    )

};
export default ButtonGlobal;