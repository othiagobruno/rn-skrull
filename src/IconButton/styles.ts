import {StyleSheet} from 'react-native';
import Color from 'color';
import {useTheme} from '../ThemeProvider';

export const useStyles = () => {
  const theme = useTheme().theme;
  const pressed = new Color(theme?.primary).darken(0.1).string();
  const pressed_opacity = new Color(theme?.primary).fade(0.8).string();

  return StyleSheet.create({
    button: {
      borderColor: theme.primary,
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
      backgroundColor: theme.primary
    },

    icon_white: {
      color: 'white'
    },

    icon_theme: {
      color: theme.primary
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
