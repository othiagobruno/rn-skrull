import React from 'react';
import {View} from 'react-native';
import {createViewStyles} from '../../core/utils/create_style';
import type {StackProps} from '../../types/types';

const Stack: React.FC<StackProps> = ({children, ...props}) => {
  return <View style={[{padding: 20}, createViewStyles(props)]}>{children}</View>;
};

export default Stack;
