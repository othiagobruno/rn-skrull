import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useStyles} from './styles';

interface Props {
  children: React.ReactElement | string;
  style?: TextStyle;
}

const Paragraph: React.FC<Props> = ({children, style}) => {
  const styles = useStyles();
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Paragraph;
