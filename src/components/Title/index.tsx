import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useStyles} from './styles';
import {useTextStyles} from '../../core/utils/create_style';
import type {ITextStylesConstants} from '../../core/utils/text_styles';

interface Props extends ITextStylesConstants, TextStyle {
  children: string;
  numberOfLines?: number;
  style?: TextStyle;
}

const Title: React.FC<Props> = ({children, numberOfLines, style, ...props}) => {
  const styles = useStyles();
  return (
    <Text ellipsizeMode="tail" numberOfLines={numberOfLines ?? 10} style={[styles.text, style, useTextStyles(props)]}>
      {children}
    </Text>
  );
};

export default Title;
