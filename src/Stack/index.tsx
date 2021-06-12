import React, {ReactNode} from 'react';
import {FlexAlignType, View, ViewStyle} from 'react-native';

interface StackProps extends Omit<ViewStyle, 'direction'> {
  direction?: 'row' | 'column';
  align?: FlexAlignType;
  children: JSX.Element[] | (Element & ReactNode) | JSX.Element;
}

const Stack: React.FC<StackProps> = props => {
  const getStyles = () => {
    let style: ViewStyle = {};
    style = {...props} as Omit<ViewStyle, 'direction'>;
    if (!props.padding) style.padding = 20;
    if (props.align) style.alignItems = props?.align ?? 'flex-start';
    if (props?.direction) style.flexDirection = props?.direction;
    else style.flexDirection = 'column';
    return style;
  };

  return <View style={{...getStyles()}}>{props.children}</View>;
};

export default Stack;
