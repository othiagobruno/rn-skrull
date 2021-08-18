import type {TextStyle, ViewStyle} from 'react-native';

export interface ITheme {
  colors: Colors;
  components: {
    input: Input;
    button: Button;
    title: TextStyle;
    paragraph: TextStyle;
    label: TextStyle;
    appBar: AppBarComponent;
  };
  [index: string]: any;
}

interface AppBarComponent {
  container: ViewStyle;
  wrapper: ViewStyle;
  title: TextStyle;
  icons: TextStyle;
  centerTitle: boolean;
}

interface Button {
  disabled: {
    opacity: number;
  };
  focusPressed: ViewStyle;
  variants: {
    default: ViewStyle;
    outline: ViewStyle;
    text: ViewStyle;
    solid: ViewStyle;
  };
  sizes: {
    small: ViewStyle;
    larger: ViewStyle;
    medium: ViewStyle;
  };
  labelStyle: TextStyle;
}

interface Input {
  disabled: {
    opacity: number;
  };
  unselectOutlineColor: string;
  placeholderTextColor: string;
  variants: {
    default: ViewStyle | TextStyle;
    outline: ViewStyle | TextStyle;
    solid: ViewStyle | TextStyle;
    flat: ViewStyle | TextStyle;
    error: ViewStyle | TextStyle;
  };
}

interface Colors {
  primary: string;
  background: string;
  appBar: AppBar;
  [index: string]: any;
}

interface AppBar {
  color: string;
  background: string;
}
