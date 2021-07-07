import React from 'react';
import {View} from 'react-native';
import {useViewStyles} from '../../core/utils/create_style';
import type {StackProps} from '../../types/types';

const Stack: React.FC<StackProps> = ({children, ...props}) => {
  const {styles} = useViewStyles(props);
  return <View style={[{padding: 20}, styles]}>{children}</View>;
};

export default Stack;
