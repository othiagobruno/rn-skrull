export interface ITheme {
  colors: Colors;
  components: {
    input: Input;
  };
}

interface Input {
  disabled: {
    opacity: number;
  };
  unselectOutlineColor: string;
  variants: {
    inital: {
      borderRadius: number;
      paddingHorizontal: number;
      paddingVertical: number;
      fontSize: number;
    };
    outline: {
      borderWidth: number;
      borderRadius: number;
    };
    solid: {
      borderRadius: number;
      borderWidth: number;
      backgroundColor: string;
    };
    flat: {
      borderRadius: number;
      borderBottomWidth: number;
    };
  };
}

interface Colors {
  primary: string;
  background: string;
  text: string;
  label: string;
  appBar: AppBar;
}

interface AppBar {
  color: string;
  background: string;
}
