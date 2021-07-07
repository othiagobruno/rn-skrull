import React from 'react';
import {SafeAreaView} from 'react-native';
import type {BoxProps} from 'src/types/types';
import {useViewStyles} from '../../core/utils/create_style';

const SafeView: React.FC<BoxProps> = ({children, ...props}) => {
  const {styles} = useViewStyles(props);
  return <SafeAreaView style={[{flex: 1}, styles]}>{children}</SafeAreaView>;
};

export default SafeView;
