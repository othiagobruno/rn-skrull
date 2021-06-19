import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useStyles} from './styles';
import {createTextStyles} from '../../core/utils/create_style';
import type {ITextStylesConstants} from '../../core/utils/text_styles';

interface Props extends ITextStylesConstants, TextStyle {
  children: string;
  numberOfLines?: number;
  style?: TextStyle;
}

const Label: React.FC<Props> = ({children, style, ...props}) => {
  const styles = useStyles();
  return <Text style={[styles.text, style, createTextStyles(props)]}>{children}</Text>;
};

export default Label;
