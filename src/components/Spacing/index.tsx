import React from 'react';
import {View, ViewStyle} from 'react-native';

import {createViewStyles} from '../../core/utils/create_style';
import type {IViewStyleConstants} from '../../core/utils/view_styles';

interface SpacingProps extends IViewStyleConstants, Omit<ViewStyle, 'direction'> {}

const Spacing: React.FC<SpacingProps> = props => {
  return <View style={[{width: 14, height: 14}, createViewStyles(props)]} />;
};

export default Spacing;
