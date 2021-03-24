import {StyleSheet} from 'react-native';
import Color from 'color';
import {useTheme} from '../ThemeProvider';

export const useStyles = () => {
  const {colors} = useTheme();
  const pressed = new Color(colors?.primary).darken(0.1).string();
  const pressed_opacity = new Color(colors?.primary).fade(0.8).string();

  return StyleSheet.create({
    label: {
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: '700',
      color: '#fff'
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
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 4,
      backgroundColor: colors?.primary,
      borderColor: colors?.primary,
      flexDirection: 'row',
      justifyContent: 'center'
    },

    solid: {
      alignItems: 'center'
    },

    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2
    },

    text: {
      alignItems: 'center',
      backgroundColor: 'transparent'
    },

    button_small: {
      paddingVertical: 8,
      borderRadius: 4
    },

    button_larger: {
      paddingVertical: 16
    },

    pressed: {
      backgroundColor: pressed
    },
    pressed_opacity: {
      backgroundColor: pressed_opacity
    },

    button_disabled: {
      opacity: 0.6
    }
  });
};
