import type {TextStyle, ViewStyle} from 'react-native';

import {IViewStyleConstants, viewStyleConstants} from './view_styles';
import {ITextStylesConstants, textStylesConstants} from './text_styles';
import {useTheme} from '../../theme/provider';

export const useViewStyles = (props: any) => {
  const {colors} = useTheme();

  const convertColor = (cColor: any) => {
    const [key, color] = cColor?.split('.') ?? [];
    if (color && typeof colors[key][color] === 'string') {
      return colors[key][color];
    } else if (typeof colors[key] === 'string') {
      return colors[key];
    }
    return cColor ?? colors.primary;
  };

  const listColors: any[] = ['bg', 'color', 'backgroundColor', 'borderColor'];

  const styles: ViewStyle = {};
  for (const keys in props) {
    const value = props[keys as keyof ViewStyle];
    const key = viewStyleConstants[keys as keyof IViewStyleConstants] as keyof ViewStyle;
    if (key) {
      if (listColors.includes(keys)) {
        styles[key] = convertColor(value);
      } else styles[key] = value;
    } else {
      if (listColors.includes(keys)) {
        styles[keys as keyof ViewStyle] = convertColor(value);
      } else styles[keys as keyof ViewStyle] = value;
    }
  }
  return {styles};
};

export const useTextStyles = (props: any) => {
  const {colors} = useTheme();
  const styles: TextStyle = {};

  const convertColor = (cColor: any) => {
    const [key, color] = cColor?.split('.') ?? [];
    if (color && typeof colors[key][color] === 'string') {
      return colors[key][color];
    } else if (typeof colors[key] === 'string') {
      return colors[key];
    }
    return cColor ?? colors.primary;
  };

  const listColors: any[] = ['bg', 'color', 'backgroundColor', 'borderColor'];

  for (const keys in props) {
    const value = props[keys as keyof TextStyle];
    const key = textStylesConstants[keys as keyof ITextStylesConstants] as keyof TextStyle;
    if (key) {
      if (listColors.includes(key)) {
        styles[key] = convertColor(value);
      } else styles[key] = value;
    } else {
      if (listColors.includes(keys)) {
        styles[keys as keyof ViewStyle] = convertColor(value);
      } else styles[keys as keyof ViewStyle] = value;
    }
  }
  return styles;
};
