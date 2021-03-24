import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '../ThemeProvider';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    appBar: {
      borderColor: '#ccc',
      backgroundColor: colors.appBar.background
    },

    safe: {
      paddingVertical: 6,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    title: {
      fontSize: 18,
      textTransform: 'uppercase',
      paddingLeft: 10,
      fontWeight: 'bold',
      color: colors.appBar.color,
      flex: 1,
      textAlign: 'center'
    },

    icon: {
      width: 42,
      height: 42,
      color: colors.appBar.color
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
      justifyContent: 'center',
      flexWrap: 'nowrap'
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
