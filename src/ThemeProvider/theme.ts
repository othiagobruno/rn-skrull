import type {ITheme} from './theme.interface';

export const DefaultTheme: ITheme = {
  colors: {
    primary: '#6c5ce7',
    background: 'white',
    text: '#2d3436',
    label: '#636e72',
    appBar: {
      background: '#6c5ce7',
      color: 'white'
    }
  },
  components: {
    appBar: {
      container: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5
      },
      wrapper: {
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      title: {
        fontSize: 18,
        fontWeight: '500',
        flex: 1
      },
      icons: {
        width: 42,
        height: 42
      }
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
          borderWidth: 2
        },
        solid: {
          alignItems: 'center'
        },
        text: {
          alignItems: 'center',
          backgroundColor: 'transparent'
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
      placeholderTextColor: '#ccc',
      unselectOutlineColor: '#ccc',
      disabled: {
        opacity: 0.5
      },
      variants: {
        default: {
          borderRadius: 8,
          paddingHorizontal: 15,
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
          backgroundColor: '#ecf0f1'
        },
        flat: {
          borderRadius: 0,
          borderBottomWidth: 2
        }
      }
    }
  }
};
