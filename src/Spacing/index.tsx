import React from 'react';
import {View} from 'react-native';

interface Spacing {
  height?: number;
  width?: number;
}

const Spacing: React.FC<Spacing> = ({height = 20, width = 20}) => {
  return <View style={{height, width}} />;
};

export default Spacing;
