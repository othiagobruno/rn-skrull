import React from 'react';
import {View} from 'react-native';
import type {BoxProps} from '../../types/types';
import {createViewStyles} from '../../core/utils/create_style';

const Box: React.FC<BoxProps> = ({children, ...props}) => {
  return <View style={createViewStyles(props)}>{children}</View>;
};

export default Box;
