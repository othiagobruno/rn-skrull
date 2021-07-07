// THEME PROVIDER
export {ThemeProvider, useTheme} from './theme/provider';
export {DefaultTheme} from './theme/theme';

// INTERFACES
export type {iThemeOverride as ThemeProps} from './theme/types/theme.non.interface';
export type {BoxProps, CenterProps, ParagraphProps, StackProps, TextProps, TitleProps} from './types/types';

// COMPONENTS
export {default as Title} from './components/Title';
export {default as Paragraph} from './components/Paragraph';
export {default as Button} from './components/Button';
export {default as Spacing} from './components/Spacing';
export {default as Label} from './components/Label';
export {default as IconButton} from './components/IconButton';
export {default as AppBar} from './components/AppBar';
export {default as Input} from './components/Input';
export {default as Stack} from './components/Stack';
export {default as Box} from './components/Box';
export {default as SafeView} from './components/SafeView';
export {default as Center} from './components/Center';
export {default as Text} from './components/Text';
export {default as Icon} from './components/Icons';
export {default as CheckBox} from './components/CheckBox';
export {default as Tag} from './components/Tag';
export {ActivityIndicator} from './components/ActivityIndicator';

export {useTextStyles, useViewStyles} from './core/utils/create_style';
