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
  const {colors} = useTheme();

  return (
    <Text ellipsizeMode="tail" numberOfLines={numberOfLines} style={[styles.title, {color: colors.text}, style]}>
      {children}
    </Text>
  );
};

export default Title;
