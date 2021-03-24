import {ITheme} from './theme.d';

export const DefaultTheme: ITheme = {
  colors: {
    primary: '#00b894',
    background: '#fffff',
    text: '#2d3436',
    label: '#636e72',
    appBar: {
      background: '#dfe6e9',
      color: '#222'
    }
  },
  // Input
  components: {
    input: {
      unselectOutlineColor: '#ccc',
      disabled: {
        opacity: 0.5
      },
      variants: {
        inital: {
          borderRadius: 8,
          paddingHorizontal: 15,
          paddingVertical: 14,
          fontSize: 16
        },
        outline: {
          borderWidth: 2,
          borderRadius: 10
        },
        solid: {
          borderRadius: 10,
          borderWidth: 0,
          backgroundColor: '#dfe6e9'
        },
        flat: {
          borderRadius: 0,
          borderBottomWidth: 2
        }
      }
    }
  }
};
