import { TouchableOpacityProps } from 'react-native';
import { GradientButton } from './button.style';

import { theme } from '../../themes/themes';
import TextGlobal from '../text/Text';
import { ButtonContainer, ButtonSecondary } from './button.style';
import { textTypes } from '../text/textTypes';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    typeButton?: string;
}

const ButtonGlobal = ({typeButton, title, margin, ...props}: ButtonProps) => {
    
    switch (typeButton) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <GradientButton marginn={margin} {...props}>
                    <TextGlobal typee={textTypes.BUTTON_BOLD} cor={theme.colors.mainTheme.primary}>{title}</TextGlobal>
                </GradientButton>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer marginn={margin} {...props}>
                <GradientButton 
                        start={{x: 0.0, y: 0.0}}
                         end={{x: 1.0, y: 1.0}}
                         colors={[theme.colors.purpleTheme.purple80,  theme.colors.pinkTheme.pink80]}
                >
                    <TextGlobal typee={textTypes.BUTTON_BOLD} cor={theme.colors.neutralTheme.white}>{title}</TextGlobal>
                </GradientButton>
            </ButtonContainer >
            )
    }
};
export default ButtonGlobal;