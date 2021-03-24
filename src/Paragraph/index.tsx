import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '../ThemeProvider';

import {styles} from './styles';

interface Props {
  children: React.ReactElement | string;
  style?: TextStyle;
}

const Paragraph: React.FC<Props> = ({children, style}) => {
  const {colors} = useTheme();
  return <Text style={[styles.text, {color: colors.text}, style]}>{children}</Text>;
};

export default Paragraph;
