import React from 'react';
import {Text, TextStyle} from 'react-native';

import {useStyles} from './styles';

interface Props {
  children: string;
  style?: TextStyle;
  numberOfLines?: number;
}

const Title: React.FC<Props> = ({children, style, numberOfLines}) => {
  const styles = useStyles();

  return (
    <Text ellipsizeMode="tail" numberOfLines={numberOfLines} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default Title;
