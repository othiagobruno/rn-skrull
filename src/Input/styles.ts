import {StyleSheet} from 'react-native';
import {useTheme} from '../ThemeProvider';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    input_view: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    input: {
      flex: 1,
      ...theme.components.input.variants.default
    },

    outline: {
      borderColor: theme.colors.primary ?? '',
      ...theme.components.input.variants.outline
    },

    solid: {
      ...theme.components.input.variants.solid
    },

    flat: {
      borderColor: theme.colors.primary ?? '',
      ...theme.components.input.variants.flat
    },

    unselect: {
      borderColor: theme.components.input.unselectOutlineColor
    },

    disabled: {
      ...theme.components.input.disabled
    }
  });
};
