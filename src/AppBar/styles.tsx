import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '../ThemeProvider';

export const useStyles = () => {
  const {colors, components} = useTheme();

  return StyleSheet.create({
    appBar: {
      ...components.appBar.container,
      backgroundColor: components?.appBar?.container?.backgroundColor ?? colors?.appBar?.background ?? ''
    },

    safe: {
      ...components.appBar.wrapper
    },

    title: {
      ...components.appBar.title,
      color: components.appBar.icons.color ?? colors.appBar?.color ?? '',
      textAlign: 'center'
    },

    icon: {
      ...components.appBar.icons,
      color: components.appBar.icons.color ?? colors.appBar?.color
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      width: Dimensions.get('screen').width / 3.6,
      paddingLeft: 6
    },

    center: {
      flexDirection: 'row',
      alignItems: 'center',
      width: Dimensions.get('screen').width / 2.4,
      justifyContent: 'center'
    },

    row_end: {
      flexDirection: 'row',
      alignItems: 'center',
      width: Dimensions.get('screen').width / 3.6,
      justifyContent: 'flex-end',
      paddingRight: 6
    }
  });
};
