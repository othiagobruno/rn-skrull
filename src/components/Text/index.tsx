import React from 'react';
import {Text as ReactText, TextStyle} from 'react-native';
import {useTextStyles} from '../../core/utils/create_style';
import type {ITextStylesConstants} from '../../core/utils/text_styles';

interface Props extends ITextStylesConstants, TextStyle {
  children: string;
  numberOfLines?: number;
}

const Text: React.FC<Props> = ({children, ...props}) => {
  return <ReactText style={[{fontSize: 14}, useTextStyles(props)]}>{children}</ReactText>;
};

export default Text;
