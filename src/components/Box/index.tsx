import React from 'react';
import {View} from 'react-native';
import type {BoxProps} from '../../types/types';
import {useViewStyles} from '../../core/utils/create_style';

const Box: React.FC<BoxProps> = ({children, ...props}) => {
  const {styles} = useViewStyles(props);

  return <View style={styles}>{children}</View>;
};

export default Box;
