import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {createViewStyles} from '../../core/utils/create_style';
import type {IViewStyleConstants} from '../../core/utils/view_styles';

interface StackProps extends IViewStyleConstants, Omit<ViewStyle, 'direction'> {
  children: JSX.Element[] | (Element & ReactNode) | JSX.Element;
}

const Stack: React.FC<StackProps> = ({children, ...props}) => {
  return <View style={[{padding: 20}, createViewStyles(props)]}>{children}</View>;
};

export default Stack;
