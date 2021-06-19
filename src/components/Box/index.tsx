import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {createViewStyles} from '../../core/utils/create_style';
import type {IViewStyleConstants} from '../../core/utils/view_styles';

interface BoxProps extends IViewStyleConstants, Omit<ViewStyle, 'direction'> {
  children?: JSX.Element[] | (Element & ReactNode) | JSX.Element;
}

const Box: React.FC<BoxProps> = ({children, ...props}) => {
  return <View style={createViewStyles(props)}>{children}</View>;
};

export default Box;
