import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '../ThemeProvider';

import {styles} from './styles';

interface Props {
  children: React.ReactElement | string;
  style?: TextStyle;
}

const Label: React.FC<Props> = ({children, style}) => {
  const {colors} = useTheme();
  return <Text style={[styles.text, {color: colors.label}, style]}>{children}</Text>;
};

export default Label;
