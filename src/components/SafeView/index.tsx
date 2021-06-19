import React, {ReactNode} from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {createViewStyles} from '../../core/utils/create_style';
import type {IViewStyleConstants} from '../../core/utils/view_styles';

interface SafeViewProps extends IViewStyleConstants, Omit<ViewStyle, 'direction'> {
  children?: JSX.Element[] | (Element & ReactNode) | JSX.Element;
}

const SafeView: React.FC<SafeViewProps> = ({children, ...props}) => {
  return <SafeAreaView style={[{flex: 1}, createViewStyles(props)]}>{children}</SafeAreaView>;
};

export default SafeView;
