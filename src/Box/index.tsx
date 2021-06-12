import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

interface BoxProps extends ViewStyle {
  children: JSX.Element[] | (Element & ReactNode) | JSX.Element;
  w?: number;
  h?: number;
}

const Box: React.FC<BoxProps> = ({w = 0, h = 0, ...props}) => {
  const getStyles = () => {
    let style: ViewStyle = {};
    style = {...props};
    return style;
  };

  const {width, height} = props;

  return <View style={{...getStyles(), width: w ?? width, height: h ?? height}}>{props.children}</View>;
};

export default Box;
