import React from 'react';
import {View} from 'react-native';

interface Spacing {
  height?: number;
  width?: number;
  w?: number;
  h?: number;
}

const Spacing: React.FC<Spacing> = ({height = 20, width = 20, h, w}) => {
  return <View style={{height: h ?? height, width: w ?? width}} />;
};

export default Spacing;
