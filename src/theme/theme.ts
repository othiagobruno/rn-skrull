import type {ITheme} from './types/theme.interface';

export const DefaultTheme: ITheme = {
  colors: {
    primary: '#ff7675',
    background: 'white',
    appBar: {
      background: '#ff7675',
      color: 'white'
    },
    tag: '#eee'
  },
  components: {
    appBar: {
      container: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3
      },
      wrapper: {
        paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 54
      },
      title: {
        fontSize: 18,
        fontWeight: '500',
        flex: 1
      },
      icons: {
        width: 42,
        height: 42
      },
      centerTitle: true
    },

    title: {
      fontSize: 32,
      fontWeight: '400',
      lineHeight: 32,
      color: '#333'
    },

    label: {
      fontSize: 14,
      marginVertical: 3,
      color: '#779c'
    },

    paragraph: {
      fontSize: 17,
      color: '#444c',
      fontWeight: '300'
    },

    button: {
      disabled: {
        opacity: 0.5
      },
      focusPressed: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5
      },
      variants: {
        default: {
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'center'
        },

        outline: {
          backgroundColor: 'transparent',
          borderWidth: 2,
          shadowColor: 'transparent'
        },
        solid: {
          alignItems: 'center'
        },
        text: {
          alignItems: 'center',
          backgroundColor: 'transparent',
          shadowColor: 'transparent'
        }
      },
      sizes: {
        small: {
          paddingVertical: 6.5,
          borderRadius: 4
        },
        larger: {
          paddingVertical: 16
        },
        medium: {
          paddingVertical: 12
        }
      },
      labelStyle: {
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: '500',
        color: '#fff'
      }
    },

    input: {
      placeholderTextColor: '#b2bec3',
      unselectOutlineColor: '#dfe6e9',
      disabled: {
        opacity: 0.3
      },
      variants: {
        default: {
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 14,
          fontSize: 16
        },
        outline: {
          borderWidth: 2,
          borderRadius: 6
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
