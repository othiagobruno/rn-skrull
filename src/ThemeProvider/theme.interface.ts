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
}

interface AppBarComponent {
  container: ViewStyle;
  wrapper: ViewStyle;
  title: TextStyle;
  icons: TextStyle;
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
  };
}

interface Colors {
  primary?: string;
  background?: string;
  text?: string;
  label?: string;
  appBar?: AppBar;
}

interface AppBar {
  color: string;
  background: string;
}
