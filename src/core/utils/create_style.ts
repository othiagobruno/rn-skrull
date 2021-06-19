import type {TextStyle, ViewStyle} from 'react-native';

import {IViewStyleConstants, viewStyleConstants} from './view_styles';
import {ITextStylesConstants, textStylesConstants} from './text_styles';

export const createViewStyles = (props: any) => {
  const styles: ViewStyle = {};
  for (const keys in props) {
    const value = props[keys as keyof ViewStyle];
    const key = viewStyleConstants[keys as keyof IViewStyleConstants] as keyof ViewStyle;
    if (key) styles[key] = value;
    else styles[keys as keyof ViewStyle] = value;
  }
  return styles;
};

export const createTextStyles = (props: any) => {
  const styles: TextStyle = {};

  for (const keys in props) {
    const value = props[keys as keyof TextStyle];
    const key = textStylesConstants[keys as keyof ITextStylesConstants] as keyof TextStyle;
    if (key) styles[key] = value;
    else styles[keys as keyof TextStyle] = value;
  }
  return styles;
};