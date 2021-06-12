import {StyleSheet} from 'react-native';
import Color from 'color';
import {useTheme} from '../ThemeProvider';

export const useStyles = () => {
  const {colors} = useTheme();
  const pressed = new Color(colors.primary).darken(0.5).string();
  const pressed_opacity = new Color(colors.primary).darken(0.2).rgb().fade(0.8).string();

  return StyleSheet.create({
    button: {
      borderColor: colors.primary ?? '',
      padding: 10,
      borderRadius: 50,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },

    default: {
      backgroundColor: 'transparent'
    },

    solid: {
      backgroundColor: colors.primary ?? ''
    },

    icon_white: {
      color: 'white'
    },

    icon_theme: {
      color: colors.primary ?? ''
    },

    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2
    },

    pressed: {
      backgroundColor: pressed
    },
    pressed_opacity: {
      backgroundColor: pressed_opacity
    },

    badge: {
      backgroundColor: 'red',
      position: 'absolute',
      zIndex: 100,
      borderRadius: 40,
      right: -3,
      top: -3,
      width: 15,
      height: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },

    badge_label: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 10
    }
  });
};
