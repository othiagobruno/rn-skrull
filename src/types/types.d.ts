import type {IViewStyleConstants} from '../core/utils/view_styles';
import type {ITextStylesConstants} from '../core/utils/text_styles';
import type {TextStyle, ViewStyle} from 'react-native';

export interface BoxProps extends IViewStyleConstants, ViewStyle {}
export interface StackProps extends IViewStyleConstants, Omit<ViewStyle, 'direction'> {}
export interface CenterProps extends IViewStyleConstants, Omit<ViewStyle, 'direction'> {}

export interface TextProps extends ITextStylesConstants, TextStyle {}
export interface TitleProps extends ITextStylesConstants, TextStyle {}
export interface ParagraphProps extends ITextStylesConstants, TextStyle {}
