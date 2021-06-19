import {useTheme} from '../../theme/provider';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {components, colors} = useTheme();

  return StyleSheet.create({
    text: {
      ...components.label,
      color: components.label.color ?? colors.text
    }
  });
};
