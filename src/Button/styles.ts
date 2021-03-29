import {StyleSheet} from 'react-native';
import Color from 'color';
import {useTheme} from '../ThemeProvider';

export const useStyles = () => {
  const {colors, components} = useTheme();
  const pressed = new Color(colors?.primary).darken(0.1).string();
  const pressed_opacity = new Color(colors?.primary).fade(0.8).string();

  return StyleSheet.create({
    label: {
      ...components.button.labelStyle
    },

    label_outline: {
      color: colors?.primary
    },

    icon: {
      marginRight: 15,
      color: 'white'
    },

    label_solid: {},

    label_text: {
      color: colors?.primary
    },

    button: {
      ...components.button.variants.default,
      backgroundColor: components.button.variants.default.backgroundColor ?? colors?.primary,
      borderColor: components.button.variants.default.borderColor ?? colors?.primary
    },

    solid: {
      ...components.button.variants.solid
    },

    outline: {
      ...components.button.variants.outline
    },

    text: {
      ...components.button.variants.text
    },

    button_small: {
      ...components.button.sizes.small
    },

    button_larger: {
      ...components.button.sizes.larger
    },

    button_medium: {
      ...components.button.sizes.medium
    },

    pressed: {
      ...components.button.focusPressed,
      backgroundColor: components.button.focusPressed.backgroundColor ?? pressed
    },

    pressed_opacity: {
      backgroundColor: pressed_opacity
    },

    button_disabled: {
      ...components.button.disabled
    }
  });
};
