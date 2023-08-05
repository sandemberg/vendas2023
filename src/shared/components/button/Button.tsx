import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { ActivityIndicatorButton, GradientButton, ButtonContainer, ButtonSecondary, ButtonDisabled } from './button.style';
import { theme } from '../../themes/themes';
import TextGlobal from '../text/Text';
import { textTypes } from '../text/textTypes';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    typeButton?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;

}

const ButtonGlobal = ({typeButton, loading, disabled, title, margin, onPress,  ...props}: ButtonProps) => {

    const handleOnPress = () => {
        if(!loading && ! disabled && onPress) {
            onPress();
        }
    }
    
    const renderText = (color: string) => (
        <>
        <TextGlobal typee={textTypes.BUTTON_SEMI_BOLD} cor={color}>
            {title}
        </TextGlobal>

        {loading && <ActivityIndicatorButton color={theme.colors.neutralTheme.white}/>}
        </>
     );
    
     if (disabled) {
        return (
            <ButtonDisabled>
                {renderText(theme.colors.neutralTheme.white)}
            </ButtonDisabled>
        );
     }

    switch (typeButton) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonSecondary {...props} marginn={margin} onPress={handleOnPress}>
                    {renderText(theme.colors.mainTheme.primary)}
                </ButtonSecondary>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer marginn={margin} {...props} onPress={handleOnPress}>
                    <GradientButton 
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 1.0, y: 1.0}}
                        colors={[theme.colors.purpleTheme.purple80,  theme.colors.pinkTheme.pink80]}
                >  
                        {renderText(theme.colors.neutralTheme.white)}
                    </GradientButton>
                </ButtonContainer >
            )
    }
};
export default ButtonGlobal;