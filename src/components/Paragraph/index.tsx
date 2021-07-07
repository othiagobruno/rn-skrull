import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTextStyles} from '../../core/utils/create_style';
import type {ITextStylesConstants} from '../../core/utils/text_styles';
import {useTheme} from '../../theme/provider';

interface Props extends ITextStylesConstants, TextStyle {
  children: string;
  numberOfLines?: number;
}

const Paragraph: React.FC<Props> = ({children, ...props}) => {
  const {components} = useTheme();
  return (
    <Text
      style={[
        {
          ...components.paragraph
        },
        useTextStyles(props)
      ]}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
