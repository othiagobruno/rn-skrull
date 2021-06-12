import React from 'react';
import {Text, TextStyle} from 'react-native';

import {useStyles} from './styles';

interface Props extends Omit<TextStyle, 'style'> {
  children: string;
  style?: TextStyle;
  numberOfLines?: number;
}

const Title: React.FC<Props> = ({children, style, numberOfLines, ...props}) => {
  const styles = useStyles();

  const getStyles = () => {
    let style: TextStyle = {};
    style = {...props};
    return style;
  };

  return (
    <Text ellipsizeMode="tail" numberOfLines={numberOfLines ?? 10} style={[styles.text, style, getStyles()]}>
      {children}
    </Text>
  );
};

export default Title;
