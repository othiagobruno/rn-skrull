/* eslint-disable max-len */
import * as React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export type IconProps = {
  name: string;
  color?: string;
  size?: number;
  allowFontScaling?: boolean;
  direction?: 'rtl' | 'ltr';
};

let VectorIcon: React.ComponentType<
  TextProps & {
    name: string;
    color: string;
    size: number;
  }
>;

try {
  VectorIcon = require('react-native-vector-icons/Feather').default;
} catch (e) {
  let isErrorLogged = false;
  VectorIcon = ({name, color, size, ...rest}) => {
    if (!isErrorLogged) {
      console.warn(`We didn't find this icon ${name}`);
      isErrorLogged = true;
    }

    return (
      <Text {...rest} style={[styles.icon, {color, fontSize: size}]} selectable={false}>
        □
      </Text>
    );
  };
}

const Icon = ({name, color, size, direction, allowFontScaling}: IconProps) => (
  <VectorIcon
    allowFontScaling={allowFontScaling}
    name={name}
    color={color ?? '#333'}
    size={size ?? 20}
    style={[
      {
        transform: [{scaleX: direction === 'rtl' ? -1 : 1}],
        lineHeight: size
      },
      styles.icon
    ]}
    selectable={false}
  />
);

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent'
  }
});

export default Icon;
