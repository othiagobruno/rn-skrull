import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '../ThemeProvider';

import {styles} from './styles';

interface Props {
  children: React.ReactElement | string;
  style?: TextStyle;
}

const Paragraph: React.FC<Props> = ({children, style}) => {
  const color = useTheme().theme?.text;
  return <Text style={[styles.text, {color}, style]}>{children}</Text>;
};

export default Paragraph;
