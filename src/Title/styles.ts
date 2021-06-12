import {useTheme} from '../ThemeProvider';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {components, colors} = useTheme();

  return StyleSheet.create({
    text: {
      ...components.title,
      color: components.title.color ?? colors.text ?? ''
    }
  });
};
