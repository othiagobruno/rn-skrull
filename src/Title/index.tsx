import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '../ThemeProvider';

import {styles} from './styles';

interface Props {
  children: string;
  style?: TextStyle;
  numberOfLines?: number;
}

const Title: React.FC<Props> = ({children, style, numberOfLines}) => {
  const textColor = useTheme().theme?.text;

  return (
    <Text ellipsizeMode="tail" numberOfLines={numberOfLines} style={[styles.title, {color: textColor}, style]}>
      {children}
    </Text>
  );
};

export default Title;
