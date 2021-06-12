import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

interface CenterProps extends ViewStyle {
  children: JSX.Element[] | (Element & ReactNode) | JSX.Element;
}

const Center: React.FC<CenterProps> = props => {
  const getStyles = () => {
    let style: ViewStyle = {};
    style = {...props};
    style.alignItems = 'center';
    style.justifyContent = 'center';
    style.alignContent = 'center';

    return style;
  };

  return <View style={{...getStyles()}}>{props.children}</View>;
};

export default Center;
