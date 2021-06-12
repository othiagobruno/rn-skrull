import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useStyles} from './styles';

interface Props extends Omit<TextStyle, 'style'> {
  children: React.ReactElement | string;
  style?: TextStyle;
}

const Paragraph: React.FC<Props> = ({children, style, ...props}) => {
  const getStyles = () => {
    let style: TextStyle = {};
    style = {...props};
    return style;
  };

  const styles = useStyles();
  return <Text style={[styles.text, style, getStyles()]}>{children}</Text>;
};

export default Paragraph;
