import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {createViewStyles} from '../../core/utils/create_style';
import type {IViewStyleConstants} from '../../core/utils/view_styles';

interface CenterProps extends IViewStyleConstants, Omit<ViewStyle, 'direction'> {
  children: JSX.Element[] | (Element & ReactNode) | JSX.Element;
}

const Center: React.FC<CenterProps> = ({children, ...props}) => {
  return <View style={[{alignItems: 'center', justifyContent: 'center'}, createViewStyles(props)]}>{children}</View>;
};

export default Center;
